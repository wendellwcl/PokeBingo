/**
 * 'separateSpeciesByTypes()' creates an array that organizes all species according to their respective types.
 *
 * @param {species} - an array of all available species.
 * @returns {speciesByTypes} - an array of species separated and organized by their respective types.
 */

//Types
import { specieInfo, speciesByTypes } from "@/types/specie";

export function separateSpeciesByTypes(species: specieInfo[]): speciesByTypes {
    const speciesByTypes: speciesByTypes = {};

    for (let specie of species) {
        for (let type of specie.types) {
            if (Object.keys(speciesByTypes).includes(type)) {
                speciesByTypes[`${type}`] = [...speciesByTypes[`${type}`], specie];
            } else {
                speciesByTypes[`${type}`] = [specie];
            }
        }
    }

    return speciesByTypes;
}
