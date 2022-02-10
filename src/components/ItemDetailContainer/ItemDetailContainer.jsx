import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer(props) {
    const [item, setItem] = useState(null);

    let ItemListJson = [
        {
            id: "4836",
            title: "Barbie Dance Magic",
            year: "1990",
            price: 1500,
            stock: 10,
            image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_dancemagic-a1.jpg",
        },
        {
            id: "9725",
            title: "Barbie Lights & Lace",
            year: "1990",
            price: 1500,
            stock: 10,
            image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_BARBIE-LIGHTSLACE-1.jpg",
        },

        {
            id: "7081",
            title: "Ken Dance Magic",
            year: "1990",
            price: 2500,
            category: "Ken",
            stock: 10,
            image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_s-l1600~40.jpg",
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

    return (
        <>
            <h3> {props.greeting} </h3>
            <ItemDetail item={item} />
        </>
    );
}