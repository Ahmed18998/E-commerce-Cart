import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css";

const CartIcon = () => {
  const totalQuantity = useSelector((state) =>
    state.products.cart.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <Link to="/cart">
      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge badge-danger">{totalQuantity}</span>
      </div>
    </Link>
  );
};

export default CartIcon;
