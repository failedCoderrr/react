import React from "react";
import { useDispatch } from "../../react-redux.jsx";
import {
  cartItemQuantiyDecrease,
  cartItemQuantiyIncrease,
} from "../../store/cartReducer.js";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  quantity,
  imageUrl,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => dispatch(cartItemQuantiyDecrease(productId))}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(cartItemQuantiyIncrease(productId))}>
          +
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
