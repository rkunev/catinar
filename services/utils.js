export const getRandomIntInRange = end => Math.random() * end | 0;
export const getRandomElFromArray = arr => arr[getRandomIntInRange(arr.length)];
export const without = (array, valuesToExclude) => {
    if (!valuesToExclude.length) {
        return array;
    }

    return array.filter(c => !valuesToExclude.includes(c));
};
