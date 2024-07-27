"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

//Components
import Modal from "../Modal/Modal";
import GameButton from "./GameButton";
import GameHeader from "./GameHeader/GameHeader";

//Contexts
import { GameContext } from "@/contexts/GameContext";

//Hooks
import useModal from "@/hooks/useModal";

//Types
import { gameStatus } from "@/types/game";
import { specieInfo } from "@/types/specie";

interface GameProps {
    species: specieInfo[];
    speciesTypes: string[];
}

export default function Game({ species, speciesTypes }: GameProps) {
    const { game, dispatchGame } = useContext(GameContext);
    const {
        isOpen: howToPlayModalIsOpen,
        open: openHowToPlayModal,
        close: closeHowToPlayModal,
    } = useModal("howToPlayModal");

    useEffect(() => {
        dispatchGame({ type: "init", gameSpecies: species, gameTypes: speciesTypes });
    }, []);

    if (game) {
        if (game.status === gameStatus.loading) {
            return <div>Loading</div>;
        }

        return (
            <div className="w-full h-full flex flex-col items-center justify-start gap-4 py-4">
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
                    <button className="flex items-center" onClick={openHowToPlayModal}>
                        <FaInfoCircle className="mr-1" />
                        Como Jogar
                    </button>

                    <Link href="/about">Sobre</Link>
                </div>

                {howToPlayModalIsOpen && (
                    <Modal title="Como Jogar" close={closeHowToPlayModal}>
                        <div className="text-sm">
                            <p className="mb-2">
                                <span className="font-semibold">1. Apresentação das Espécies: </span>O jogo apresenta 9
                                "tipos de espécies" no início. E, a cada rodada, uma espécie específica é mostrada ao
                                jogador.
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">2. Tentativa de Adivinhação: </span>O jogador deve
                                tentar adivinhar o tipo da espécie atual entre os 9 tipos de espécies disponíveis.
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">3. Tipos Múltiplos: </span>
                                Algumas espécies podem corresponder a mais de um tipo. No entanto, fique atento! Isso
                                não significa que a espécie apresentada corresponda a uma das alternativas de tipos,
                                podem ser apresentadas espécies de tipos não inclusos ao jogo.
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">4. Respostas Erradas: </span>
                                Se a tentativa de resposta estiver errada, a rodada atual é perdida e o jogo segue para
                                a próxima.
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">5. Respostas Certas: </span>
                                Se a tentativa de resposta estiver correta, a respectiva alternativa será marcada como
                                "concluída" e o jogo segue para a próxima rodada.
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">6.Objetivo do Jogo: </span>O jogador deve concluir todos
                                os 9 tipos de espécies para vencer o jogo, antes que as rodadas acabem.
                            </p>
                            <p className="text-lg text-center font-semibold">Divirta-se!</p>
                        </div>
                    </Modal>
                )}
            </div>
        );
    }
}
