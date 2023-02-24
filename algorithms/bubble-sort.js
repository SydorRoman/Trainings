const { generateNumericArray } = require('../functions/array');

// O(n^2)
const bubbleSort = (array) => {
    if (!array || !Array.isArray(array) || !array.length) {
        array = generateNumericArray(10);
    }

    console.log('Before:', array);

    for (let i = 0; i < array.length - 1; i++ ) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array[j]) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }

    console.log('After:', array)

    return array;
}

module.exports = bubbleSort;