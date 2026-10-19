import { useState } from 'react'
import GuessForm from './GuessForm'
import Message from './Message'

function GuessGame() {
  const [secretNumber] = useState(
    () => Math.floor(Math.random() * 100) + 1,
  )
  const [input, setInput] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [result, setResult] = useState({
    message: '',
    isError: false,
    isWon: false,
  })

  function handleGuess(event) {
    event.preventDefault()

    if (result.isWon) {
      return
    }

    const trimmedInput = input.trim()
    const guess = Number(trimmedInput)

    if (
      trimmedInput === '' ||
      !Number.isInteger(guess) ||
      guess < 1 ||
      guess > 100
    ) {
      setResult({
        message: 'Įveskite sveikąjį skaičių nuo 1 iki 100.',
        isError: true,
        isWon: false,
      })
      return
    }

    setAttempts((currentAttempts) => currentAttempts + 1)

    if (guess === secretNumber) {
      setResult({
        message: 'Teisingai!',
        isError: false,
        isWon: true,
      })
    } else if (guess > secretNumber) {
      setResult({
        message: 'Bandyk mažesnį',
        isError: false,
        isWon: false,
      })
    } else {
      setResult({
        message: 'Bandyk didesnį',
        isError: false,
        isWon: false,
      })
    }

    setInput('')
  }

  return (
    <div className="guess-game">
      <p>Atspėkite slaptą skaičių nuo 1 iki 100.</p>

      <GuessForm
        input={input}
        onInputChange={setInput}
        onGuess={handleGuess}
        isWon={result.isWon}
      />

      <p className="guess-attempts">Bandymų skaičius: {attempts}</p>

      <Message
        message={result.message}
        isError={result.isError}
      />

      {result.isWon && (
        <p className="game-restart">
          Norėdami pradėti naują žaidimą, perkraukite puslapį.
        </p>
      )}
    </div>
  )
}

export default GuessGame