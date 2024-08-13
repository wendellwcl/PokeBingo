import Image from "next/image";

//Styles
import styles from "./LoadingScreen.module.scss";

//Assets
import icon from "/public/assets/Icon.svg";

export default function LoadingScreen({ message }: { message?: string | null }) {
    return (
        <div className={styles["c-loading"]}>
            <Image src={icon} alt="ícone de carregamento" width={80} height={80} priority />
            <p>{message ? message : "Carregando..."}</p>
        </div>
    );
}
