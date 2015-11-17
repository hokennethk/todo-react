import React from 'react';
import ReactDOM from 'react-dom';


const ENTER_KEY_CODE = 13;


class TodoInput extends React.Component {

  componentDidMount () {
    this.refs.todoInput.getDOMNode().focus();
  }

  constructor (props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  _save () {
    this.props.onSave(this.state.value)
    this.setState({
      value: ''
    })
    console.log(this.state);
  }

  _onKeyDown (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

  _onChange (event) {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
      <input
        ref="todoInput"
        type="text"
        className={this.props.className}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
        onBlur={this._save.bind(this)}
      />
    )
  }
}

TodoInput.propTypes = {
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onSave: React.PropTypes.func.isRequired
}

export default TodoInput