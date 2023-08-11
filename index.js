/**
 * Hex: When button is pressed. 
 * randomly generate a hex number. 
 * Send it to the div
 * write it out
 * 
 * 
 */


const { 
    randomHexColor, 
    randomHexColorStartWith, 
    randomHexColorEndWith,
    randomHexColorStartAndEndWith,
    randomHexColorWithArray,
    randomHexColorWithArrayOfObject,
    randomHexColorArrayStartWith,
    randomHexColorArrayEndWith,
} = require('random-hex-color-generator');

const randomHex= randomHexColor();
console.log(randomHex);