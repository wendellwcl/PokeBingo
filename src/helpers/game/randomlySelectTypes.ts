/**
 * 'randomlySelectTypes()' randomly selects 9 types of species that will be part of the game.
 *
 * @param {speciesTypesList} - an array of the available types of species.
 * @returns {selectedTypes} - an array of the randomly selected species.
 */

export function randomlySelectTypes(speciesTypesList: string[]): string[] {
    const selectedTypes: string[] = [];

    for (let i = 0; i < 9; i++) {
        const n = Math.floor(Math.random() * speciesTypesList.length);

        selectedTypes.push(speciesTypesList[n]);
        speciesTypesList.splice(n, 1);
    }

    return selectedTypes;
}
