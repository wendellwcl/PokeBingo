/**
 * 'getSpeciesData()' fetches and processes data from the API.
 *
 * @returns {speciesList} - an array of all species and their respective information.
 * @returns {speciesTypesList} - an array of the available species types.
 */

//Types
import { specie, specieInfo } from "@/types/specie";

export async function getSpeciesData(): Promise<{ speciesList: specieInfo[]; speciesTypesList: string[] }> {
    const speciesData: specie[] = await getSpeciesList();

    const speciesList: specieInfo[] = [];
    const speciesTypesList: string[] = [];

    for (let specie of speciesData) {
        const res = await fetch(specie.url, { cache: "force-cache" });
        const data = await res.json();

        const currentSpecieTypes: string[] = [];

        for (let item of data.types) {
            const currentType = item.type.name;
            currentSpecieTypes.push(currentType);

            !speciesTypesList.includes(currentType) && speciesTypesList.push(currentType);
        }

        const specieInfo: specieInfo = {
            name: data.name,
            types: currentSpecieTypes,
            imageUrl: data.sprites.other["official-artwork"].front_default,
        };
        speciesList.push(specieInfo);
    }

    return { speciesList, speciesTypesList };
}

async function getSpeciesList(): Promise<specie[]> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${process.env.SPECIES_API_LIMIT}`, {
        cache: "force-cache",
    });
    const data = await res.json();
    const species: specie[] = data.results;

    return species;
}
