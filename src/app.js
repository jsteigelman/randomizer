class RandomizerApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteItems = this.handleDeleteItems.bind(this)
    this.handleRandomItem = this.handleRandomItem.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.state = {
      options: props.options
    }
  }

  handleDeleteItems() {
    this.setState(() => {
      return {
        options: [],
      }
    })
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

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(item), // concat instead of push, because don't want to change original array
      }
    })
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
          handleDeleteItems={this.handleDeleteItems}
        />
        <AddItem handleAddItem={this.handleAddItem} />
      </div>
    )
  }
}

RandomizerApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Randomizer"
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handleRandomItem}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const ItemList = (props) => {
  return (
    <div>
      {props.options.map((option) => (
        <Item key={option} optionText={option} />
      ))}
      <button onClick={props.handleDeleteItems}>Remove All</button>
    </div>
  )
}

const Item = (props) => {
  return <div>{props.optionText}</div>
}

class AddItem extends React.Component {
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

    this.setState(() => {
      return {
        error: errorMessage,
      }
    })

    event.target.elements.option.value = ''
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

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<RandomizerApp />, document.getElementById('app'))
