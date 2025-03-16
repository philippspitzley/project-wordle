import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import GameOver from "../GameOver/GameOver";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const gameWon = guesses.includes(answer);
  const gameOver = guesses.length === NUM_OF_GUESSES_ALLOWED || gameWon;

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      {gameOver && <GameOver gameWon={gameWon} guesses={guesses} />}
      <GuessInput
        setGuesses={setGuesses}
        guesses={guesses}
        gameOver={gameOver}
      />
    </>
  );
}

export default Game;
