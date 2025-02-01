import { useState } from "react";
import Title from "./Title";
import items from './data'
import Menu from "./Menu";
import Catogories from "./Catogories";
const allCategories=['all',...new Set(items.map((item)=>item.category))]
console.log(allCategories)
const App = () => {

  const [menuItems,setMenuItems]=useState(items);
  const[categories,setCategories]=useState(allCategories)
  const filterItems=(category)=>{
    if(category==='all'){
      setMenuItems(items)
      return
    }
    const newItems=items.filter((item)=>item.category===category)
    setMenuItems(newItems)

  }
  return (

    <main className="menu">

        <Title title="Our Menu"/>
        <Catogories categories={categories} filterItems={filterItems}/>
        <Menu menuItems={menuItems} />

    </main>
  )
};
export default App;
