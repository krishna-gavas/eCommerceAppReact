import React, { useContext } from 'react'
import './shop.css'
import {ShopContext} from '../../context/shop-context'

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    let numItems = cartItems[id];

  return (
    <div className='product'>
      <img src={productImage} />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className='addToCartBtn' onClick={() => addToCart(id)}>
        Add to cart {numItems > 0 && <> ({numItems}) </>}
      </button>
    </div>
  )
}

export default Product