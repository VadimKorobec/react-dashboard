import { Item } from "../Item/Item";


import items from "../../assets/items.json";

export const ListItems = () => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};
