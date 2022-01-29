import React from 'react'
import Item from './Item'


// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces
const ItemList = (props) => (
  <div className="widget">
  <div className="widget-header">
{/*     
  <h3 className="widget-header__title">Your options are listed below.</h3>
  <button className="medium-button" onClick={props.handleDeleteItemList}>Remove All</button>
 */}
  </div>

  {props.options.length === 0 && (
      <p ><span className="widget__start-message">Enter your first item in the field below to get started!</span></p>
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
