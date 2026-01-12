const Menu = require("./menu")
const { Choice, Result } = require("./enums");
const start = require("./start")
class Game {//handles game logic 
  constructor() {
    this.wins = 0;
    this.losses = 0;
    this.ties = 0;
  }

  getComputerChoice() {
    const choices = Object.values(Choice);
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  determineResult(player, computer) {
    if (player === computer) return Result.TIE;

    if (
      (player === Choice.ROCK && computer === Choice.SCISSORS) ||
      (player === Choice.SCISSORS && computer === Choice.PAPER) ||
      (player === Choice.PAPER && computer === Choice.ROCK)
    ) {
      return Result.WIN;
    }

    return Result.LOSS;
  }

  playRound(playerChoice) {
    const computerChoice = this.getComputerChoice();
    const result = this.determineResult(playerChoice, computerChoice);

    if (result === Result.WIN) this.wins++;
    if (result === Result.LOSS) this.losses++;
    if (result === Result.TIE) this.ties++;

    return { playerChoice, computerChoice, result };
  }

  getStats() {
    const total = this.wins + this.losses + this.ties;
    const winRate = total === 0 ? 0 : Math.round((this.wins / total) * 100);

    return {
      wins: this.wins,
      losses: this.losses,
      ties: this.ties,
      total,
      winRate
    };
  }
}
module.exports = Game;