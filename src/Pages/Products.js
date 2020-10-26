import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getCart } from "../Store/Actions/Action";
import ProductItems from "../Components/Products/ProductItems";

const Products = () => {
  const loading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCart());
  }, [dispatch]);

  const renderProducts = () => {
    return (
      <div className="container">
        <h2 style={{ margin: "20px 0 20px 0" }}>Products</h2>
        <div className="row">
          <ProductItems />
        </div>
      </div>
    );
  };
  return <>{loading ? "loading ...." : renderProducts()}</>;
};

export default Products;
