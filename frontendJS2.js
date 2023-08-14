const colors = ["silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow", "navy","blue","teal", "aqua"];
const mainButton= document.getElementsByClassName("customize-btn")[0];
const backgroundColor = document.getElementById("body");


mainButton.addEventListener("click", () => {
    const currentColorIndex = Math.floor(Math.random() * colors.length);
    const currentColor = colors[currentColorIndex];
    backgroundColor.style.backgroundColor = currentColor;
});