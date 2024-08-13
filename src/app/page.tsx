//Styles
import styles from "./page.module.scss";

//Components
import Game from "@/components/Game/Game";
import ErrorPage from "./error";

//Helpers
import { getGameData } from "@/helpers/game/getGameData";
import { specieInfo } from "@/types/specie";

export default async function Home() {
    let gameSpecies: specieInfo[] = [];
    let gameSpeciesTypes: string[] = [];

    //"getGameData()" fetches game data from the database, or generate new game data if necessary.
    try {
        const data = await getGameData();

        if (data) {
            gameSpecies = data.species;
            gameSpeciesTypes = data.speciesTypes;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            console.error(`Error message: ${error.message}`);
            return <ErrorPage errorMessage={error.message} />;
        } else {
            console.error("Uncknown error");
            return <ErrorPage errorMessage="Uncknown error" />;
        }
    }

    return (
        <main className={styles["c-page"]}>
            <Game species={gameSpecies} speciesTypes={gameSpeciesTypes} />
        </main>
    );
}
