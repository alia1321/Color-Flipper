const mainButton= document.getElementsByClassName("customize-btn")[0];

mainButton.addEventListener("click", async()=>{
    try {
        const response = await fetch("http://localhost:4000/");
        const randomHex = await response.text();

        console.log(randomHex);
    } 
    
    catch (error) {
        console.log("ERROR:" + error);
        
    }

});