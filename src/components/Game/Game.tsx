"use client";

import { useContext, useEffect } from "react";

//Styles
import styles from "./Game.module.scss";

//Components
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Modal from "../Modal/Modal";
import GameFooter from "./components/GameFooter/GameFooter";
import GameInterface from "./components/GameInterface/GameInterface";
import GameModalHowToPlay from "./components/GameModalHowToPlay/GameModalHowToPlay";

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
    const { isOpen: howToPlayModalIsOpen, close: closeHowToPlayModal } = useModal("howToPlayModal");

    useEffect(() => {
        if (species && speciesTypes && dispatchGame) {
            dispatchGame({ type: "init", gameSpecies: species, gameTypes: speciesTypes });
        }
    }, [species, speciesTypes, dispatchGame]);

    if (!game || game.status === gameStatus.loading) {
        return <LoadingScreen />;
    } else {
        return (
            <div className={styles["c-game"]}>
                <GameInterface game={game} />

                <GameFooter />

                {howToPlayModalIsOpen && (
                    <Modal title="Como Jogar" close={closeHowToPlayModal}>
                        <GameModalHowToPlay />
                    </Modal>
                )}
            </div>
        );
    }
}
