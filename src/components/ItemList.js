import React from 'react'
import Item from './Item'


// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces
const ItemList = (props) => (
  <div>
    {props.options.length === 0 && (
      <p>Enter your first item in the field below!</p>
    )}
    {props.options.map((option) => (
      <Item
        key={option}
        itemText={option}
        handleDeleteItem={props.handleDeleteItem}
      />
    ))}
    <button onClick={props.handleDeleteItemList}>Remove All</button>
  </div>
)

export default ItemList
