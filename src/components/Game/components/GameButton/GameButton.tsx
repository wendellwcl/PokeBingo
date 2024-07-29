import Image from "next/image";
import { FaCheck } from "react-icons/fa";

//Styles
import styles from "./GameButton.module.scss";

//Contexts
import { GameContext } from "@/contexts/GameContext";

//Contexts
import { useContext } from "react";

//Types
import { gameStatus, gameTypes } from "@/types/game";

export default function GameButton({ type }: { type: gameTypes }) {
    const { game, dispatchGame } = useContext(GameContext);

    function handleCheck() {
        if (game) {
            if (game.gameSpecies[game.index].types.includes(type.name)) {
                dispatchGame({ type: "check", target: type.name });
                return;
            }

            dispatchGame({ type: "next" });
        }
    }

    return (
        <div className={styles["c-game-btn"]}>
            {!type.checked && (
                <button
                    className={styles["c-game-btn__btn-default"]}
                    onClick={() => handleCheck()}
                    disabled={!(game?.status === gameStatus.playing)}
                >
                    <Image
                        src={`assets/specieTypes/${type.name}.svg`}
                        width={200}
                        height={200}
                        priority
                        alt={`simbolo que representa o tipo ${type.name}`}
                    />
                    <span>{type.name}</span>
                </button>
            )}

            {type.checked && (
                <div className={styles["c-game-btn__btn-checked"]}>
                    <FaCheck />
                </div>
            )}
        </div>
    );
}
