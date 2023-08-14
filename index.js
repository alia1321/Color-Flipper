/**
 * Hex: When button is pressed. 
 * randomly generate a hex number. 
 * Send it to the div
 * write it out
 * 
 * 
 */

const cors = require("cors");
const express = require("express");
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



const app = express();
const port = 4000;
app.use(cors()); // Use cors middleware


app.get('/', (req,res) => {
    const randomHex= randomHexColor();
    res.send(randomHex);
    console.log(randomHex);
});

app.listen(port, ()=>{
    console.log("Waiting for phase retrevial");
});



