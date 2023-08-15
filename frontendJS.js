const mainButton= document.getElementsByClassName("customize-btn")[0];
const backgroundColor = document.getElementById("body");
const mainHeading = document.getElementById("main-heading");



mainButton.addEventListener("click", async()=>{
    try {
        const response = await fetch("http://localhost:4000/");
        const randomHex = await response.text();
        backgroundColor.style.backgroundColor = randomHex;
        mainHeading.textContent = "Background Color: " + randomHex;

    } 
    
    catch (error) {
        console.log("ERROR:" + error);
        
    }

});
