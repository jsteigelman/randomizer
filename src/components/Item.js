import React from 'react'

const handleTextColor = (count) => {
  if (count % 2 === 0) {
    return 'item__text item__text-dark'
  } else {
    return 'item__text item__text-light'
  }
}

// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces
const Item = (props) => (
  <div className="item">
  <p className={handleTextColor(props.count)}>{props.count}. {props.itemText}</p>
    <button
      className="small-button"
      onClick={(event) => {
        props.handleDeleteItem(props.itemText)
      }}
    >
      Delete
    </button>
  </div>
)

export default Item
