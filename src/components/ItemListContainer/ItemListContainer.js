import React from "react"
import ItemCount from "./ItemCount";

export default function ItemListContainer(props){
    function onAdd(){
        console.log("Item agregado");
    }

    return(
        <>
        <p>{props.greeting}</p>
        <ItemCount  stock={10} initial={1} onAdd={onAdd} />
        </>
    );
}

