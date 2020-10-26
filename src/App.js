import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Index";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} />
          <Route path={"/product/:id"} component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
