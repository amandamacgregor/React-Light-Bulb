import React, { Component } from 'react';
import App from './App.js'

class User extends Component {
    constructor(props){
        super(props)
            this.state = {
                counter: 0
            }
    }

addOne = () => {
    let { counter } = this.state
    counter++
    // this.setState({counter: counter }) is the same as ....
    this.setState({ counter })
}


subOne = () => {
    let { counter } = this.state

    if(counter > 0){
        counter--
        
    }else {
        counter = 0
    }
    // this.setState({counter: counter }) is the same as ....
    this.setState({ counter })
}

  render() {
      const { counter } = this.state
      

    return (
        <div>
        <h1>Counter: {counter}</h1>
        <button onClick = {this.addOne}>Add One</button>
        <button onClick = {this.subOne}>Remove One</button>
       </div>

    );
  }
}

export default User;