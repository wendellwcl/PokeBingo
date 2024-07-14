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
