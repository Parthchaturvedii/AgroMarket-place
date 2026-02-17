import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>🌾 Available Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              margin: "10px",
              width: "200px",
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>₹ {product.price}</strong></p>
            <p>Stock: {product.countInStock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
