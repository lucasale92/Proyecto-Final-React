import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "productos", id);
    getDoc(productRef)
      .then((snapshot) => {
        setProducto(snapshot.data());
        setCargando(false);
      })
      .catch((error) => {
        setError(error);
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return (
      <div className="loader">
        {" "}
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  return (
    <div className="container my-5 itemCard">
      {<ItemDetail detail={producto} id={id} />}
    </div>
  );
}
