import React from 'react'

const Item = (props) => {
    return (
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
  }

  export default Item