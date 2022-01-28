import React from 'react'

// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
)

export default Header
