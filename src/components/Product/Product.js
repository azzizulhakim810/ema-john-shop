import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {

  const {handleAddToCart, product} = props;
  const {name, img, price, seller, ratings} = product;

  // const ClickedAddToCart = handleAddToCart(product);

  return (
    <div className='product'>
      <img src={img} alt="" />
      
      <div className="product-info">
      <h3>{name}</h3>
      <h4>Price: ${price}</h4>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings}</p>
      </div>

      <div className="add-to-cart-btn">
      <button onClick={()=> handleAddToCart(product)}>
      Add to Cart
      <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>

  );
};

export default Product;