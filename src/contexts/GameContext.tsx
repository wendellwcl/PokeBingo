"use client";

import { createContext, Dispatch, useReducer } from "react";

// //Types
import { game, gameActions, gameStatus, gameTypes } from "@/types/game";

interface GameContextProps {
    game: game | null;
    dispatchGame: Dispatch<gameActions>;
}

const DEFAULT_GAME = {
    gameSpecies: [],
    gameTypes: [],
    index: 0,
    hits: 0,
    status: gameStatus.loading,
};

const DEFAULT_VALUE = {
    game: DEFAULT_GAME,
    dispatchGame: () => {},
};

export const GameContext = createContext<GameContextProps>(DEFAULT_VALUE);

export default function GameContextProvider({ children }: { children: React.ReactNode }) {
    const [game, dispatchGame] = useReducer(reducerGame, DEFAULT_GAME);

    function reducerGame(state: game, action: gameActions) {
        switch (action.type) {
            case "init":
                return {
                    gameSpecies: action.gameSpecies,
                    gameTypes: handleGameTypes(action.gameTypes),
                    index: 0,
                    hits: 0,
                    status: gameStatus.playing,
                };

            case "next":
                if (state) {
                    if (state.index < state.gameSpecies.length - 1) {
                        return { ...state, index: state.index + 1 };
                    }

                    return { ...state, status: gameStatus.failed };
                }

                return state;

            case "check":
                if (state) {
                    if (state.gameSpecies[state.index].types.includes(action.target)) {
                        const updatedState = {
                            ...state,
                            gameTypes: state.gameTypes.map((type: gameTypes) => {
                                return type.name === action.target ? { name: type.name, checked: true } : type;
                            }),
                            index: state.index + 1,
                            hits: state.hits + 1,
                        };

                        if (
                            !(updatedState.index < state.gameSpecies.length) &&
                            updatedState.hits !== state.gameTypes.length
                        ) {
                            return { ...updatedState, status: gameStatus.failed };
                        } else if (updatedState.hits === state.gameTypes.length) {
                            return { ...updatedState, status: gameStatus.success };
                        }

                        return updatedState;
                    }

                    return { ...state, index: state.index + 1 };
                }

                return state;

            case "restart":
                if (state) {
                    const resetGameTypes = state.gameTypes.map((type: gameTypes) => {
                        return { name: type.name, checked: false };
                    });

                    return { ...state, gameTypes: resetGameTypes, index: 0, hits: 0, status: gameStatus.playing };
                }

                return state;

            default:
                return state;
        }
    }

    function handleGameTypes(gameSpecies: string[]): gameTypes[] {
        return gameSpecies.map((type) => {
            return { name: type, checked: false };
        });
    }

    const contextValue = {
        game,
        dispatchGame,
    };

    return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
}
