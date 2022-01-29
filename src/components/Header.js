import React from 'react'

// using parentheses implicitly returns jsx - so no need to use 'return' or curly braces

const Header = (props) => (
  <div className="header">
  <div className="container">
      <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
  </div>
  </div>
)

export default Header
