import React from 'react'

export default class AddItem extends React.Component {
  state = {
    error: undefined,
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
        {this.state.error && <p className="add-item-error">{this.state.error}</p>}
        <form className="add-item" onSubmit={this.handleAddItem}>
          <input className="add-item__input" type='text' name='option' autoComplete='off' />
          <button className="medium-button">Add Option</button>
        </form>
      </div>
    )
  }
}
