import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { getItemQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="px-3 py-2 mb-3">
        <div className="container d-flex flex-wrap justify-content-end">
          <div className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"></div>
          <button type="button" className="App-cart-icon">
            <BsCart className="cartSize" />
            {getItemQuantity() > 0 ? getItemQuantity() : 0}
          </button>
        </div>
      </div>
    </Link>
  );
}
export default CartWidget;
