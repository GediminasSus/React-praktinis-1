function Cart({ cart, onRemove }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  function formatPrice(price) {
    return `${price.toFixed(2).replace('.', ',')} Eur`
  }

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Krepšelis tuščias.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              <h4>{item.name}</h4>

              <dl className="cart-details">
                <div>
                  <dt>Vieneto kaina</dt>
                  <dd>{formatPrice(item.price)}</dd>
                </div>

                <div>
                  <dt>Kiekis</dt>
                  <dd>{item.quantity}</dd>
                </div>

                <div>
                  <dt>Eilutės suma</dt>
                  <dd>{formatPrice(item.price * item.quantity)}</dd>
                </div>
              </dl>

              <button
                type="button"
                className="remove-button"
                onClick={() => onRemove(item.id)}
              >
                Pašalinti iš krepšelio
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="cart-total">
        Bendra kaina: <strong>{formatPrice(total)}</strong>
      </p>
    </div>
  )
}

export default Cart