import products from "../data";


function ProductList({ addToCart }) {
  const categories = ["Electronics", "Clothing", "Accessories"];

  return (
    <div className="container">
      <h2 className="title">Products</h2>

      {categories.map((cat) => (
        <div key={cat} className="section">
          <h3 className="section-title">{cat}</h3>

          <div className="grid">
            {products
              .filter((p) => p.category === cat)
              .map((p) => (
                <div className="card" key={p.id}>
                  <h3>{p.name}</h3>
                  <p className="price">${p.price}</p>
                  <button onClick={() => addToCart(p)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;