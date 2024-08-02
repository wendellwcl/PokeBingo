"use client";

import Image from "next/image";
import { useContext } from "react";
import { BsSkipEndFill } from "react-icons/bs";

//Styles
import styles from "./Default.module.scss";

//Contexts
import { GameContext } from "@/contexts/GameContext";

//Types
import { specieInfo } from "@/types/specie";

interface defaultProps {
    counter: number;
    specie: specieInfo;
}

export default function Default({ specie, counter }: defaultProps) {
    const { dispatchGame } = useContext(GameContext);

    return (
        <div className={styles["c-default"]}>
            <div className={styles["c-specie"]}>
                <Image
                    src={specie.imageUrl}
                    alt={`imagem da espécie ${specie.name}`}
                    width={200}
                    height={200}
                    priority
                />
                <div className={styles["c-specie__name"]}>{specie.name}</div>
            </div>

            <div className={styles["c-round"]}>
                <div className={styles["c-round__counter"]}>{counter}</div>

                <button
                    className={styles["c-round__skip-btn"]}
                    onClick={() => {
                        dispatchGame({ type: "next" });
                    }}
                >
                    Pular <BsSkipEndFill />
                </button>
            </div>
        </div>
    );
}
