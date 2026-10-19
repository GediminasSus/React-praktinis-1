function Message({ message, isError }) {
  if (!message) {
    return null
  }

  return (
    <p
      className={`game-message${isError ? ' game-message-error' : ''}`}
      role={isError ? 'alert' : 'status'}
    >
      {message}
    </p>
  )
}

export default Message