const prompt = require("prompt-sync")();//require for user input
const { Choice, Result } = require("./enums");//installs (allows menu to use the pure choices)

class Menu {//choose Menu to handle user-facing messages
  showMainMenu() {//displays options
    console.log("\n1. Play Game");
    console.log("2. View Stats");
    console.log("3. Quit\n");
  }

  getMenuChoice() {//gets user input and returns it without empty spaces 
    return prompt("Select an option (1-3):").trim();
  }

  getPlayerMove() {//gets the players choice
  const input = prompt(
    "Choose a move (rock, paper, or scissors): "//gets user input eliminating empty spaces and converting it to lower case so '   Rock' 'RoCK    ' work
  )
    .trim()
    .toLowerCase();

  if (!input) {//checks if user inputs nothing
    console.log("Input cannot be empty.");
    return null;
  }

  if (!Object.values(Choice).includes(input)) {//checks if the user input is in the enums (pure choices) if not tell user its not a valid move
    console.log("Invalid move.");
    return null;
  }

  return input;//returns user input if it passes everything 
  }

  showRoundResult({ playerChoice, computerChoice, result }) {//shows the rounf
    console.log(`\nYou chose: ${playerChoice}`);//user choice
    console.log(`Computer chose: ${computerChoice}`);//computer choice

    if (result === Result.TIE) {//if both are the same its a tie(campers it to the enums)(next two for win or lose)
      console.log("It's a tie!");
    } else if (result === Result.WIN) {
      console.log(`${playerChoice} beats ${computerChoice}! You win!`);
    } else {
      console.log(`${computerChoice} beats ${playerChoice}! You lose!`);
    }
  }

  showStats(stats) {//prints status to player 
    console.log("\nCurrent Statistics:");
    console.log(`Games Won: ${stats.wins}`);
    console.log(`Games Lost: ${stats.losses}`);
    console.log(`Games Tied: ${stats.ties}`);
    console.log(`Total Games: ${stats.total}`);
    console.log(`Win Rate: ${stats.winRate}%`);
  }
}
module.exports = Menu;