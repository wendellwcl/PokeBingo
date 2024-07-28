"use client";

/**
 * "GameContext" manages all game data and command actions.
 *
 * @returns {game: game} - game data.
 * @returns {dispatchGame: function} - function to handle game command actions.
 */

import { createContext, Dispatch, useReducer } from "react";

//Types
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

    //Handle game commands.
    function reducerGame(state: game, action: gameActions) {
        switch (action.type) {
            //Start the game, setting the default data.
            case "init":
                return {
                    gameSpecies: action.gameSpecies,
                    gameTypes: handleGameTypes(action.gameTypes),
                    index: 0,
                    hits: 0,
                    status: gameStatus.playing,
                };

            //Skip to next round.
            case "next":
                if (state) {
                    //Check if there are any rounds left, to skip to the next round.
                    if (state.index < state.gameSpecies.length - 1) {
                        return { ...state, index: state.index + 1 };
                    }

                    //End the game if there are no rounds remaining.
                    return { ...state, status: gameStatus.failed };
                }

                return state;

            //Check if the attempted answer is correct.
            case "check":
                if (state) {
                    //If the attempted answer is correct.
                    if (state.gameSpecies[state.index].types.includes(action.target)) {
                        //Update the data states.
                        const updatedState = {
                            ...state,
                            gameTypes: state.gameTypes.map((type: gameTypes) => {
                                return type.name === action.target ? { name: type.name, checked: true } : type;
                            }),
                            index: state.index + 1,
                            hits: state.hits + 1,
                        };

                        //Check remaining roudns, if there are no rounds remaining and there are incomplete alternatives, end the game as "failed".
                        if (
                            !(updatedState.index < state.gameSpecies.length) &&
                            updatedState.hits !== state.gameTypes.length
                        ) {
                            return { ...updatedState, status: gameStatus.failed };
                        }

                        //If all alternatives are "checked", end the game as "success".
                        if (updatedState.hits === state.gameTypes.length) {
                            return { ...updatedState, status: gameStatus.success };
                        }

                        //If the game has not yet ended, update the data states.
                        return updatedState;
                    }

                    //If the answer attempt is wrong, update the "index" property for the game to continue to the next round.
                    return { ...state, index: state.index + 1 };
                }

                return state;

            //Restart the game, resetting the default data.
            case "restart":
                if (state) {
                    //Reset alternative "gameTypes" marked as "checked".
                    const resetGameTypes = state.gameTypes.map((type: gameTypes) => {
                        return { name: type.name, checked: false };
                    });

                    //Setting default data.
                    return { ...state, gameTypes: resetGameTypes, index: 0, hits: 0, status: gameStatus.playing };
                }

                return state;

            default:
                return state;
        }
    }

    //Handles list of "gameTypes" by adding "checked" property.
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
