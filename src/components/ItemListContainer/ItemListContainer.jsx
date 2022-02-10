import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ItemListContainer(props){
    function onAdd(){
        console.log("Item agregado");
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let ItemListJson = [
    {
      id: "4836",
      title: "Barbie Dance Magic",
      year: "1990",
      price: 1500,
      category: "Barbie",
      stock: 10,
      image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_dancemagic-a1.jpg",
    },
    {
      id: "9725",
      title: "Barbie Lights & Lace",
      year: "1990",
      price: 1500,
      category: "Barbie",
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

  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();



  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemListJson);
    }, 2000);
  });

  useEffect(() => {
    setItemList([]);
    obtenerProductos.then((res) => {
      if (categoryId) {
        let filtrado = res.filter((item) => {
          return item.category === categoryId
        })
        setItemList(filtrado);
        return
      }
      setItemList(res);
    });
  }, [categoryId]);


  return (
    <>
      <h3> {props.greeting} </h3> 
      <ItemList itemList={itemList} />
    </>
  );
}
