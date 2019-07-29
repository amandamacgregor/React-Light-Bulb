import React, { Component } from 'react';
import App from './App.js'
import off from './off.png'
import on from './on.png'
import onbulb from './onbulb.jpeg'
import offbulb from './offbulb.jpeg'

class Light extends Component {
    constructor(props){
        super(props)
            this.state = {
                light: "Off",
                lightColor: "white",
                lightSwitch: off,
                lightBulb: offbulb
            }
    }

changeLight = () => {
    //copy state
    // let newLight = this.state.light
    // let newColor = this.state.lightColor
    // let newLightSwitch = this.state.lightSwitch
    //make your changes
    if(this.state.lightSwitch === off && this.state.lightBulb === offbulb){
        this.setState({lightSwitch: on})
        this.setState({lightBulb: onbulb})
        // newLight = "On"
        // newColor = "yellow"
    } else {
        this.setState({lightSwitch: off})
        this.setState({lightBulb: offbulb})
        // newLight = "Off"
        // newColor = "white"
    }
    //set state
    // this.setState({light: newLight})
    // this.setState({lightColor: newColor})
}


  render() {
    //   const { light } = this.state
    //   const { color } = this.state
      const { lightSwitch } = this.state
      const { lightBulb } = this.state

    return (
        <div className="flex">
        <img src={lightBulb}/>
        <img src={lightSwitch} onClick = {this.changeLight}/>
        </div>

    );
  }
}

export default Light;
