import React from 'react'

// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces
const Action = (props) => (
  <div className="action-container">
    <button className="large-button" onClick={props.handleRandomItem} disabled={!props.hasOptions}>
      What should I do?
    </button>
    <button className="medium-button" onClick={props.handleDeleteItemList} disabled={!props.hasOptionsToDelete}>Delete All</button>

  </div>
)

export default Action
