const startButton = document.querySelector(".start-btn");
const initialTitle = document.querySelector(".title");
const initialParagraph = document.querySelector(".paragraph");
const textContent = document.querySelector(".text-content");
const buttonLetsGo = document.createElement ()

//let initialXp = 20;

function startGame () {
    startButton.addEventListener("click", ()=> {
        initialParagraph.style.display = "none";
        initialTitle.style.display = "none";
        startButton.innerHTML =
            `<button class="single-choice-btn">Let's go!</button>`;
        textContent.innerHTML =
            `<p class="text-init"> There are safe paths to cross the Elvan Forest, and you will need to 
            make some attempts to find them. There are passages that make you walk much further or lead directly to death. 
            <br> May the luck of the gods accompany you on the adventure ahead!"
            </p>`;
    })
}

function firstOption () {}

startGame()
