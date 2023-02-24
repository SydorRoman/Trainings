const { getRandomInt } = require('./random');

const generateNumericArray = (length = 100) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = getRandomInt();
    }
    return arr;
};



module.exports = {
    generateNumericArray
}