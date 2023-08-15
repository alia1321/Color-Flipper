// This cycles through the simple colors. 
// The simple color will then be used to change the background color. 

const colors = ["silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow", "navy","blue","teal", "aqua"];
const mainButton= document.getElementsByClassName("customize-btn")[0];
const backgroundColor = document.getElementById("body");
const mainHeading = document.getElementById("main-heading");

mainButton.addEventListener("click", () => {
    const currentColorIndex = Math.floor(Math.random() * colors.length);
    const currentColor = colors[currentColorIndex];
    backgroundColor.style.backgroundColor = currentColor;
    mainHeading.textContent = "Background Color: " + currentColor
});