import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

//Styles
import styles from "./GameFooter.module.scss";

//Hooks
import useModal from "@/hooks/useModal";

export default function GameFooter() {
    const { open: openHowToPlayModal } = useModal("howToPlayModal");

    return (
        <div className={styles["c-footer"]}>
            <button className={styles["c-footer__btn"]} onClick={openHowToPlayModal}>
                <FaInfoCircle />
                Como Jogar
            </button>

            <Link href="/about" className={styles["c-footer__btn"]}>
                Sobre
            </Link>
        </div>
    );
}
