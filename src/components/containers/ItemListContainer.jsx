import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";

export default function ItemListContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "productos");

    if (id) {
      const q = query(productosCollection, where("category_id", "==", id));

      getDocs(q)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          setCargando(false);
        })
        .catch((error) => {
          setError(error);
          setCargando(false);
        });
    } else {
      getDocs(productosCollection)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          setCargando(false);
        })
        .catch((error) => {
          setError(error);
          setCargando(false);
        });
    }
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
    <div className="containerList">
      <ItemList productos={productos} />
    </div>
  );
}
