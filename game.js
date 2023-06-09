class Game {
  constructor(story, op1, op2) {
    this.story = story;
    this.op1btn = op1;
    this.op2btn = op2;
    this.gameRound = 0;
    this.gamePoints = 1;
    this.storyOptions = [
      {
        text: "You walk to the stone tower of the monster-wizard Kragon, located on the border of Elvan. You identify yourself and say that you are looking for magical artifacts.Kargon displays a variety of potions and artifacts, and tells the story of the legendary hammer.",
        left: "Collect artefacts",
        right: "Attack Kragon",
        conditionToShow: 0,
        oddOrEven: "odd",
      },
      {
        text: `You are entering the forest, which becomes humid, dark, and dense, following a narrow and winding trail to the north. 
          Off the trail, you hear cries for help`,
        left: "Help the person",
        right: "Go through the north trail",
        conditionToShow: 1,
        oddOrEven: "odd",
      },
      {
        text: `Kragon advises you not to be foolish. He is very powerful! 
        Now you are turned into a frog by a very strong magic and thrown out of the tower`,
        left: "You died. Game over",
        right: "_",
        conditionToShow: 1,
        oddOrEven: "even",
      },
      {
        text: `Going off the trail a few meters, you see a strange humanoid creature caught in a trap, calling for help. 
        You free it from the trap and it tells you a strange story about not accepting favours from humans and not letting you live. 
        You fight bravely but you can't win`,
        left: "You died. Game over",
        right: "_",
        conditionToShow: 2,
        oddOrEven: "even",
      },
      {
        text: `Walking along the trail, you see a small creature with brown skin sitting on a rock. 
        Despite its bad-tempered expression, it could be a Goblin and help you find the way to the castle`,
        left: "Ignore the goblin and keep walking",
        right: "Talk to him",
        conditionToShow: 2,
        oddOrEven: "odd",
      },
      {
        text: `Heading north, the trees become more sparse, seeming less threatening. 
        There's an old wooden chair covered in moss on the right side of the trail`,
        left: "Keep walking",
        right: "Stop and rest",
        conditionToShow: 3,
        oddOrEven: "even",
      },
      {
        text: `When he hears your voice, the Goblin begins to transform into a Mesras, a reptile-like monster. 
        It attacks you, although you have experience you are seriously injured.`,
        left: "You died. Game over",
        right: "_",
        conditionToShow: 3,
        oddOrEven: "odd",
      },
      {
        text: `In the distance, to the right of the trail, you see large birds circling in the sky. 
        As you approach, you recognize them as vultures`,
        left: "Keep walking to north",
        right: "Leave the trail and see what the vultures are observing",
        conditionToShow: 4,
        oddOrEven: "odd",
      },
      {
        text: `The moss and wood chair is very comfortable and you relax deeply. 
        However, this chair is removing your energy`,
        left: "You died. Game over",
        right: "_",
        conditionToShow: 4,
        oddOrEven: "even",
      },
      {
        text: `It was a trap to capture adventurers! 
        You became food for terrible creatures`,
        left: "You died. Game over",
        right: "_",
        conditionToShow: 5,
        oddOrEven: "odd",
      },
      {
        text: "You are on the top of a hill and observe the options to continue your journey",
        left: "Going down through the rockys",
        right: "Going down among the trees",
        conditionToShow: 5,
        oddOrEven: "even",
      },
      {
        text: `Going down to the hill, the green and flat bottom of the valley stretches before you with the Elvan forest! 
        After the forest it's possible to see Stonebridge Castle! The end of your journey!`,
        left: "Go through the valley",
        right: "Go through the north trail",
        conditionToShow: 6,
        oddOrEven: "odd",
      },
      {
        text: "Going down through the trees, you can see that the trail ends in a huge bridge.",
        left: "Follow the bridge",
        right: "Keep walking to north",
        conditionToShow: 6,
        oddOrEven: "even",
      },
      {
        text: `Although more difficult, this path took him straight to Stonebridge Castle!
        Go claim your reward! The gold awaits you!`,
        left: "You did it!",
        right: 0,
        conditionToShow: 7,
        oddOrEven: "odd",
      },
      {
        text: "Now you noticed that you were going around in circles and returned to the starting point!",
        left: "Turn back to the start",
        right: "_",
        conditionToShow: 7,
        oddOrEven: "even",
      },
    ];
  }
  changeStage(stage) {
    if (this.gamePoints % 2 === 0) {
      for (let i = 0; i < this.storyOptions.length; i++) {
        if (
          this.storyOptions[i].oddOrEven === "odd" &&
          stage === this.storyOptions[i].conditionToShow
        ) {
          if (this.storyOptions[i].right === "_") {
            this.story.innerText = this.storyOptions[i].text;
            this.op2btn.style.display = "none";
            this.op1btn.innerText = "Back to the start game";
            this.op1btn.addEventListener("click", () => {
              alert(" Game over");
              window.location.reload();
            });
            return;
          } else if (this.storyOptions[i].right === "You did it!") {
            this.story.innerText = this.storyOptions[i].text;
            this.op2btn.style.display = "none";
            this.op1btn.innerText = "You win! Back to the start game";
            this.op1btn.addEventListener("click", () => {
              alert("Well done! You did it!");
              window.location.reload();
            });
          } else {
            this.story.innerText = this.storyOptions[i].text;
            this.op1btn.innerText = this.storyOptions[i].left;
            this.op2btn.innerText = this.storyOptions[i].right;
            console.log("else odd");
            return;
          }
        }
      }
    } else {
      for (let i = 0; i < this.storyOptions.length; i++) {
        if (
          this.storyOptions[i].oddOrEven === "even" &&
          stage === this.storyOptions[i].conditionToShow
        ) {
          if (this.storyOptions[i].right === "_") {
            this.story.innerText = this.storyOptions[i].text;
            this.op2btn.style.display = "none";
            this.op1btn.innerText = "Back to the start game";
            this.op1btn.addEventListener("click", () => {
              alert("Game over");
              window.location.reload();
            });
            return;
          } else if (this.storyOptions[i].left === "You did it!") {
            this.story.innerText = this.storyOptions[i].text;
            this.op2btn.style.display = "none";
            this.op1btn.innerText = "You win! Back to the start game";
            this.op1btn.addEventListener("click", () => {
              alert("Well done! You did it!");
              window.location.reload();
            });
          } else {
            this.story.innerText = this.storyOptions[i].text;
            this.op1btn.innerText = this.storyOptions[i].left;
            this.op2btn.innerText = this.storyOptions[i].right;
            return;
          }
        }
      }
    }
  }
}
