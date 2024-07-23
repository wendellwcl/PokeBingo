/**
 * 'getSpecies()' selects and assembles the array of species that will be presented to the player as options during the game, ensuring that there are species of the selected 'species types' so that the game can be completed 100% successfully.
 *
 * @param {speciesList} - array of all available species.
 * @param {speciesByTypes} - array of species separated by their respective types.
 * @param {selectedTypes} - array of species types randomly selected for the game.
 * @returns {selectedSpecies} - array of the species randomly selected for the game.
 */

//Types
import { specieInfo, speciesByTypes } from "@/types/specie";

export function getSpecies(
    speciesList: specieInfo[],
    speciesByTypes: speciesByTypes,
    selectedTypes: string[]
): specieInfo[] {
    const selectedSpecies: specieInfo[] = getSpeciesOfSelectedTypes(speciesByTypes, selectedTypes);

    for (let i = selectedSpecies.length; i < Number(process.env.SPECIES_GAME_LIMIT); i++) {
        let n = Math.floor(Math.random() * speciesList.length);

        while (selectedSpecies.includes(speciesList[n])) {
            n = Math.floor(Math.random() * speciesList.length);
        }

        selectedSpecies.push(speciesList[n]);
    }

    return selectedSpecies;
}

function getSpeciesOfSelectedTypes(speciesByTypes: speciesByTypes, selectedTypes: string[]): specieInfo[] {
    const selectedSpecies: specieInfo[] = [];

    for (let type of selectedTypes) {
        const speciesOfCurrentType: specieInfo[] = speciesByTypes[`${type}`];

        let n: number = Math.floor(Math.random() * speciesOfCurrentType.length);

        while (selectedSpecies.includes(speciesOfCurrentType[n])) {
            n = Math.floor(Math.random() * speciesOfCurrentType.length);
        }

        selectedSpecies.push(speciesOfCurrentType[n]);
    }

    return selectedSpecies;
}
