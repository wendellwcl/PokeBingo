/**
 * "getSpeciesData()" fetches and processes data from the API.
 *
 * @returns {speciesList: specieInfo[]} - an array of all species and their respective information.
 * @returns {speciesTypesList: string[]} - an array of the available species types.
 */

//Types
import { specie, specieInfo } from "@/types/specie";

export async function getSpeciesData(): Promise<{ speciesList: specieInfo[]; speciesTypesList: string[] }> {
    try {
        //Fetch species list from API.
        const speciesData: specie[] = await getSpeciesList();

        //Variables to store the data.
        const speciesList: specieInfo[] = [];
        const speciesTypesList: string[] = [];

        //This loop goes through all the specieData items and for each item (species) a new API call is made to obtain the species data.
        for (let specie of speciesData) {
            const res = await fetch(specie.url, { cache: "force-cache" });

            if (!res.ok) {
                throw new Error("Failed to connect PokeAPI: Failed to get specie data");
            }

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
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            throw new Error(error.message);
        } else {
            console.error("Unknown error when connecting with PokeAPI to get specie data", error);
            throw new Error("Unknown error when connecting with PokeAPI to get specie data");
        }
    }
}

//"getSpeciesList()" fetches species list from API.
async function getSpeciesList(): Promise<specie[]> {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${process.env.SPECIES_API_LIMIT}`, {
            cache: "force-cache",
        });

        if (!res.ok) {
            throw new Error("Failed to connect PokeAPI: Failed to get species list");
        }

        const data = await res.json();
        const species: specie[] = data.results;

        return species;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            throw new Error(error.message);
        } else {
            console.error("Unknown error when connecting with PokeAPI to get species list", error);
            throw new Error("Unknown error when connecting with PokeAPI to get species list");
        }
    }
}
