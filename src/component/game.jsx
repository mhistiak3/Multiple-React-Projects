import React, { Component } from "react";
import Borde from "./bord";

function calculateWinner(squeres) {
  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  // const lines = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 6],
  //   [0, 4, 8],
  //   [2, 4, 6]
  // ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squeres[a] && squeres[a] === squeres[b] && squeres[a] === squeres[c]) {
      return squeres[a];
    }
  }
  return null;
}
class Game extends Component {
  state = {
    history: [{ squeres: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
  };
  handleClick = (i) => {
    console.log(i);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const currnet = history[history.length - 1];
    const squeres = currnet.squeres.slice();

    if (calculateWinner(squeres) || squeres[i]) {
      return;
    }
    squeres[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squeres }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };
  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squeres);
    const moves = history.map((_, move) => {
      const desc = move ? "Go to move #" + move : "Go to Start";
      return (
        <h5 key={move}>
          <li className="move" onClick={() => this.jumpTo(move)}>
            {desc}
          </li>
        </h5>
      );
    });
    let status = "";
    if (winner) {
      status = "Winner is " + winner;
    } else {
      status = "Next Player is " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <Borde onClick={this.handleClick} squeres={current.squeres} />
              <h3 className='mt-3'>{status}</h3>
            </div>
            <div className="col-md-6 mx-auto">
          
              <h4 className='my-3'>All Step History</h4>
              {moves}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Game;
