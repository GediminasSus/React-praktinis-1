import './App.css'
import TaskList from './components/tasks/TaskList'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>React praktinė užduotis</h1>
        <p>Komponentai, būsena ir formos</p>
      </header>

      <section className="section">
        <h2>A dalis. Užduočių sąrašas</h2>
        <TaskList />
      </section>

      <section className="section">
        <h2>B dalis. Krepšelio sistema</h2>
        <p>krepselis</p>
      </section>

      <section className="section">
        <h2>C dalis. Skaičių spėjimo žaidimas</h2>
        <p>skaiciu zaidimas</p>
      </section>
    </main>
  )
}

export default App