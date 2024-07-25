"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

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
            <div className="w-full h-full flex flex-col items-center justify-start space-y-6 py-4">
                <section className="w-full max-w-[360px] min-[1400px]:max-w-[440px] rounded-xl overflow-hidden []">
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

                <div className="flex space-x-4 text-white font-bold [&>*]:bg-background-complementary [&>*]:px-4 [&>*]:py-1 [&>*]:rounded-lg ">
                    <button className="flex items-center">
                        <FaInfoCircle className="mr-1" />
                        Como Jogar
                    </button>

                    <Link href="/about">Sobre</Link>
                </div>
            </div>
        );
    }
}
