import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getFirestore } from '../../Firebase/firebase'


export default function ItemListContainer(props){

  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();


  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const db = getFirestore();
      const itemCollection = db
        .collection("Item")
        .where("category", "==", `${categoryId}`);
      itemCollection
        .get()
        .then((querySnapshot) => {
          setItemList(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const db = getFirestore();
      const itemCollection = db.collection("Item");
      itemCollection
        .get()
        .then((querySnapshot) => {
          setItemList(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);
  return (
    <>
      <h3> {props.greeting} </h3> 
      <ItemList itemList={itemList} />
    </>
  );
}
