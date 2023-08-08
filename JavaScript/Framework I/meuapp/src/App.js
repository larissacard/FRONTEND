import React, { Component, useState } from "react";

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     nome: "Larissa",
  //     contador: 0
  //   }

  //   this.aumentar = this.aumentar.bind(this)
  //   this.diminuir = this.diminuir.bind(this)
  // }
  // aumentar(){
  //   let state = this.state;
  //   state.contador += 1;
  //   this.setState(state)
  // }

  // diminuir(){
  //   let state = this.state;
  //   state.contador -= 1;
  //   this.setState(state)
  // }


  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    }
  };

  componentDidMount(){
    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()  })
    }, 1000)
  }




  render() {
    return (
      <div>
        {/* <h1>Contador</h1>
        <h3>
          <button onClick={this.aumentar}>+</button> 
          {this.state.contador} 
          <button onClickCapture={this.diminuir}></button> 
        </h3> */}

        <h1>Hora</h1>
        <h3>{this.state.hora}</h3>
      </div>
    );
  }
}

export default App;