const startButton = document.querySelector("#start-btn");
const initialTitle = document.querySelector("#title");
const initialParagraph = document.querySelector(".paragraph");
const container = document.querySelector(".content");  
const allButtons = document.querySelector(".all-buttons") 

const secondBtn = document.querySelector("#second-btn");
secondBtn.style.display = "none"
const initialText = document.createElement("p")
initialText.innerHTML = `There are safe paths to cross the Elvan Forest, and you will need to make some attempts to find them. There are passages that make you walk much further or lead directly to death. 
<br> May the luck of the gods accompany you on the adventure ahead!`
const buttonLetsGo = document.createElement("button");
buttonLetsGo.setAttribute("id", "letsGoBtn")
buttonLetsGo.innerText = "Lets go"

function startGame () {
    startButton.addEventListener("click", ()=> {
        container.removeChild(initialParagraph)
        allButtons.removeChild(startButton)
        container.appendChild(initialText)
        container.appendChild(buttonLetsGo)
    })
}
startGame()

//First story:
const startStory = document.createElement("p");
startStory.setAttribute("class", "story");
startStory.innerHTML = `You walk to the stone tower of the monster-wizard Kragon, located on the border of Elvan. Upon arrival, you ring the bell and wait for the wizard. You identify yourself and say that you are looking for magical artifacts. Kragon invites you to enter the tower`
const buttonOne = document.querySelector("#start-btn")
const buttonTwo = document.querySelector("#second-btn")
buttonTwo.innerHTML ="Attack Kragon"

buttonLetsGo.addEventListener("click", ()=> {
    container.appendChild(startStory)
    container.setAttribute("class", "container-story")
    container.removeChild(buttonLetsGo)
    container.removeChild(initialText)
    secondBtn.style.display = "block"
    buttonOne.innerHTML ="Follow Kragon"
    allButtons.appendChild(buttonOne)
    allButtons.appendChild(buttonTwo)
    allButtons.setAttribute("class", "two-buttons")
    initialTitle.setAttribute("id", "secondTitle");
    buttonOne.classList.add("btn-options");
    buttonTwo.classList.add("btn-options");    
})

//follow
