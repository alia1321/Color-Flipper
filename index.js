/**
 * This is a backend that will generate a random hex number. 
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



