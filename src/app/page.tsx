import { redirect } from "next/navigation";

//Styles
import styles from "./page.module.scss";

//Components
import Game from "@/components/Game/Game";

//Helpers
import { getGameData } from "@/helpers/game/getGameData";
import { specieInfo } from "@/types/specie";

export default async function Home() {
    let gameSpecies: specieInfo[] = [];
    let gameSpeciesTypes: string[] = [];

    //"getGameData()" fetches game data from the database, or generate new game data if necessary.
    try {
        const { species, speciesTypes } = await getGameData();
        gameSpecies = species;
        gameSpeciesTypes = speciesTypes;
    } catch (error) {
        if (error instanceof Error) {
            return <>{error.message}</>;
        } else {
            return <>UNCKNOW</>;
        }
        console.log(error);
        redirect("/error");
    }

    return (
        <main className={styles["c-page"]}>
            <Game species={gameSpecies} speciesTypes={gameSpeciesTypes} />
        </main>
    );
}
