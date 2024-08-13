/**
 * "getSpecies()" selects and assembles the array of species that will be presented to the player as options during the game, ensuring that there are species of the selected 'species types' so that the game can be completed 100% successfully.
 *
 * @param {speciesList: specieInfo[]} - array of all available species.
 * @param {speciesByTypes: speciesByTypes} - array of species separated by their respective types.
 * @param {selectedTypes: string[]} - array of species types randomly selected for the game.
 * @returns {selectedSpecies: specieInfo[]} - array of the species randomly selected for the game.
 */

//Types
import { specieInfo, speciesByTypes } from "@/types/specie";

export function getSpecies(
    speciesList: specieInfo[],
    speciesByTypes: speciesByTypes,
    selectedTypes: string[]
): specieInfo[] {
    //Select random species that belong to the species types selected for the game.
    const selectedSpecies: specieInfo[] = getSpeciesOfSelectedTypes(speciesByTypes, selectedTypes);

    //This loop randomly selects more species to complete the game's species list.
    for (let i = selectedSpecies.length; i < Number(process.env.NEXT_PUBLIC_SPECIES_GAME_LIMIT); i++) {
        let n = Math.floor(Math.random() * speciesList.length);

        //Check if the species is already included.
        while (selectedSpecies.includes(speciesList[n])) {
            n = Math.floor(Math.random() * speciesList.length);
        }

        selectedSpecies.push(speciesList[n]);
    }

    return selectedSpecies;
}

// "getSpeciesOfSelectedTypes()" select random species that belong to the species types selected for the game.
function getSpeciesOfSelectedTypes(speciesByTypes: speciesByTypes, selectedTypes: string[]): specieInfo[] {
    const selectedSpecies: specieInfo[] = [];

    //This loop selects a random species for each type from the "selectedTypes" list.
    for (let type of selectedTypes) {
        const speciesOfCurrentType: specieInfo[] = speciesByTypes[`${type}`];

        let n: number = Math.floor(Math.random() * speciesOfCurrentType.length);

        //Check if the species is already included.
        while (selectedSpecies.includes(speciesOfCurrentType[n])) {
            n = Math.floor(Math.random() * speciesOfCurrentType.length);
        }

        selectedSpecies.push(speciesOfCurrentType[n]);
    }

    return selectedSpecies;
}
