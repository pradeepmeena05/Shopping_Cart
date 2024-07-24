import React from "react";
import list from "../list";
import Cards from "./Cards";
const Shop = ({handler}) => {
  return (
    <section>
      {list.map((item) => {
        return <Cards item={item} key={item.id} handler={handler}/>
      })}
    </section>
  )
}

export default Shop;
