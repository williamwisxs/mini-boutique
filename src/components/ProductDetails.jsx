function ProductDetails({ product, isFavorite, onAddToCart }) {
  return (
    <section className="product-details">
      <h2>Produit selectionne</h2>
      <div className="details-card">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Categorie : {product.category}</p>
        <strong>Prix : {product.price} EUR</strong>

        {isFavorite && <p>Ce produit est dans vos favoris.</p>}

        <div className="product-actions">
          <button onClick={() => onAddToCart(product)}>Ajouter au panier</button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
