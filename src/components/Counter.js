import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  reset = () => {
    this.props.dispatch({
      type: "RESET"
    });
  };

  render() {
    return (
      <div>
        <h2>COUNTER</h2>
        <p>
          This counter was created using React and Redux.
          <br />
          Please take time to have some fun and increase, decrease and reset the
          counter.
        </p>
        <div className="btn-container">
          <button onClick={this.decrement} className="decrease">
            -
          </button>
          <span>{this.props.count}</span>
          <button onClick={this.increment} className="increase">
            +
          </button>
          <button onClick={this.reset} className="reset-btn">
            Reset
          </button>
        </div>
        {/*<div className="reset">
          <button onClick={this.reset} className="reset-btn">
            Reset
          </button>
    </div>*/}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);

// Count in React without Redux - no real state management
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     };
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   decrement() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.decrement.bind(this)}>-</button>
//         <h3>{this.state.count}</h3>
//         <button onClick={this.increment.bind(this)}>+</button>
//       </div>
//     );
//   }
// }

// export default Counter;
