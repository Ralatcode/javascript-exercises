function removeFromArray(array, ...args) {
    args.forEach((arg) => {
        const index = array.indexOf(arg);
        if (index >= 0) {
            array.splice(index, 1);
        }
    });

    return array;

}
// test1
removeFromArray([1, 2, 3, 4], 3);
// test2 
removeFromArray([1, 2, 3, 4], 3, 2);
// test3
removeFromArray([1, 2, 3, 4], "tacos");
// test4
removeFromArray([1, 2, 3, 4], 7, 2);
// test 5
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
// test 6
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);

// Do not edit below this line
module.exports = removeFromArray;
