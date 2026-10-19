import { useState } from 'react'
import TaskList from './components/tasks/TaskList'
import ProductList from './components/shop/ProductList'
import './App.css'

function App() {
  const [products] = useState([
    { id: 1, name: 'Užrašų knygelė', price: 4.5 },
    { id: 2, name: 'Rašiklis', price: 1.25 },
    { id: 3, name: 'Kuprinė', price: 29.99 },
  ])

  const [cart, setCart] = useState([])

  function handleAddToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      )

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

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

        <h3>Prekės</h3>
        <ProductList products={products} onAdd={handleAddToCart} />

        <h3>Krepšelis</h3>

        {cart.length === 0 ? (
          <p>Krepšelis tuščias.</p>
        ) : (
          <ul className="cart-preview">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} – kiekis: {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="section">
        <h2>C dalis. Skaičių spėjimo žaidimas</h2>
        <p>Čia reikės atspėti skaičių nuo 1 iki 100.</p>
      </section>
    </main>
  )
}

export default App