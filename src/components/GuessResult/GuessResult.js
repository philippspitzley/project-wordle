import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const status = checkGuess(guesses[num], answer);
        return <Guess key={num} guess={guesses[num]} status={status} />;
      })}
    </div>
  );
}

export default GuessResult;
