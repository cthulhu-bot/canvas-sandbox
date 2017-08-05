import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    componentDidMount() {
	this.updateCanvas()
    }

    componentWillReceiveProps() {
	this.updateCanvas()
    }
    
  render() {
    return (
      <div className="App">
	    <canvas id="canvas"
	ref={canvas => this.canvas = canvas} />
      </div>
    );
  }

    updateCanvas() {
	const context = this.canvas.getContext('2d')
	context.fillStyle = 'red'
	context.fillRect(10, 10, 55, 50)
    }
}

export default App;
