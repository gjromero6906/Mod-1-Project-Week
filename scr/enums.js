const Choice = Object.freeze({
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors"
});

const Result = Object.freeze({//these are 'hard coded' only choices that there'll be
  WIN: "win",
  LOSS: "loss",
  TIE: "tie"
});//learn about these and try them out had to read and use chat gbt a lot to under stand but they keep from code repeating and prevent small bugs 
//like misspelling

module.exports = { Choice, Result };