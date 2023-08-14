const mainButton= document.getElementsByClassName("customize-btn")[0];
const backgroundColor = document.getElementById("body");



mainButton.addEventListener("click", async()=>{
    try {
        const response = await fetch("http://localhost:4000/");
        const randomHex = await response.text();
        backgroundColor.style.backgroundColor = randomHex;

    } 
    
    catch (error) {
        console.log("ERROR:" + error);
        
    }

});
