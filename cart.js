import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: "30px" }}>
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                margin: "10px 0",
                borderRadius: "8px",
              }}
            >
              <h4>{item.name}</h4>
              <p>₹ {item.price}</p>
              <button onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹ {totalPrice}</h2>
        </>
      )}

      <button
        onClick={() => navigate("/dashboard")}
        style={{ marginTop: "20px", padding: "8px 15px" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default Cart;
