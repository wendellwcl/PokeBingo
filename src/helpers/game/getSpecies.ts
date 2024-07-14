//Types
import { specieInfo, speciesByTypes } from "@/types/specie";

export function getSpecies(
    speciesList: specieInfo[],
    speciesByTypes: speciesByTypes,
    selectedTypes: string[]
): specieInfo[] {
    const selectedSpecies: specieInfo[] = getSpeciesOfSelectedTypes(speciesByTypes, selectedTypes);

    for (let i = selectedSpecies.length; i < 20; i++) {
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
