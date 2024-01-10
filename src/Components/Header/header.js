import React  from 'react';
import Fashion from "./img/FASHION.png"
import ShhoppingCartIcon from "./img/shopping_cart_icon.png"
import  "./header.style.css";
import {Link} from "react-router-dom"
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import LoginOut from "../../Pages/LoginOut/LoginOut.jsx"

export default function Header({cart, setCart, onLoginOut}) {

  const [isOpen , setIsOpen] = useState(false)
  const [itemQuantities, setItemQuantities] = useState({})
  
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  function clear (){
    setItemQuantities({})
    cart.length = 0
  }

  function direction(item){
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [item.id] : (prevQuantities[item.id] || 1) + 1
    }));
    
  }

  const increment = (item) => {
    setItemQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item.id] || 1;
      return {
        ...prevQuantities,
        [item.id]: currentQuantity > 0 ? currentQuantity - 1 : 0,
      };
    });
  };

  const getTotalPrice = (item) => {
    const quantity = itemQuantities[item.id] || 1;
    return item.price * quantity;
  }

  const getTotalSum = () => {
    return cart.reduce((sum, item) => sum + getTotalPrice(item), 0);
  }

  const deleteProduct = (item) => {
    const newCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(newCart);
  };


  return (
    <>
    <header className="Header">
      <section className="Conteyner">
        <div className="Logo">
          <Link to = {"/"}> <img src={Fashion} alt="Fashion Logo" /> </Link>
        </div>
        <div className="ShoppingCartIcon">
          <button onClick={toggleCart}>
            <img src={ShhoppingCartIcon} alt="Shopping Cart" />
            <span>{cart.length}</span> 
          </button>
        </div>
        <div className="loginOutButton">
          <button onClick={() => onLoginOut()}>Login Out</button>
        </div>
      </section>

      {isOpen && (
          <section className="CartItems">
            {cart.map(item => (
              <div key={item.id} className="ContainerBasket">
                <div className="ContainerAboutProduct">
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="AboutProduct">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <div className="quantity">
                      <button onClick={() => increment(item)}>-</button>
                      <span>{itemQuantities[item.id] || 1}</span>
                      <button onClick={() => direction(item)}>+</button>
                    </div>
                    <div>
                      <p> $ {getTotalPrice(item)}</p>
                    </div>
                  </div>
                  <div>
                    <button onClick={()=> deleteProduct(item)}>X</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="totalSum">
              Total {getTotalSum()}
              <button onClick={()=>clear()}>Buy</button>
            </div>
          </section>
    )}

    </header>
    </>
  );
}

