import { useState } from 'react'
import TaskForm from './TaskForm'

function TaskList() {
  const [tasks, setTasks] = useState([])

  function handleAddTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  return (
    <div>
      <TaskForm onAdd={handleAddTask} />

      {tasks.length === 0 ? (
        <p>Užduočių dar nėra.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li className="task-item" key={task.id}>
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList