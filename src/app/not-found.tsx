import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

//Styles
import styles from "./not-found.module.scss";

export default function NotFound() {
    return (
        <div className={styles["c-not-found"]}>
            <p className={styles["c-not-found__message"]}>
                <span>404</span>
                <br />
                Recurso não encontrado
            </p>

            <Link href="/" className={styles["c-not-found__btn"]}>
                <IoMdArrowRoundBack />
                Home
            </Link>
        </div>
    );
}
