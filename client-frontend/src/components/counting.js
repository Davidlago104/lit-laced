import React from "react";

class Counting extends React.Component {
  state = {
    counter: 0,
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  countingCharacter = () => {
    this.setState({
      counter: this.state.counter + this.state.text.length,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <button className="button" onClick={this.countingCharacter}>
          Click me
        </button>
        <div className="likes">{this.state.counter}</div>
      </div>
    );
  }
}

export default Counting;
