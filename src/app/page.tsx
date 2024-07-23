import moment from "moment-timezone";

//Components
import Game from "@/components/Game/Game";

//Helpers
import { generateNewGame } from "@/helpers/game/generateNewGame";

//Types
import { specieInfo } from "@/types/specie";

export async function getGameData(): Promise<{ species: specieInfo[]; speciesTypes: string[] }> {
    const currentDate = moment().tz("America/Sao_Paulo").format("DD-MM-YYYY");

    const res = await fetch(`${process.env.BASE_URL}/api/game`, { next: { revalidate: 0 } });
    const [data]: { date: string; types: string[]; species: specieInfo[] }[] = await res.json();

    if (currentDate === data.date) {
        return { species: data.species, speciesTypes: data.types };
    } else {
        const { selectedSpecies, selectedTypes } = await generateNewGame();

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                date: currentDate,
                types: selectedTypes,
                species: selectedSpecies,
            }),
        };

        const newGameData = await fetch(`${process.env.BASE_URL}/api/game`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                return { species: data.species, types: data.types };
            });

        return { species: newGameData.species, speciesTypes: newGameData.types };
    }
}

export default async function Home() {
    const { species, speciesTypes } = await getGameData();

    return (
        <main className="w-full h-full flex items-center justify-center px-4">
            <Game species={species} speciesTypes={speciesTypes} />
        </main>
    );
}
