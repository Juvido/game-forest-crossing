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
const leftButton = document.querySelector(".leftBtn")
const rightButton = document.querySelector(".rightBtn")
rightButton.innerHTML ="Attack Kragon"

buttonLetsGo.addEventListener("click", ()=> {
    container.appendChild(startStory)
    container.setAttribute("class", "container-story")
    container.removeChild(buttonLetsGo)
    container.removeChild(initialText)
    secondBtn.style.display = "block"
    leftButton.innerHTML ="Follow Kragon"
    allButtons.appendChild(leftButton)
    allButtons.appendChild(rightButton)
    allButtons.setAttribute("class", "two-buttons")
    initialTitle.setAttribute("id", "secondTitle");
    leftButton.classList.add("btn-options");
    rightButton.classList.add("btn-options");    
})
//loop:

leftButton.addEventListener("click", () => {
    if (leftButton.onclick ()) {
        startStory.innerHTML= option3.this.text;
        leftButton.innerHTML = option3.this.leftBtn;
        rightButton.style.display = "none"
    } else {
        startStory.innerHTML= option2.text;
        leftButton.innerHTML = option2.leftBtn;
        rightButton.innerHTML = option2.rightBtn
}
})

/*
const startStory = document.createElement("p");
const leftButton = document.querySelector(".leftBtn")
const rightButton = document.querySelector(".rightBtn")

buttonLetsGo.addEventListener ("click", () =>{
    container.removeChild(buttonLetsGo)
    container.removeChild(initialText)
    secondBtn.style.display = "block"
   
    startStory.innerHTML = 
    leftButton.innerHTML = 
    rightButton.innerHTML = 

})*/
