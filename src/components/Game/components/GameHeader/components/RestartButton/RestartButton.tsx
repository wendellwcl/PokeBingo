import { useContext } from "react";

//Styles
import styles from "./RestartButton.module.scss";

//Contexts
import { GameContext } from "@/contexts/GameContext";

export default function RestartButton() {
    const { dispatchGame } = useContext(GameContext);

    return (
        <button className={styles["c-restart-btn"]} onClick={() => dispatchGame({ type: "restart" })}>
            Rejogar
        </button>
    );
}
