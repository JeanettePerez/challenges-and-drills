function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(2));
console.log(isOdd(3));

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));

function identity(input) {
    return input;
}
console.log(identity('hello'));
console.log(identity(3));

function isFive(number) {
    return number === 5;
}
console.log(isFive(5));
console.log(isFive(4));
console.log(isFive(55));

function addFive(input) {
    return input + 5;
}
console.log(addFive(5));
console.log(addFive(10));

function isMultipleOfFive(input) {
    return input % 5 === 0;
}
console.log(isMultipleOfFive(10));
console.log(isMultipleOfFive(35));
console.log(isMultipleOfFive(34));
function isThree(input) {
    return input === 3;
}
console.log(isThree(3));
console.log(isThree(4));

function isMultipleOfThree(input) {
    return input % 3 === 0;
}
console.log(isMultipleOfThree(12));
console.log(isMultipleOfThree(14));

function isMultipleOfThreeAndFive(input) {
    return input % 3 === 0 && input % 5 === 0;
}

console.log(isMultipleOfThreeAndFive(15));
console.log(isMultipleOfThreeAndFive(12));
function isMultipleOf(target, n) {
    return target % n === 0;
}
console.log(isMultipleOf(15, 3));
console.log(isMultipleOf(15, 4));

function isVowel(letter) {
    return ('aeiouAEIOU'.indexOf(letter) !== -1);
}
console.log(isVowel("a"));
console.log(isVowel("b"));

function isConsonant(letter){
    return !('aeiouAEIOU'.indexOf(letter) !== -1);
}
console.log(isConsonant("a"));
console.log(isConsonant("b"));
console.log(isConsonant("c"));
console.log(isConsonant("e"));

function isCapital(letter) {
    return letter === letter.toUpperCase()
}
console.log(isCapital("A"));
console.log(isCapital("a"));

function isLowercase(letter) {
    return letter === letter.toLowerCase();
}
console.log(isLowercase("e"));
console.log(isLowercase("E"));

function isZero(number) {
    return number === 0;
}
console.log(isZero(0));
console.log(isZero(1));

function notZero(input) {
    return input !== 0;
}
console.log(notZero(0));
console.log(notZero(1));

function double(n) {
    return n * 2;
}
console.log(double(2));
console.log(double(5));

function triple(n) {
    return n * 3;
}
console.log(triple(3));
console.log(triple(5));

function quadruple(n) {
    return n * 4;
}
console.log(quadruple(2));
console.log(quadruple(5));

function half(n) {
    return n / 2;
}
console.log(half(10));
console.log(half(20));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(5,2));
console.log(subtract(10, 5));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 2));
console.log(multiply(5, 5));

function divide(a, b) {
    return a / b;
}
console.log(divide(10, 2));
console.log(divide(20, 2));


function remainder(a, b) {
    return a % b;
}

function cube(n) {
    return n * n * n;
}

function squareRoot(n) {
    return Math.sqrt(n)

}

function cubeRoot(n) {
    return Math.cbrt(n);
}

function not(input) {
    return !(input);
}

function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

function or(predicate1, predicate2) {
    predicate1 || predicate2;
}
// Simple Function Drills

