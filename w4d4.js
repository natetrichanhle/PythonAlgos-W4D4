const num1 = 54321; // --> 15 ---> 6
const expected1 = 6;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    if(num < 10){
        return num;
    }
    const lastNum = num % 10;
    const remainingNum = Math.floor(num/10);
    return sumToOneDigit(lastNum + sumToOneDigit(remainingNum));
}
console.log(sumToOneDigit(num1));
console.log(sumToOneDigit(num2));
console.log(sumToOneDigit(num3));


