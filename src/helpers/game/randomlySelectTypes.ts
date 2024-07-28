/**
 * "randomlySelectTypes()" randomly selects 9 types of species that will be part of the game.
 *
 * @param {speciesTypesList: string[]} - an array of the available types of species.
 * @returns {selectedTypes: string[]} - an array of the randomly selected species.
 */

export function randomlySelectTypes(speciesTypesList: string[]): string[] {
    //Variable to store the selected types.
    const selectedTypes: string[] = [];

    for (let i = 0; i < 9; i++) {
        const n = Math.floor(Math.random() * speciesTypesList.length);

        //Add the selected type to the storage variable.
        selectedTypes.push(speciesTypesList[n]);

        //Remove the selected type from the source array so that it is not selected again.
        speciesTypesList.splice(n, 1);
    }

    return selectedTypes;
}
