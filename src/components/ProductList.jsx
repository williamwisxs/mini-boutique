import ProductCard from './ProductCard'

function ProductList() {
  return (
    <section className="product-list">
      <h2>Nos produits</h2>
      <div className="products-grid">
        <ProductCard
          name="Ordinateur portable"
          price={899}
          category="Informatique"
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=270&fit=crop"
          available={true}
        />
        <ProductCard
          name="Souris sans fil"
          price={29}
          category="Accessoires"
          image="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=270&fit=crop"
          available={true}
        />
        <ProductCard
          name="Clavier mécanique"
          price={79}
          category="Accessoires"
          image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=270&fit=crop"
          available={false}
        />
        <ProductCard
          name="Écran 27 pouces"
          price={349}
          category="Informatique"
          image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=270&fit=crop"
          available={true}
        />
        <ProductCard
          name="Casque audio"
          price={59}
          category="Audio"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=270&fit=crop"
          available={false}
        />
      </div>
    </section>
  )
}

export default ProductList
