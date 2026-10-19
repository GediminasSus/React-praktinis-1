function GuessForm({ input, onInputChange, onGuess, isWon }) {
  return (
    <form className="guess-form" onSubmit={onGuess} noValidate>
      <label htmlFor="guess-input">
        Įveskite sveikąjį skaičių nuo 1 iki 100
      </label>

      <div className="guess-form-controls">
        <input
          id="guess-input"
          type="text"
          inputMode="numeric"
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          placeholder="Jūsų spėjimas"
          disabled={isWon}
        />

        <button type="submit" disabled={isWon}>
          Spėti
        </button>
      </div>
    </form>
  )
}

export default GuessForm