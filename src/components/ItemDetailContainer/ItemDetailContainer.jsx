import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { contexto } from "../../Context/CartContext";

export default function ItemDetailContainer(props) {
    const { addToCart } = useContext(contexto);
    
    const [item, setItem] = useState(null);
    const [added, setAdded] = useState(false);

    let ItemListJson = [
        {
            id: "4836",
            title: "Barbie Dance Magic",
            description: "1990",
            price: 1500,
            stock: 10,
            image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_dancemagic-a1.jpg",
        },
        {
            id: "9725",
            title: "Barbie Lights & Lace",
            description: "1990",
            price: 1500,
            stock: 10,
            image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_BARBIE-LIGHTSLACE-1.jpg",
        },
        {
            id: "7081",
            title: "Ken Dance Magic",
            description: "1990",
            price: 2500,
            category: "Ken",
            stock: 10,
            image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_s-l1600~40.jpg",
        },  
        {
            id: "12899",
            title: "Barbie 35th Anniversary",
            description: "1994",
            price: 4800,
            category: "Barbie",
            stock: 5,
            image: "https://barbieguide.sosugary.com/albums/userpics/10001/35th_Anniversary_Barbie_Keepsake_Collection_Nostalgic_Gift__12899.jpg",
        },
        {
            id: "13515",
            title: "Ken Winter Sports",
            description: "1994",
            price: 1500,
            category: "Ken",
            stock: 8,
            image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_s-l1600_28129~37.jpg",
        },



    ];

    const obtenerProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemListJson);
        }, 2000);
    });

    const { itemId } = useParams();

    function getItem(itemId) {
        obtenerProducto.then(res => {
            if (itemId) {
                let response = res.find(item => item.id === itemId)
                setItem(response)
            }
        });
    }

    useEffect(() => {
        getItem(itemId);
    }, [itemId]);



    const onAdd = (cantidad) => {
        console.log(`Agregaste ${item.title}, cantidad: ${cantidad}.`);
        addToCart(item, cantidad);
        setAdded(true); 
    }

    return (
        <>
            <h3> {props.greeting} </h3>
            <ItemDetail item={item} onAdd={onAdd} added={added} />
        </>
    );
}