//Styles
import styles from "./Success.module.scss";

//Components
import Countdown from "../Countdown/Countdown";
import RestartButton from "../RestartButton/RestartButton";

export default function Success() {
    return (
        <div className={styles["c-success"]}>
            <h3>Bingo!</h3>
            <p>
                Você completou o jogo de hoje. Novo jogo em: <Countdown />
            </p>
            <RestartButton />
        </div>
    );
}
