import React, { useEffect } from "react";
import CartItem from "../Components/Cart/CartItem";
import { useSelector } from "react-redux";
import { getCart, addProductToPayed } from "../Store/Actions/Action";
import { useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCart()), [dispatch]);
  const cart = useSelector((state) => state.products.cart);
  const totalPrice = useSelector((state) =>
    state.products.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    )
  );

  const handlePay = (id, name, price, image, description, quantity, idCart) => {
    dispatch(
      addProductToPayed(id, name, price, image, description, quantity, idCart)
    );
  };

  const renderCart = () => (
    <div className="App">
      <div className="container">
        <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>Cart</h2>
        <div className="row">
          {Object.keys(cart).map((obj) => (
            <div className="col-4" key={cart[obj].id}>
              <CartItem
                idCart={cart[obj].id}
                name={cart[obj].product.name}
                price={cart[obj].product.price}
                image={cart[obj].product.image}
                description={cart[obj].product.description}
                quantity={cart[obj].quantity}
              />
            </div>
          ))}
        </div>
        <br />
        <h3>Total : {totalPrice}$</h3> <br />
        <button
          className="btn btn-primary btn-block"
          disabled={cart.length > 0 ? false : true}
          onClick={() =>
            handlePay(
              Object.keys(cart).map((obj) => cart[obj].product.id),
              Object.keys(cart).map((obj) => cart[obj].product.name),
              Object.keys(cart).map((obj) => cart[obj].product.price),
              Object.keys(cart).map((obj) => cart[obj].product.image),
              Object.keys(cart).map((obj) => cart[obj].product.description),
              Object.keys(cart).map((obj) => cart[obj].quantity),
              Object.keys(cart).map((obj) => cart[obj].id)
            )
          }
        >
          Pay
        </button>
      </div>
    </div>
  );

  return <>{renderCart()}</>;
};

export default Cart;
