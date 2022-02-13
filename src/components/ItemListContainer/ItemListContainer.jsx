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
      description: "1990",
      price: 1500,
      category: "Barbie",
      stock: 10,
      image: "https://barbieguide.sosugary.com/albums/userpics/10001/normal_dancemagic-a1.jpg",
    },
    {
      id: "9725",
      title: "Barbie Lights & Lace",
      description: "1990",
      price: 1500,
      category: "Barbie",
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
