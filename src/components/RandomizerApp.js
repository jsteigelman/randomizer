import React from 'react'
import AddItem from './AddItem'
import Action from './Action'
import ItemList from './ItemList'
import Header from './Header'

export default class RandomizerApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteItemList = this.handleDeleteItemList.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleRandomItem = this.handleRandomItem.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.state = {
      options: [],
    }
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

  handleDeleteItemList() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteItem(item) {
    console.log('hdp', item)
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== item),
    }))
  }

  handleRandomItem() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const randomOption = this.state.options[randomNum]
    alert(randomOption)
  }

  handleAddItem(item) {
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

  render() {
    const title = 'Randomizer'
    const subtitle = 'Subtitle here'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 1}
          handleRandomItem={this.handleRandomItem}
        />
        <ItemList
          options={this.state.options}
          handleDeleteItemList={this.handleDeleteItemList}
          handleDeleteItem={this.handleDeleteItem}
        />
        <AddItem handleAddItem={this.handleAddItem} />
      </div>
    )
  }
}

Header.defaultProps = {
  title: 'Randomizer',
}
