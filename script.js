const title = document.getElementsByTagName("h1");
const initialtext = document.getElementById("textContent");
const initialBtnLeft = document.getElementById("left-btn");
const initialBtnRight = document.getElementById("hide-btn")
const textAlert = document.getElementsByClassName("text-alert")

function startGame () {
    initialBtnLeft.addEventListener("click", ()=> {
        initialBtnRight.setAttribute("id", "right-btn")
        
    const story = document.getElementById("textContent");
        story.classList.add("text-story")
    const op1btn = document.getElementById("left-btn");
    const op2btn = document.getElementById("right-btn");

    const game = new Game(story, op1btn, op2btn);
    initialtext.innerHTML = `${game.storyOptions[0].text}`;
    op1btn.innerHTML = `${game.storyOptions[0].left}`;
    op2btn.innerHTML = `${game.storyOptions[0].right}`

    op1btn.addEventListener("click", () => {
        game.gameRound = game.gameRound + 1;
        game.gamePoints = game.gamePoints + 1;
            game.changeStage(game.gameRound);
        });
   
    op2btn.addEventListener("click", () => {
        game.gameRound = game.gameRound + 1;
        game.gamePoints = game.gamePoints + 2;
            game.changeStage(game.gameRound);
        }); 
})
}
startGame()


