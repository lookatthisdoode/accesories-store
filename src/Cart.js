import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ items, total, sendOrder, toggleCart }) => {
  const [cartVisible, setCartVisible] = useState(true);


  return (
    <div className="cart">
    	<div className="cart-content">
      		<h1>Cart:</h1>
	     	<div className="items-container">
	     		<ul>
	      		{items.map((item, i) => (<li>{item}</li>))}
	      		</ul>
      		</div>
      	</div>
      	<div className="buttons-container">
	      	<h1>Total: {total} $</h1>
	      	<div className="order-button" onClick={sendOrder}>
	        	Proceed to Order!
	      	</div>
	      	<div className="close-button" onClick={toggleCart}>
		        Close Cart
	      	</div>
	     </div>
    </div>
  );
};

export default Cart;