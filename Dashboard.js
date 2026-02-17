import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (!userInfo) {
    navigate("/login");
  }

  const products = [
    { id: 1, name: "Tomatoes", price: 40 },
    { id: 2, name: "Potatoes", price: 30 },
    { id: 3, name: "Onions", price: 35 },
    { id: 4, name: "Rice (1kg)", price: 60 },
    { id: 5, name: "Wheat (1kg)", price: 55 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🌾 Agro Market Dashboard</h1>
      <h3>Welcome, {userInfo?.name}</h3>

      <Link to="/cart">
        <button style={{ marginTop: "10px", padding: "8px 15px" }}>
          🛒 Go to Cart ({cart.length})
        </button>
      </Link>

      <h2 style={{ marginTop: "30px" }}>Available Products</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              margin: "10px",
              width: "200px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <h4>{product.name}</h4>
            <p>₹ {product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={logoutHandler}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
