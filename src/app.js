class RandomizerApp extends React.Component {
  render() {
    const title = 'Randomizer'
    const subtitle = 'Subtitle here'
    const options = ['option 1', 'option2', 'option3', 'option4']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
      {this.props.options.map((option) => <Option key={option} optionText={option} /> )}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Add option here</p>
      </div>
    )
  }
}

ReactDOM.render(<RandomizerApp />, document.getElementById('app'))
