const initialBtnLeft = document.getElementById("start-game");
const textInitial = document.getElementById("text-initial");
const story = document.getElementById("text-story");
story.style.display = "none";

initialBtnLeft.addEventListener("click", () => {
  const op1btn = document.getElementById("left-btn");
  const op2btn = document.getElementById("right-btn");
  op2btn.classList.remove("hide");
  op1btn.classList.remove("hide");
  story.style.display = "block";
  initialBtnLeft.style.display = "none";
  textInitial.style.display = "none";

  const game = new Game(story, op1btn, op2btn);
  story.innerHTML = `${game.storyOptions[0].text}`;
  op1btn.innerHTML = `${game.storyOptions[0].left}`;
  op2btn.innerHTML = `${game.storyOptions[0].right}`;

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
});
