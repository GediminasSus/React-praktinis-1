import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedText = text.trim()

    if (trimmedText === '') {
      setError('Įveskite užduoties tekstą.')
      return
    }

    onAdd(trimmedText)
    setText('')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="task-text">Nauja užduotis</label>

      <div className="task-form-controls">
        <input
          id="task-text"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Įrašykite užduotį"
          aria-invalid={error !== ''}
          aria-describedby={error ? 'task-error' : undefined}
        />

        <button type="submit">Pridėti užduotį</button>
      </div>

      {error && (
        <p id="task-error" className="error-message" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

export default TaskForm