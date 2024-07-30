import dynamic from "next/dynamic";

//Styles
import styles from "./page.module.scss";

//Components
const Game = dynamic(() => import("@/components/Game/Game"), { ssr: false });

//Helpers
import { getGameData } from "@/helpers/game/getGameData";

export default async function Home() {
    //"getGameData()" fetches game data from the database, or generate new game data if necessary.
    const { species, speciesTypes } = await getGameData();

    return (
        <main className={styles["c-page"]}>
            <Game species={species || null} speciesTypes={speciesTypes || null} />
        </main>
    );
}
