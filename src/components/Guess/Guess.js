import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, status }) {
  console.log({ guess, status });
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span key={num} className={`cell ${status && status[num].status}`}>
            {guess ? guess[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
