import Image from "next/image";
import Link from "next/link";

//Styles
import styles from "./AppHeader.module.scss";

export default function AppHeader() {
    return (
        <header className={styles["c-app-header"]}>
            <Link href="/" className={styles["c-app-header__logo"]}>
                <Image src="/assets/Logo.png" alt="Logo Poke Bingo" width={100} height={100} priority />
            </Link>
        </header>
    );
}
