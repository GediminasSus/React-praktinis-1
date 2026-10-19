import { useState } from 'react'
import GuessForm from './GuessForm'
import Message from './Message'

function GuessGame() {
  
  const [input, setInput] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [result, setResult] = useState({
    message: '',
    isError: false,
  })

  function handleGuess(event) {
    event.preventDefault()

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
      })
      return
    }

    setAttempts((currentAttempts) => currentAttempts + 1)

    setResult({
      message: `Spėjimas ${guess} priimtas.`,
      isError: false,
    })

    setInput('')
  }

  return (
    <div className="guess-game">
      <p>Atspėkite slaptą skaičių nuo 1 iki 100.</p>

      <GuessForm
        input={input}
        onInputChange={setInput}
        onGuess={handleGuess}
      />

      <p className="guess-attempts">Bandymų skaičius: {attempts}</p>

      <Message
        message={result.message}
        isError={result.isError}
      />
    </div>
  )
}

export default GuessGame