import React from "react";
import { Animated } from "react-animated-css";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div className="itemLista">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </Animated>
  );
};
export default ItemList;
