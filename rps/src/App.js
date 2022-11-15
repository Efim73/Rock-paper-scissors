import './App.css';
import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images:['rock.svg', 'paper.svg', 'scissors.svg'],
      counter: 3,
      bot: 0,
      playerHand: 0,
      counterClass: '',  
      buttonClass: '',
      activeButton: null,
    }
  }
  optionsButton(e, id){
    this.setState({
      counterClass: 'counterVisible',
      buttonClass: 'buttonBlocked',
      activeButton: id,
    })
    for(let i=0; i<4; i++){
      setTimeout(()=>{
        // console.log(this.state.counter);
        this.setState(function (state){
          return{
            bot : Math.floor(Math.random()*3),  
            counter: state.counter-1,
          }
        })
        if(i==3){
          this.setState({
            counter: 3,
            counterClass: '',  
            buttonClass: '',
          })
        }
      },1000+i*1000)
    }

    console.log(id);
  }
  render() {
    return (
      <div id='game'>
        <div id='gradient'></div>
        <h1>ROCK PAPER SCISSORS</h1>
        <h2 className={this.state.counterClass}>{this.state.counter}</h2>
        <div id="hands">
          <img src={"images/"+this.state.images[this.state.playerHand]} alt="" />
          <img src={"images/"+this.state.images[this.state.bot]} alt="" />
        </div>
        <div id="options">
          {

              this.state.images.map((image, id)=>(
                
               <img className={this.state.buttonClass + (this.state.activeButton==id? ' activeButton' : '')} src={"images/"+image} alt="" onClick={(e) => this.optionsButton(e, id)} key={id}/>
              ))
          }

        </div>
      </div>
    )
  }


}



export default App;


// менять левую руку на выбранный символ и правую на рандом Доделать