import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts, getCart } from "../Store/Actions/Action";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCart());
  }, [dispatch]);
  return <div className="App">Home</div>;
};

export default Home;
