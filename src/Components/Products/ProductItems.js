import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductsItem = (obj) => {
  const products = useSelector((state) => state.products.products);
  const renderProducts = () =>
    Object.keys(products).map((obj) => (
      <div key={products[obj].id} className="col-4">
        <Card style={{ width: "18rem", marginBottom: "15px" }}>
          <Card.Img variant="top" src={products[obj].image} />
          <Card.Body>
            <Card.Title>{products[obj].name}</Card.Title>
            <Card.Text>{products[obj].price} $</Card.Text>
            <Link to={`/product/${products[obj].id}`}>
              <Button variant="primary">Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    ));

  return <>{renderProducts()}</>;
};

export default ProductsItem;
