import React, { useState } from "react";
import { addCart } from "../../Store/Actions/Action";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const { id, name, image, price, description } = props;
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const handleChangeQuantity = (e) => {
    const { value } = e.target;
    if (value > 0) {
      setQuantity(value);
    } else {
      return;
    }
  };

  const handleOnClick = (id, name, price, image, description, quantity) => {
    dispatch(addCart(id, name, price, image, description, parseInt(quantity)));
  };

  const renderProduct = () => (
    <div className="container">
      <h1>{name}</h1>
      <div className="row">
        <div className="col-6">
          <img src={image} alt="" />
        </div>
        <div className={"col-6"}>
          <h1>{name}</h1>
          <p>Price : {price} $ </p>
          <p>{description}</p>
          <br /> <br />
          <label style={{ marginRight: "10px" }} htmlFor="quantity">
            Quantity :
          </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
          <br /> <br />
          <p>Total :{quantity * price}</p>
          <button
            className="btn btn-primary"
            onClick={
              quantity > 0
                ? () =>
                    handleOnClick(id, name, price, image, description, quantity)
                : null
            }
            disabled={quantity > 0 ? false : true}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
  return <>{renderProduct()}</>;
};

export default Product;
