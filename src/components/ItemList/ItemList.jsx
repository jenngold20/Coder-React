import React from "react";
import Item from "../Item/Item";

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
        <div>Loading</div>
      )}
    </>
  );
}
