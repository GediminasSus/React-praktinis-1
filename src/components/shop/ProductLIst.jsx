import ProductItem from './ProductItem'

function ProductList({ products, onAdd }) {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </ul>
  )
}

export default ProductList