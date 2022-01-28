import React from 'react'

// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces
const Item = (props) => (
  <div>
    {props.itemText}
    <button
      onClick={(event) => {
        props.handleDeleteItem(props.itemText)
      }}
    >
      Delete
    </button>
  </div>
)

export default Item
