import React from 'react'
import Item from './Item'


// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces
const ItemList = (props) => (
  <div>
  <div className="widget-header">
    <h3 className="widget-header__title">Options</h3>
    <button className="small-button" onClick={props.handleDeleteItemList}>Remove All</button>

  </div>

  {props.options.length === 0 && (
      <p className="widget__start-message">Enter your first item in the field below!</p>
    )}
    {props.options.map((option, index) => (
      <Item
        key={option}
        count={index + 1}
        itemText={option}
        handleDeleteItem={props.handleDeleteItem}
      />
    ))}
  </div>
)

export default ItemList
