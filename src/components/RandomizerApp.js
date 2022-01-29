import React from 'react'
import AddItem from './AddItem'
import Action from './Action'
import ItemList from './ItemList'
import Header from './Header'
import ItemModal from './ItemModal'

export default class RandomizerApp extends React.Component {
  state = {
    options: [],
    selectedItem: undefined
  }

  closeModal = () => {
    this.setState(() => ({ selectedItem: undefined })) // parentheses implicitly return jsx (no need to use 'return') 
}
  
  handleDeleteItemList = () => {
    this.setState(() => ({ options: [] })) // parentheses implicitly return jsx (no need to use 'return') 
  }

  handleDeleteItem = (item) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== item),
    }))
  }

  handleRandomItem = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const randomOption = this.state.options[randomNum]
    this.setState(() => {
      return { selectedItem: randomOption }
    })
  }

  handleAddItem = (item) => {
    if (!item) {
      // no input provided
      return 'Please enter valid input (at least one character).'
    } else if (this.state.options.indexOf(item) > -1) {
      // duplicate value provided
      return 'Please enter a unique value (this is a duplicate entry).'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(item), // concat instead of push, because don't want to change original array
    }))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({
          options: options,
        }))
      }
    } catch (error) {
      // do nothing - leave options as empty array
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      console.log('saving data')
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('comp will unmount')
  }

  render() {
    const title = 'Randomizer'
    const subtitle = 'Unable to choose between options? Let Randomizer make the decision for you.'

    return (
      <div>
        <div className="topContainer"></div>
        <div className="leftContainer"></div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
          hasOptions={this.state.options.length > 1}
          handleDeleteItemList={this.handleDeleteItemList}
          handleRandomItem={this.handleRandomItem}
          />
          <div className="widget">
            <ItemList
            options={this.state.options}
            handleDeleteItemList={this.handleDeleteItemList}
            handleDeleteItem={this.handleDeleteItem}
            />
            <AddItem handleAddItem={this.handleAddItem} />
          </div>
        </div>
        <ItemModal 
          selectedItem={this.state.selectedItem}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

Header.defaultProps = {
  title: 'Randomizer',
}
