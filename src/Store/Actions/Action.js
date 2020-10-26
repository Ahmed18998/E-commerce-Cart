import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_FROM_CART,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_PAYED,
} from "./Type";

const apiUrlProducts = "http://localhost:3000/products";
const apiUrlCart = "http://localhost:3000/cart";
const apiUrlPayed = "http://localhost:3000/payed";

// Function getProducts that get Products from db
export const getProducts = () => {
  return (dispatch) => {
    axios
      .get(apiUrlProducts)
      .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
      .catch((error) =>
        dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message })
      );
  };
};

// Function getCart that get products from cart
export const getCart = () => {
  return (dispatch) => {
    axios
      .get(apiUrlCart)
      .then((res) =>
        dispatch({ type: GET_PRODUCTS_FROM_CART, payload: res.data })
      );
  };
};

// Function addProduct that add product to cart
export const addCart = (id, name, price, image, description, quantity) => {
  return (dispatch) => {
    axios
      .post(apiUrlCart, {
        product: {
          id,
          name,
          price,
          image,
          description,
        },
        quantity,
      })
      .then((res) =>
        dispatch({
          type: ADD_PRODUCT_TO_CART,
          product: {
            id: res.data.product.id,
            name: res.data.product.name,
            price: res.data.product.price,
            image: res.data.product.image,
            description: res.data.product.description,
          },
          quantity: res.data.quantity,
          id: res.data.id,
        })
      );
  };
};

// Function deleteProduct that delete product from cart
export const deleteProduct = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then((res) => dispatch({ type: DELETE_PRODUCT_FROM_CART, id }));
  };
};

// Function addProductToPayed that add product to payed db and delete product from cart
export const addProductToPayed = (
  id,
  name,
  price,
  image,
  description,
  quantity,
  idCart
) => {
  return (dispatch) => {
    axios
      .post(apiUrlPayed, {
        cart: {
          product: {
            id,
            name,
            price,
            image,
            description,
          },
          quantity,
          idCart,
        },
      })
      .then((res) =>
        dispatch({
          type: ADD_PRODUCT_TO_PAYED,
          cart: {
            product: {
              id: res.data.cart.product.id,
              name: res.data.cart.product.name,
              price: res.data.cart.product.price,
              image: res.data.cart.product.image,
              description: res.data.cart.product.description,
            },
            quantity: res.data.cart.quantity,
            id: res.data.cart.idCart,
          },
          id: res.data.id,
        })
      );
    idCart.map((id) =>
      axios
        .delete(`http://localhost:3000/cart/${id}`)
        .then((res) => console.log(res.data))
        .catch((error) => null)
    );
  };
};
