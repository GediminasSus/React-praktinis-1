function ProductItem({ product, onAdd }) {
  return (
    <li className="product-item">
      <h3>{product.name}</h3>
      <p>Kaina: {product.price.toFixed(2).replace('.', ',')} Eur</p>

      <button type="button" onClick={() => onAdd(product)}>
        Pridėti į krepšelį
      </button>
    </li>
  )
}

export default ProductItem