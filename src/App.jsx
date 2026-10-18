import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>React praktinė užduotis</h1>
        <p>Komponentai, būsena ir formos</p>
      </header>

      <section className="section">
        <h2>A dalis. Užduočių sąrašas</h2>
        <p>Čia bus galima pridėti, pažymėti ir ištrinti užduotis.</p>
      </section>

      <section className="section">
        <h2>B dalis. Krepšelio sistema</h2>
        <p>Čia bus galima pasirinkti prekes ir valdyti krepšelį.</p>
      </section>

      <section className="section">
        <h2>C dalis. Skaičių spėjimo žaidimas</h2>
        <p>Čia reikės atspėti skaičių nuo 1 iki 100.</p>
      </section>
    </main>
  )
}

export default App