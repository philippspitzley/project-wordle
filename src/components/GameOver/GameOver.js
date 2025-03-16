import React from "react";

function GameOver({ gameWon, guesses }) {
  return gameWon ? (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length}guesses</strong>.
      </p>
    </div>
  ) : (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );
}

export default GameOver;
