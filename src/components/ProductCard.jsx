import ProductBadge from './ProductBadge'

function ProductCard({
  product,
  isSelected,
  isFavorite,
  onSelectProduct,
  onToggleFavorite,
}) {
  return (
    <article className={`product-card ${isSelected ? 'selected' : ''}`}>
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
        <span className={`badge ${product.available ? 'badge-available' : 'badge-unavailable'}`}>
          {product.available ? 'En stock' : 'Indisponible'}
        </span>
      </div>
      <div>
        <ProductBadge category={product.category} />
        <h3>{product.name}</h3>
        <strong>{product.price} EUR</strong>

        <div className="product-actions">
          <button onClick={() => onSelectProduct(product)}>Voir les details</button>
          <button onClick={() => onToggleFavorite(product.id)}>
            {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
