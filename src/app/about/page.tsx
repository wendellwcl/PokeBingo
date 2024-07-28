import Image from "next/image";
import Link from "next/link";
import { BsDatabase } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

//Assets
import icon from "/public/assets/Icon.svg";

//Styles
import styles from "./AboutPage.module.scss";

export default function AboutPage() {
    return (
        <section className={styles["c-about"]}>
            <div className={styles["c-about__c-items"]}>
                <div className={styles["c-about__item"]}>
                    <p>Projeto criado por:</p>
                    <a href="https://github.com/wendellwcl" target="_blank">
                        <FaGithub />
                        Wendellwcl
                    </a>
                </div>

                <div className={styles["c-about__item"]}>
                    <p>Repositório do projeto:</p>
                    <a href="https://github.com/wendellwcl/PokeBingo" target="_blank">
                        <Image src={icon} width={100} height={100} alt="Icone Poke Bingo" />
                        PokeBingo
                    </a>
                </div>

                <div className={styles["c-about__item"]}>
                    <p>API utilizada:</p>
                    <a href="https://pokeapi.co/" target="_blank">
                        <BsDatabase />
                        PokéAPI
                    </a>
                </div>
            </div>

            <Link href="/" className={styles["c-about__back-btn"]}>
                <IoMdArrowRoundBack />
                Voltar
            </Link>
        </section>
    );
}
