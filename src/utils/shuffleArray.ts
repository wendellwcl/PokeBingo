/**
 * 'shuffleArray()' shuffles the items of an array.
 *
 * @param {array} - an array of any type.
 * @returns {array} - the initial array with shuffled items.
 *
 * @exemple
 *  shuffleArray([1, 2, 3])
 *  // returns [2, 3, 1]
 */

export function shuffleArray<genericT>(array: genericT[]): genericT[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}
