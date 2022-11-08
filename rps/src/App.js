import './App.css';
import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div id='game'>
        <div id='gradient'></div>
        <h1>ROCK PAPER SCISSORS</h1>
        <h2>3</h2>
        <div id="hands">
          <img src="images/paper.svg" alt="" />
          <img src="images/rock.svg" alt="" />
        </div>
        <div id="options">
          <img src="images/rock.svg" alt="" />
          <img src="images/paper.svg" alt="" />
          <img src="images/scissors.svg" alt="" />
        </div>
      </div>
    )
  }


}



export default App;
