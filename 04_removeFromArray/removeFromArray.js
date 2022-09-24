function removeFromArray(array, arg) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === arg) {
        array.splice(i, 1);
        }
    }
   return array;
}

removeFromArray([1, 2, 3, 4], 3);



// Do not edit below this line
module.exports = removeFromArray;
