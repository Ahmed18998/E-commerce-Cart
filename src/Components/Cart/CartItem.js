import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Store/Actions/Action";

const CartItem = (props) => {
  const { idCart, name, price, image, quantity } = props;
  const dispatch = useDispatch();

  const renderCart = () => (
    <Card style={{ width: "18rem", marginBottom: "15px" }}>
      <Card.Img variant="top" />
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price : {price}$</Card.Text>
        <Card.Text>Quantity :{quantity}</Card.Text>
        <Card.Text>Total :{quantity * price}$</Card.Text>
        <Button
          onClick={() => dispatch(deleteProduct(idCart))}
          className="delete"
          variant="danger"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
  return <>{renderCart()}</>;
};

export default CartItem;
