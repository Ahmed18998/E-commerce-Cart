import {
  GET_PRODUCTS,
  GET_PRODUCTS_FROM_CART,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_PAYED,
} from "../Actions/Type";
const initState = { loading: true, products: [], cart: [], payed: [] };

export const products = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: false, products: action.payload };
    case GET_PRODUCTS_FROM_CART:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        loading: false,
        cart: [
          ...state.cart,
          {
            product: {
              id: action.product.id,
              name: action.product.name,
              price: action.product.price,
              image: action.product.image,
              description: action.product.description,
            },
            quantity: action.quantity,
            id: action.id,
          },
        ],
      };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        loading: false,
        cart: [...state.cart.filter((product) => product.id !== action.id)],
      };
    case ADD_PRODUCT_TO_PAYED:
      return {
        ...state,
        loading: false,
        cart: [
          ...state.cart.filter((product) => product.id === action.cart.id),
        ],
        payed: [
          ...state.payed,
          {
            cart: {
              product: {
                id: action.cart.product.id,
                name: action.cart.product.name,
                price: action.cart.product.price,
                image: action.cart.product.image,
                description: action.cart.product.description,
              },
              quantity: action.cart.quantity,
              id: action.cart.id,
            },
            id: action.id,
          },
        ],
      };

    default:
      return state;
  }
};
