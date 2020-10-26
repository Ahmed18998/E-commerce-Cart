import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts, getCart } from "../Store/Actions/Action";
import ProductItem from "../Components/Product/ProductItem";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div>
      <ProductItem />
    </div>
  );
};

export default Product;
