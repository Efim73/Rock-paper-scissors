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
      scoreClass: 'score',
      h1Text: '',
      divBackground: '',
      gameBackground: '',


    }
  }
  optionsButton(e, id){
    
    this.setState(function(state){
      let games = state.games;
      let firstScore = state.firstScore;
      let secondScore = state.secondScore;
      let gameBackground = state.gameBackground;
      if(games == 10){
        firstScore=0;
        secondScore=0;
      }
      return{

        gameBackground : gameBackground.replace('visibleBackground', ''),
        firstScore: firstScore,
        secondScore: secondScore,
        h1Text: '',
        counterClass: 'counterVisible',
        buttonClass: 'buttonBlocked',
        activeButton: id,
        handClass: '',
        result: '',
        scoreClass: 'score',
        counter:3,
      }
    })

    for(let i=0; i<4; i++){
      setTimeout(()=>{
        this.setState(function (state){
          return{
            counter: state.counter-1,
          }
        })
        if(i==3){

          this.setState(function(state){
            let result;

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


            return{
              result: result,
              counterClass: '',  
              buttonClass: '',
            }
            
          },
          // ?????????????? callBack ???????????????????? ?????????? ???????????????????? ???????????? ?????????????? ???????????? setState
          function(){
           this.setState(function(state){
            let result = state.result;
            let  firstScore=state.firstScore;
            let  secondScore = state.secondScore;
            let counterClass = state.counterClass;
            let h1Text = state.h1Text;
            let games = state.games;
            let gameBackground = state.gameBackground;

            if(result==='win'){
              firstScore = state.firstScore + 1;

            }
            else if(result==='losing'){
              secondScore = state.secondScore + 1;
            }
            if(games==0){

              if(firstScore>secondScore){
                gameBackground='winBackground visibleBackground' 
                h1Text='First player won'
              }
              else if(secondScore>firstScore){
                gameBackground='loseBackground visibleBackground'
                h1Text='Second player won'
              }
              else{
                h1Text='Draw'
              }
              counterClass='counterMessage';
              games = 10;

            }
            return{
              gameBackground : gameBackground,
              games : games,
              h1Text: h1Text,
              firstScore: firstScore,
              secondScore: secondScore,
              scoreClass: 'score scoreVisible',
              counterClass: counterClass,
              counter : '',
              
            }
            
           }) 
          })
        }
        else if(i==2){
          this.setState(function(state){
            return{
              bot : state.images[Math.floor(Math.random()*3)],  
              playerHand: state.images[id],
              handClass: 'handsVisible',
              games: state.games-1,
            }

          },function(){
            console.log(this.state.games);
          })
        }

      },1000+i*1000)
    }

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
      <div id='game' >
        <div  className={'bg '+this.state.gameBackground}> </div>
        <div id='gradient' className={gradientClass}></div>
        <h1 onClick={(e)=>e.target.className='purple'}>ROCK PAPER SCISSORS</h1>
        <h2 className={this.state.counterClass}>{this.state.counter + this.state.h1Text}</h2>
        <div id="hands">
          <img className={this.state.handClass} src={"images/"+this.state.playerHand+'.svg'} alt="" />
          <img className={this.state.handClass} src={"images/"+this.state.bot+'.svg'} alt="" />
        </div>
        <div className={this.state.scoreClass}>
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


