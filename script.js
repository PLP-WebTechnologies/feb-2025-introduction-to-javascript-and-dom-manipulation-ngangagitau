const changeTextBtn = document.getElementById("changeTextBtn");
const textElement = document.getElementById("text");

changeTextBtn.addEventListener("click", () => {
    textElement.textContent = "You clicked the button, and this text changed!";
});

const changeStyleBtn = document.getElementById("changeStyleBtn");
const styleParagraph = document.getElementById("styleParagraph");

changeStyleBtn.addEventListener("click", () => {
    styleParagraph.style.color = "blue";
    styleParagraph.style.fontSize = "20px";
});

const toggleElementBtn = document.getElementById("toggleElementBtn");
const newElementContainer = document.getElementById("newElementContainer");

toggleElementBtn.addEventListener("click", () => {
    const newElement = document.createElement("div");
    newElement.textContent = "This is a newly added element!";
    newElement.style.marginTop = "10px";
    newElement.style.padding = "10px";
    newElement.style.backgroundColor = "#f0f0f0";
    
    if (newElementContainer.childElementCount === 0) {
        newElementContainer.appendChild(newElement);
    } else {
        newElementContainer.removeChild(newElementContainer.firstChild);
    }
});
