import React from 'react'

const Action = (props) => {
    return (
      <div>
        <button onClick={props.handleRandomItem} disabled={!props.hasOptions}>
          What should I do?
        </button>
      </div>
    )
  }

export default Action