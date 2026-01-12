const Menu = require("./menu");
const Game = require("./game");
const prompt = require('prompt-sync')();
class Start {//Start to handle flow only
  constructor() {
    this.game = new Game();
    this.menu = new Menu();
    this.running = true;
  }

  run() {
    console.clear();//every time game starts clear the console
    while (this.running) {//keep the code running
      this.menu.showMainMenu();//shows menu
      const choice = this.menu.getMenuChoice();//gets users choice

      switch (choice) {//switch cases 
        case "1"://if 1 is typed
          this.playGame();//runs play game
          break;
        case "2":
          this.menu.showStats(this.game.getStats());//runs stats code
          break;
        case "3":
          console.log("Thanks for playing!");
          this.running = false;// breaks running loop
          break;
        default:
          console.log("Invalid option.");//anything else is not a valid option
      }
    }
  }

  playGame() {
    const playerMove = this.menu.getPlayerMove();//runs get player move 

    if (!playerMove) {
        return; // Menu already handled the message
    }

    const result = this.game.playRound(playerMove);//gets result of the round
    this.menu.showRoundResult(result);//shows the rounds 'play'
  }
}
const start = new Start();
start.run();//runs the program
// made it so 