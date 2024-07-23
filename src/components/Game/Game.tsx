"use client";

import { useContext, useEffect } from "react";

//Components
import GameButton from "./GameButton";
import GameHeader from "./GameHeader/GameHeader";

//Contexts
import { GameContext } from "@/contexts/GameContext";

//Types
import { gameStatus } from "@/types/game";
import { specieInfo } from "@/types/specie";

interface GameProps {
    species: specieInfo[];
    speciesTypes: string[];
}

export default function Game({ species, speciesTypes }: GameProps) {
    const { game, dispatchGame } = useContext(GameContext);

    useEffect(() => {
        dispatchGame({ type: "init", gameSpecies: species, gameTypes: speciesTypes });
    }, []);

    if (game) {
        if (game.status === gameStatus.loading) {
            return <div>Loading</div>;
        }

        return (
            <section className="w-full max-w-lg rounded-xl overflow-hidden">
                <GameHeader
                    counter={game.gameSpecies.length - game.index}
                    gameStatus={game.status}
                    specie={game.gameSpecies[game.index]}
                />

                <div className="grid grid-cols-3 grid-rows-3 gap-1 p-2 bg-background-light">
                    {game.gameTypes?.map((gameType, idx) => (
                        <GameButton key={idx} type={gameType} />
                    ))}
                </div>
            </section>
        );
    }
}
