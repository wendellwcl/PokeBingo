"use client";

//Styles
import styles from "./error.module.scss";

export default function ErrorPage({ errorMessage }: { errorMessage?: string }) {
    return (
        <div className={styles["c-error"]}>
            <p className={styles["c-error__message"]}>
                <span>Oops!</span>
                <br />
                Algo deu errado. Tente novamente mais tarde.
                <br />
            </p>
            {errorMessage && <p className={styles["c-error__error-message"]}>({errorMessage})</p>}
        </div>
    );
}
