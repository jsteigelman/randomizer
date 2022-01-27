import React from 'react'

export default class AddItem extends React.Component {
    constructor(props) {
      super(props)
      this.handleAddItem = this.handleAddItem.bind(this)
      this.state = {
        error: undefined,
      }
    }
    handleAddItem = (event) => {
      event.preventDefault() //prevent full page refresh
      const option = event.target.elements.option.value.trim()
      const errorMessage = this.props.handleAddItem(option)
      this.setState(() => ({ error: errorMessage }))
  
      if (!errorMessage) {
        event.target.elements.option.value = ''
      }
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddItem}>
            <input type='text' name='option' autoComplete='off' />
            <button>Add Option</button>
          </form>
        </div>
      )
    }
  }
