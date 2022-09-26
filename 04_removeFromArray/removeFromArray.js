function removeFromArray(array, ...args) {
    args.forEach((arg) => {
        const index = array.indexOf(arg);
        if (index >= 0) {
            array.splice(index, 1);
        }
    });

    return array;

}

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], "tacos");



// Do not edit below this line
module.exports = removeFromArray;
