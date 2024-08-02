/**
 * "getGameData()" fetches game data from the database and checks if this data is valid, if the data is invalid, it generates new data and sends it to the database.
 *
 * @returns {species: specieInfo[]} - an array of species data.
 * @returns {speciesTypes: string[]} - an array of species types data.
 */

import moment from "moment-timezone";

//Helpers
import { generateNewGame } from "./generateNewGame";

//Types
import { specieInfo } from "@/types/specie";

export async function getGameData(): Promise<{ species: specieInfo[]; speciesTypes: string[] }> {
    try {
        //Get current date.
        const currentDate = moment().tz("America/Sao_Paulo").format("DD-MM-YYYY");

        //Get database data.
        const res = await fetch(`${process.env.BASE_URL}/api/game`, { next: { revalidate: 0 } });
        const data = await res.json();

        console.warn("DATABASE GET");

        if (!res.ok) {
            throw new Error(data.message);
        }

        //If the current date also matches the date obtained from the database, use the game data obtained from the database.
        //Else, generate new game data and send it to the database, also using this new data to set the game.
        if (!(currentDate === data.date)) {
            return { species: data.species, speciesTypes: data.types };
        } else {
            const { selectedSpecies, selectedTypes } = await generateNewGame();

            console.warn("GENERATE NEW GAME");
            console.log("species", selectedSpecies);
            console.log("types", selectedTypes);

            console.log("1");

            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    date: currentDate,
                    types: selectedTypes,
                    species: selectedSpecies,
                }),
            };

            console.log("2");

            const newGameRes = await fetch(`${process.env.BASE_URL}/api/game`, requestOptions);
            console.log(newGameRes);
            console.log("3");
            console.log(newGameRes.json());
            const newGameData = await newGameRes.json();

            console.warn("DATABASE PUT");

            if (!newGameRes.ok) {
                throw new Error(newGameData.message);
            }

            console.warn("BEFORE RETURN NEWGAMEDATA");
            console.log("new species", newGameData.species);
            console.log("new types", newGameData.types);
            return { species: newGameData.species, speciesTypes: newGameData.types };
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            throw new Error(error.message);
        } else {
            console.error("Unknown error when trying to get game data", error);
            throw new Error("Unknown error when trying to get game data");
        }
    }
}
