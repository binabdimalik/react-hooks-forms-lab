import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddItem }) { 
  const [selectedCategory, setSelectedCategory] = useState("All");
 
  const [searchTerm, setSearchTerm] = useState(""); 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }


  const itemsToDisplay = items

    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
   
    .filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onAddItem} /> 
      

      <Filter 
        search={searchTerm} 
        onSearchChange={handleSearchChange} 
        onCategoryChange={handleCategoryChange} 
      />
      
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;