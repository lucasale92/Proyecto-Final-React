import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

import swal from "sweetalert";
import { CartContext } from "../context/CartContext";

export default function ItemDetail({ detail, id }) {
  let { name, price, img, stock, description } = detail;

  const { isInCart, addToCart } = useContext(CartContext);
  const [cant, setCant] = useState(0);

  const [count, setCount] = useState(1);

  const sumar = () => {
    count < stock
      ? setCount(count + 1)
      : swal("Ups!", "No hay Stock suficiente", "error");
  };
  const restar = () => {
    count > 1
      ? setCount(count - 1)
      : swal("Error", "La cantidad no puede ser menor a 1", "error");
  };

  const agregar = (count) => {
    if (count === 1) {
      swal("Felicidades", `Se agregó 1 ${name} al carrito`, "success");
    } else {
      swal(
        "Felicidades",
        `Se agregaron ${count} ${name} al carrito.`,
        "success"
      );
    }
    setCant(count);
    addToCart(detail, count, id);
    isInCart(id);
  };
  return (
    <div className="item-detail-contenedor">
      <div className="item-detail-featured-img">
        <img src={img} alt="imagen" className="item-detail-img" />
      </div>
      <div className="item-detail-info">
        <h2>{name}</h2>
        <p>Precio: $ {price}</p>
        <p>Descripcion: {description}</p>
        <p>Stock disponible: {stock}</p>
        <div>
          {cant > 0 ? (
            <>
              <Link to={"/cart"}>
                <button className="boton">Ir al Carrito</button>{" "}
              </Link>
              <Link to={"/"}>
                <button className="boton">Seguir comprando</button>{" "}
              </Link>
            </>
          ) : (
            <ItemCount
              stock={stock}
              initial={1}
              onAdd={agregar}
              sumar={sumar}
              restar={restar}
              count={count}
            />
          )}
        </div>
      </div>
    </div>
  );
}
