import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

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

  function handleCompleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task,
      ),
    )
  }

  function handleDeleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  return (
    <div>
      <TaskForm onAdd={handleAddTask} />

      {tasks.length === 0 ? (
        <p>Užduočių dar nėra.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onComplete={handleCompleteTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList