import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import image from "../../images/404.png";
import Product from "./Product";

const ProductItem = () => {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const { id } = useParams();

  const renderProduct = Object.keys(products).filter((obj) => obj);
  for (const product of products) {
    if (product.id === parseInt(id)) {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      );
    }
  }

  const pageNotFound = () => {
    return (
      <div className="App">
        <img className="404" src={image} alt="error 404 page not found" />
        <h1>Page not found</h1>
      </div>
    );
  };

  if (!loading) {
    if (renderProduct.toLocaleString() === id) {
      return <div>{renderProduct()}</div>;
    } else return <>{pageNotFound()}</>;
  } else {
    return "loading ...";
  }
};

export default ProductItem;
