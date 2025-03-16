import React from "react";

function GuessInput({ guesses, setGuesses, gameOver }) {
  const [guess, setGuess] = React.useState("");
  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          setGuesses(() => [...guesses, guess]);
          console.log({ guess });
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          pattern="[a-zäöüA-ZÄÖÜ]{5}"
          value={guess}
          title="Must be 5 uppercase letters"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          disabled={gameOver}
        />
      </form>
    </div>
  );
}

export default GuessInput;
