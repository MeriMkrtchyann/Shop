import React from "react";
import ShhoppingCartIcon from "./img/shopping_cart_icon.png";

export default function Product({ product , setCart }) {

  const handleAddToCart = () => {
    setCart((prevCart) => {
      if (prevCart.some(item => item.id === product.id)) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  return (
    <div key={product.id} className="Product">
      <div className="AboutProduct">
        <img src={product.image} alt={product.title} />
        <span>{product.title}</span>
        <div className="ProductPrice">
          <span> $ {product.price} </span>
          <button onClick={handleAddToCart} >
            <img src={ShhoppingCartIcon} alt="Shopping Cart" />
          </button>
        </div>
      </div>
    </div>
  );
}
