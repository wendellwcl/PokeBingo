/**
 * 'generateNewGame()' executes all the logic necessary to generate data for a new game.
 *
 * @returns {selectedSpecies} - array of the species randomly selected for the game.
 * @returns {selectedTypes} - array of species types randomly selected for the game.
 */

//Helpers
import { getSpecies } from "./getSpecies";
import { getSpeciesData } from "./getSpeciesData";
import { randomlySelectTypes } from "./randomlySelectTypes";
import { separateSpeciesByTypes } from "./separateSpeciesByTypes";

//Utils
import { shuffleArray } from "@/utils/shuffleArray";

//Types
import { specieInfo } from "@/types/specie";

export async function generateNewGame(): Promise<{ selectedSpecies: specieInfo[]; selectedTypes: string[] }> {
    const { speciesList, speciesTypesList } = await getSpeciesData();
    const speciesByTypes = separateSpeciesByTypes(speciesList);
    const selectedTypes = randomlySelectTypes(speciesTypesList);
    const selectedSpecies = shuffleArray(getSpecies(speciesList, speciesByTypes, selectedTypes));

    return { selectedSpecies, selectedTypes };
}
