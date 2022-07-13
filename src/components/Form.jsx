import { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CartContext } from "../context/CartContext";
import {
  addDoc,
  Timestamp,
  collection,
  getFirestore,
} from "firebase/firestore";
import { Link } from "react-router-dom";
export default function Formulario({ setIdBuy }) {
  const [formSent, setFormSent] = useState(false);

  const { cart, getItemTotal, emptyCart } = useContext(CartContext);

  const db = getFirestore();
  const orderCollection = collection(db, "pedidos");

  const sleep = () => new Promise((r) => setTimeout(r));

  if (cart.length === 0) {
    return (
      <div className="checkout">
        <h1>Tu carro está vacío</h1>
        <Link to="/cart">
          <button className="boton">Volver al carro</button>
        </Link>
      </div>
    );
  }
  return (
    <>
      <Formik 
        initialValues={{
          name: "",
          email: "",
          celphone: "",
          message: "",
        }}
        validate={(val) => {
          let errors = {};

          if (!val.name) {
            errors.name = "por favor ingrese su nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.name)) {
            errors.name = "el nombre solo puede contener letras y espacios";
          }
          if (!val.email) {
            errors.email = "por favor ingrese su email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.email)
          ) {
            errors.email = "por favor ingrese un email valido";
          }

          if (!val.celphone) {
            errors.celphone = "por favor ingrese su numero de celular";
          } else if (!/^\d{0,20}$/.test(val.celphone)) {
            errors.celphone = "por favor ingrese su numero de celular valido";
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          await sleep();
          const order = {
            buyer: { ...values },
            date: new Date(Timestamp.now().seconds * 1000),
            total: getItemTotal(),
            items: [cart],
          };
          addDoc(orderCollection, order)
          .then(({ id }) => {
            setIdBuy(id);
          });
          resetForm();
          emptyCart();
          setFormSent(true);
          setTimeout(() => {
            setFormSent(false);
          }, 5000);
        }}
      >
         {setIdBuy ? (
        <div className="sentOrder">
          <h1>¡Gracias por tu pedido!</h1>
          <h2>Tu número de pedido es:</h2>
          <p className="orderId">{orderId}</p>
          <p>Nos pondremos en contacto para gestionar el pago y el envío!</p>
          <Link to="/">
            <button className="botonPrincipal" onClick={emptyCart}>
              Volver al inicio
            </button>
          </Link>
        </div>
      ) : (
        <div className="checkoutBody">
          <h1>¡Gracias por tu pedido!</h1>
          <h2>Completá con tu información</h2>
          <p>
            Llená tu información en el formulario para completar la compra. Nos
            pondremos en contacto para gestionar el pago y el envío!
          </p>
          
        {({ errors, isSubmitting }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="namex">* Nombre</label>
              <Field
                type="text"
                id="namex"
                name="name"
                placeholder="ingrese su nombre"
              />
              <ErrorMessage
                name="name"
                component={() => <div className="error">{errors.name}</div>}
              />
            </div>

            <div>
              <label htmlFor="emailx">* Email </label>
              <Field
                type="email"
                id="emailx"
                name="email"
                placeholder="correo@correo.com"
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
            </div>

            <div>
              <label htmlFor="cel">* Celular</label>
              <Field
                type="text"
                id="cel"
                name="celphone"
                placeholder="Ingrese su celular"
              />
              <ErrorMessage
                name="celphone"
                component={() => <div className="error">{errors.celphone}</div>}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
            <br />
            {!formSent ? (
              <p style={{ color: "red", fontSize: ".7rem" }}>
                * Este campo es obligatorio{" "}
              </p>
            ) : (
              <p style={{ color: "green" }} className="exito">
                Se envio con éxito
              </p>
            )}
            
          </Form>
          
          )}
        </div>
      </Formik>
      </>
  );
}