import React from 'react'
import { useContext,} from 'react'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';



export default function Cart() {
    const {cart, emptyCart, getCartTotal, removeFromCart,} = useContext(CartContext);
    const carritoVacio = cart.length === 0;
    

  
    return (
      <>
      <h2 className="title">Mi Carrito</h2>
      <div className='cart' >
      <table className="table table-hover">
        <thead className="table table-success">
          <tr>
            <th className="header-image">imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cant</th>
            <th>Total</th>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {(carritoVacio &&
            <tr>
              <td colSpan="8"  className="emptyCart">
                <h3>No hay productos en el carrito</h3>
              </td>
            </tr>
          ) || 
          cart.map(item => (              
            <tr className="cart-item" key={item.id}>
              <td className="cart-item-img">
                <img src={item.img} alt={item.name} width={250} />
              </td>
              <td className="cart-item-title">
                {item.name}
              </td>
              <td className="cart-item-price">${item.price}</td>
              <td className="cart-item-qty">
                {item.count}
              </td>
              <td className="cart-item-total">
                ${item.price * item.count}
              </td>
              <td className="cart-item-remove">
                <Button onClick={() => removeFromCart(item.id)} variant="outline-danger" size="sm">X
      </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="cart-footer">
        {carritoVacio?
            <Link to="/"><button className="boton">Volver a la tienda</button></Link>
            :
            <>
            <h3>Total: ${getCartTotal()}</h3>
            <Link to="/checkout"><button className="boton">Continuar al Pago</button></Link>
            <button className="boton" onClick={emptyCart}>Vaciar Carrito</button>
            </>
        }
      </div>
      </div>      
            </>
  
    )
  }