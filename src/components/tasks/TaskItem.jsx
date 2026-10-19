function TaskItem({ task, onComplete, onDelete }) {
  return (
    <li className={`task-item${task.completed ? ' task-item-completed' : ''}`}>
      <div className="task-content">
        <span className="task-text">{task.text}</span>

        {task.completed && <span className="task-status">Atlikta</span>}
      </div>

      <div className="task-actions">
        <button
          type="button"
          className="complete-button"
          onClick={() => onComplete(task.id)}
          disabled={task.completed}
        >
          Pažymėti kaip atliktą
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(task.id)}
        >
          Ištrinti
        </button>
      </div>
    </li>
  )
}

export default TaskItem