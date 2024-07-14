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
