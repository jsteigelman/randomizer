import React from 'react'
import ReactDOM from 'react-dom'

const template= React.createElement('p', {}, 'testing testing')
ReactDOM.render(template, document.getElementById('app'))