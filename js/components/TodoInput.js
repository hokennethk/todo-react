import React from 'react';
import ReactDOM from 'react-dom';


const ENTER_KEY_CODE = 13;


class TodoInput extends React.Component {

  constructor (props) {
    super(props);

    console.log("in consturcto", this);
    this.state = {
      value: props.value || ''
    }
  }

  _save () {
    // TODO
    // 
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
        className={this.props.className}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
      />
    )
  }
}

TodoInput.propTypes = {
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string
}

export default TodoInput