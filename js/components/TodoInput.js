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
    console.log('saving');
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
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
      <input
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