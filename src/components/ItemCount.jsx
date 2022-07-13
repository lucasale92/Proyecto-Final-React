import React, { useState, useContext } from "react";
import { CartContext } from '../context/CartContext';

export default function ItemCount({ onAdd, sumar, restar, stock, count }) {
    const {cart, addToCart} = useContext(CartContext);

    return (
      <div className="box">
          <div className="btn">
          <button className="boton" onClick={sumar}>+</button>
              <button className="boton" onClick={restar}>-</button>
              <p className="item-count">{ count }</p>
              
          </div>
          <div>
              <button className="boton" onClick={() => {onAdd(count);}}>Agregar</button>
          </div>
      </div>
  )
}