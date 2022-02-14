import React from "react";
import Item from "../Item/Item";
import  Loader from "../Loader/Loader";

export default function ItemList(props) {
  return (
    <>
      {props.itemList.length > 0 ? (
        <div>
          {props.itemList.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <div><Loader /></div>
      )}
    </>
  );
}
