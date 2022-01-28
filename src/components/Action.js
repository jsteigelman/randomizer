import React from 'react'

// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces
const Action = (props) => (
  <div>
    <button onClick={props.handleRandomItem} disabled={!props.hasOptions}>
      What should I do?
    </button>
  </div>
)

export default Action
