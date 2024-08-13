/**
 * "postGameData()" fetches and processes data from the API.
 *
 * @param {selectedSpecies: specieInfo[]} - an array of selected species.
 * @param {selectedTypes: string[]} - an array of selected types.
 *
 * @returns {species: specieInfo[]} - an array of selected species.
 * @returns {speciesTypes: string[]} - an array of selected types.
 */

import moment from "moment-timezone";

//Types
import { specieInfo } from "@/types/specie";

export async function postGameData(
    selectedSpecies: specieInfo[],
    selectedTypes: string[]
): Promise<{ species: specieInfo[]; speciesTypes: string[] }> {
    //Get current date.
    const currentDate = moment().tz("America/Sao_Paulo").format("DD-MM-YYYY");

    //Request Options
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            date: currentDate,
            types: selectedTypes,
            species: selectedSpecies,
        }),
    };

    //Post database data
    try {
        const newGameRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/game`, requestOptions);

        const newGameData = await newGameRes.json();

        if (!newGameRes.ok) {
            throw new Error(newGameData.message);
        }

        return { species: newGameData.species, speciesTypes: newGameData.types };
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            throw new Error(error.message);
        } else {
            console.error("Unknown error when trying to update game data", error);
            throw new Error("Unknown error when trying to update game data");
        }
    }
}
