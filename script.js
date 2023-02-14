//last step

const getCompChoice = () => {
    let ans = Math.trunc(Math.random() * 3);
    let list = ["Rock", "Paper", "Scissors"];
    return list[ans];
  };
  
  let result = "";
  let pscores = 0;
  let cscores = 0;
  const displayM = (msg) => {
    if (pscores < 5 && cscores < 5) {
      document.querySelector(".result").textContent = msg;
      document.querySelector(".score").textContent = `${pscores}---${cscores}`;
    } else {
      document.querySelector(".result").textContent =
        pscores > cscores ? "You won the game!" : "You Lost the game!";
      document.querySelector(".score").textContent = `${pscores}---${cscores}`;
    }
  };
  
  const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
      result = "Tie!";
      if (pscores < 5 && cscores < 5) {
        displayM(result);
      }
      return;
    } else if (playerSelection === "Rock") {
      if (computerSelection === "Scissors") {
        result = `You Wooonn! ${playerSelection} beats ${computerSelection}`;
        if (pscores < 5 && cscores < 5) {
          pscores += 1;
          displayM(result);
        }
        return;
      } else {
        result = `You Loooose! ${computerSelection} beats ${playerSelection}`;
        if (pscores < 5 && cscores < 5) {
          cscores += 1;
          displayM(result);
        }
        return;
      }
    } else if (playerSelection === "Scissors") {
      if (computerSelection === "Rock") {
        result = `You Loooose! ${computerSelection} beats ${playerSelection}`;
        if (pscores < 5 && cscores < 5) {
          cscores += 1;
          displayM(result);
        }
        return;
      } else {
        result = `You Wooonn! ${playerSelection} beats ${computerSelection}`;
        if (pscores < 5 && cscores < 5) {
          pscores += 1;
          displayM(result);
        }
        return;
      }
    } else if (playerSelection === "Paper") {
      if (computerSelection === "Rock") {
        result = `You Wooonn! ${playerSelection} beats ${computerSelection}`;
        if (pscores < 5 && cscores < 5) {
          pscores += 1;
          displayM(result);
        }
  
        return;
      } else {
        result = `You Loooose! ${computerSelection} beats ${playerSelection}`;
        if (pscores < 5 && cscores < 5) {
          cscores += 1;
          displayM(result);
        }
        return;
      }
    }
  };
  const icons = document.querySelectorAll("div.icons span");
  
  const getPlayerChoice = (e) => {
    let player = e.target.id;
    playRound(player, getCompChoice());
  };
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", getPlayerChoice);
  }