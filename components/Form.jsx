import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }
  onChange = e => {
    this.setState({
      name: e.target.value,
    })
  }
  onClick = e => {
    this.props.onClick(this.state.name);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.onChange}/>
        <button onClick={this.onClick}>Add list</button>
      </div>
    )
  }
}
