import React from "react";
import { Animated } from "react-animated-css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
  return (
    <Card className="card" style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title className="line">{producto.name}</Card.Title>

        <Card.Img variant="top" src={producto.img} className="imagen" />
        <Card.Text className="smallTxt">
          {producto.description}
          <br />
          Precio: ${producto.price}
          <br />
          Stock: {producto.stock}
        </Card.Text>
        <Animated animationIn="headShake" animationOut="tada">
          <Link to={"/producto/" + producto.id} className="boton">
            Ver detalle
          </Link>
        </Animated>
      </Card.Body>
    </Card>
  );
}
