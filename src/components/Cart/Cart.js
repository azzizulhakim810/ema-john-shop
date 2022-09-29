import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const {cart} = props;

  let totalPrice = 0;
  let shipping = 0;

  for(const product of cart) {
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat(totalPrice * .1);
  const grandTotal = totalPrice + shipping + tax;
  // console.log(cart);
  return (
    <div className='cart'>
        <h2>Order Summary</h2>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: {totalPrice}</p>
        <p>Total Shipping: {shipping}</p>
        <p>Tax: {tax.toFixed(2)}</p>
        <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;