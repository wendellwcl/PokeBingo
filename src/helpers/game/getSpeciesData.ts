/**
 * "getSpeciesData()" fetches and processes data from the API.
 *
 * @returns {speciesList: specieInfo[]} - an array of all species and their respective information.
 * @returns {speciesTypesList: string[]} - an array of the available species types.
 */

//Types
import { specie, specieInfo } from "@/types/specie";

export async function getSpeciesData(): Promise<{ speciesList: specieInfo[]; speciesTypesList: string[] }> {
    //Fetch species list from API.
    const speciesData: specie[] = await getSpeciesList();

    //Variables to store the data.
    const speciesList: specieInfo[] = [];
    const speciesTypesList: string[] = [];

    //This loop goes through all the specieData items and for each item (species) a new API call is made to obtain the species data.
    for (let specie of speciesData) {
        const res = await fetch(specie.url, { cache: "force-cache" });
        const data = await res.json();

        //Variable to store the types of the current item (specie).
        const currentSpecieTypes: string[] = [];

        //This loop goes through all the items in the types property obtained from the API response.
        for (let item of data.types) {
            //Stores the name of each type in the "currentSpecieTypes" variable.
            const currentType = item.type.name;
            currentSpecieTypes.push(currentType);

            //Checks whether each type is included in the "speciesTypesList" and adds it if necessary.
            !speciesTypesList.includes(currentType) && speciesTypesList.push(currentType);
        }

        //Builds an object with all the necessary data and adds it to the "speciesList" variable.
        const specieInfo: specieInfo = {
            name: data.name,
            types: currentSpecieTypes,
            imageUrl: data.sprites.other["official-artwork"].front_default,
        };
        speciesList.push(specieInfo);
    }

    //Returns the list of species data and the list of species types.
    return { speciesList, speciesTypesList };
}

//"getSpeciesList()" fetches species list from API.
async function getSpeciesList(): Promise<specie[]> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${process.env.SPECIES_API_LIMIT}`, {
        cache: "force-cache",
    });
    const data = await res.json();
    const species: specie[] = data.results;

    return species;
}
