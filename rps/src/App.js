import './App.css';
import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images:['rock.svg', 'paper.svg', 'scissors.svg'],
      counter: 3,
      
    }
  }
  optionsButton(e, id){
    if(this.state.counter==0){
      this.setState({
        counter:3
      })
    }
    for(let i=0; i<3; i++){
      setTimeout(()=>{
        // console.log(this.state.counter);
        this.setState(function (state){
          return{
    
            counter: state.counter-1,
          }
        })
      },1000+i*1000)
    }

    console.log(id);
  }
  render() {
    return (
      <div id='game'>
        <div id='gradient'></div>
        <h1>ROCK PAPER SCISSORS</h1>
        <h2>{this.state.counter}</h2>
        <div id="hands">
          <img src="images/paper.svg" alt="" />
          <img src="images/rock.svg" alt="" />
        </div>
        <div id="options">
          {

              this.state.images.map((image, id)=>(
                
               <img src={"images/"+image} alt="" onClick={(e) => this.optionsButton(e, id)} key={id}/>
              ))
          }

        </div>
      </div>
    )
  }


}



export default App;


// менять левую руку на выбранный символ и правую на рандом