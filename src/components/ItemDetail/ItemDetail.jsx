import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
return (
    <div className="producto-Card">
    <div className="imgContainer">
        <img src={product.image} alt="productImg" className="img" />
    </div>
    <div className="descriptionContainer">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h1>$ {product.price}</h1>
        <ItemCount stock={5} initial={1} />
    </div>
    </div>
);
};

export default ItemDetail;