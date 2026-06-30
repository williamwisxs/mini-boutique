import ProductBadge from './ProductBadge'

function ProductCard({ name, price, category, image, available }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} />
        <span className={`badge ${available ? 'badge-available' : 'badge-unavailable'}`}>
          {available ? 'En stock' : 'Indisponible'}
        </span>
      </div>
      <div>
        <ProductBadge category={category} />
        <h3>{name}</h3>
        <strong>{price} €</strong>
      </div>
    </article>
  )
}

export default ProductCard
