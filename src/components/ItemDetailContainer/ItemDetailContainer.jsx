import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { contexto } from "../../Context/CartContext";
import { getFirestore } from '../../Firebase/firebase'

export default function ItemDetailContainer(props) {
    const { addToCart } = useContext(contexto);
    const [item, setItem] = useState(null);
    const [added, setAdded] = useState(false);
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("Item");
        const item = itemCollection.doc(itemId);

        item.get().then((doc) => {
            if (!doc.exists) {
                console.log("No hay registros");
                return;
            }
            setItem({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log(error);
        })
    }, [itemId]);


    const onAdd = (cantidad) => {
        console.log(`Agregaste ${item.title}, cantidad: ${cantidad}.`);
        addToCart(item, cantidad);
        setAdded(true); 
    }


    return (
        <>
            <h3> {props.greeting} </h3>
            <ItemDetail item={item}  onAdd={onAdd} added={added} />
        </>
    );
}