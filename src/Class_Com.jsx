import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initial state set karo
    this.state = {
      count: 0
    };
  }

  // Ek function jo state ko update kare
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
