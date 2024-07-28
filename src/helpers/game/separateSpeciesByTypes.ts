/**
 * "separateSpeciesByTypes()" creates an array that organizes all species according to their respective types.
 *
 * @param {species: specieInfo[]} - an array of all available species.
 * @returns {speciesByTypes: speciesByTypes} - an array of species separated and organized by their respective types.
 */

//Types
import { specieInfo, speciesByTypes } from "@/types/specie";

export function separateSpeciesByTypes(species: specieInfo[]): speciesByTypes {
    const speciesByTypes: speciesByTypes = {};

    //This loops goes through all the items in the species list and separates them according to their types.
    for (let specie of species) {
        //This loop goes through all the items in the types property of the current item (species), separating the items (species) according to these types.
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
