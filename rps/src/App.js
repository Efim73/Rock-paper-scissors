import './App.css';
import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images:['rock', 'paper', 'scissors'],
      counter: 3,
      bot: 'rock',
      playerHand: 'rock',
      counterClass: '',  
      buttonClass: '',
      activeButton: null,
      handClass: '',
      result: 'draw',
      games: 10,
      firstScore: 0,
      secondScore: 0,

    }
  }
  optionsButton(e, id){
    this.setState({
      counterClass: 'counterVisible',
      buttonClass: 'buttonBlocked',
      activeButton: id,
      handClass: '',
      result: '',
    })

    for(let i=0; i<4; i++){
      setTimeout(()=>{
        // console.log(this.state.counter);
        this.setState(function (state){
          return{
            counter: state.counter-1,
          }
        })
        if(i==3){

          this.setState(function(state){
            let result;
            let  firstScore=state.firstScore;
            let  secondScore = state.secondScore;
            let playerHand = state.playerHand;
            let bot = state.bot
            if(playerHand==='rock' && bot ==='paper'){
                result='losing'
            }
            else if(playerHand==='rock' && bot==='scissors'){
              result='win'
            }
            else if(playerHand==='paper' && bot==='rock'){
              result='win'
            }
            else if(playerHand==='paper' && bot==='scissors'){
              result='losing'
            }
            else if(playerHand==='scissors' && bot==='rock'){
              result='losing'
            }
            else if(playerHand==='scissors' && bot==='paper'){
              result='win'
            }
            else{
              result='draw'

            }
            if(result==='win'){
              firstScore = state.firstScore + 1;

            }
            else if(result==='losing'){
              secondScore = state.secondScore + 1;
            }
            console.log(firstScore);
            return{
              firstScore: firstScore,
              secondScore: secondScore,
              result: result,
              counter: 3,
              counterClass: '',  
              buttonClass: '',
            }
            
          })
        }
        else if(i==2){
          this.setState({
            bot : this.state.images[Math.floor(Math.random()*3)],  
            playerHand: this.state.images[id],
            handClass: 'handsVisible'
          })
        }

      },1000+i*1000)
    }

    // console.log(id);
  }
  render() {
    let result = this.state.result;
    let gradientClass;
    let wins = 0;
    console.log(result);
    if(result==='win'){
      console.log(wins);
      wins = wins+1;
      gradientClass='winGradient'
    }
    else if(result==='losing'){
      console.log(wins);
      wins = 0;
      gradientClass='losingGradient'
    }
    else{
      console.log(wins);
      wins = 0;
      gradientClass=''
    }



    return (
      <div id='game'>
        <div id='gradient' className={gradientClass}></div>
        <h1>ROCK PAPER SCISSORS</h1>
        <h2 className={this.state.counterClass}>{this.state.counter}</h2>
        <div id="hands">
          <img className={this.state.handClass} src={"images/"+this.state.playerHand+'.svg'} alt="" />
          <img className={this.state.handClass} src={"images/"+this.state.bot+'.svg'} alt="" />
        </div>
        <div className='score'>
          <h3 className='firstScore'>{this.state.firstScore}</h3>
          <h3 className='secondScore'>{this.state.secondScore}</h3>

        </div>
        <div id="options">
          {

              this.state.images.map((image, id)=>(
                
               <img className={this.state.buttonClass + (this.state.activeButton==id? ' activeButton' : '')} src={"images/"+image+'.svg'} alt="" onClick={(e) => this.optionsButton(e, id)} key={id}/>
              ))
          }

        </div>
      </div>
    )
  }


}



export default App;


// изменить ширину цифр. усли выбираешь руку то цифры пропадают, потом появляются.