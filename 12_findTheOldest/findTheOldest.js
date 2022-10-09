const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    const oldestPerson = arr.sort((a, b) => {
        const person1 = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const person2 = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        return person1 > person2 ? -1 : 1;
    })

    return oldestPerson[0]

};

// Do not edit below this line
module.exports = findTheOldest;
