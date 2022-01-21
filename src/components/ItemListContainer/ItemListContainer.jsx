import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


export default function ItemListContainer(props){
    function onAdd(){
        console.log("Item agregado");
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let ItemListJson = [
    {
      id: "4836",
      titulo: "Barbie Dance Magic",
      year: "1990",
      precio: 1500,
      stock: 10,
      imagen: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_dancemagic-a1.jpg",
    },
    {
      id: "9725",
      titulo: "Barbie Lights & Lace",
      year: "1990",
      precio: 1500,
      stock: 10,
      imagen: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_BARBIE-LIGHTSLACE-1.jpg",
    },
  ];

  const [itemList, setItemList] = useState([]);

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemListJson);
    }, 2000);
  });

  useEffect(() => {
    obtenerProductos.then((res) => {
      setItemList(res);
    });
  }, []);

  return (
    <>
      <h3> {props.greeting} </h3>
      {/* <ItemCount  stock={10} initial={1} onAdd={onAdd} /> */}
      <ItemList itemList={itemList} />
    </>
  );
}


///////////////////////////////////////////////////////////



