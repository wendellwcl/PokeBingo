//Styles
import styles from "./Failed.module.scss";

//Components
import RestartButton from "../RestartButton/RestartButton";

export default function Failed() {
    return (
        <div className={styles["c-failed"]}>
            <h3>Você perdeu</h3>
            <RestartButton />
        </div>
    );
}
