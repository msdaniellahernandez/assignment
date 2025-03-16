function doubleValues(arr) {
    return arr.map(num => num * 2);
}

function onlyEvenValues(arr) {
    return arr.filter(num => num % 2 === 0);
}

function showFirstAndLast(arr) {
    return arr.map(str => str[0] + str[str.length - 1]);
}

function addKeyAndValue(arr, key, value) {
    return arr.map(obj => ({ ...obj, [key]: value }));
}

function vowelCount(str) {
    const vowels = 'aeiou';
    const counts = {};
    str.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) {
            counts[char] = (counts[char] || 0) + 1;
        }
    });
    return counts;
}

function doubleValuesWithMap(arr) {
    return arr.map(num => num * 2);
}

function valTimesIndex(arr) {
    return arr.map((num, i) => num * i);
}

function extractKey(arr, key) {
    return arr.map(obj => obj[key]);
}

function extractFullName(arr) {
    return arr.map(obj => `${obj.first} ${obj.last}`);
}

function filterByValue(arr, key) {
    return arr.filter(obj => obj.hasOwnProperty(key));
}

function find(arr, searchValue) {
    return arr.find(num => num === searchValue);
}

function findInObj(arr, key, searchValue) {
    return arr.find(obj => obj[key] === searchValue);
}

function removeVowels(str) {
    const vowels = 'aeiou';
    return str
        .toLowerCase()
        .split('')
        .filter(char => !vowels.includes(char))
        .join('');
}

function doubleOddNumbers(arr) {
    return arr
        .filter(num => num % 2 !== 0)
        .map(num => num * 2);
}
