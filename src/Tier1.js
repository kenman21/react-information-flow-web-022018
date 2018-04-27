import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const child = getReducedColor(initialColor)
    const grandchild = getReducedColor(child)
    this.state = {
      color: initialColor,
      childColor: child,
      grandchildColor1: grandchild,
      grandchildColor2: grandchild,
      hoveringtier1: false,
      hoveringtier2: false,
      hoveringtier3: false,
    }
  }

  onHover = (name) => {
    if (name === "tier1") {
    // console.log("hovertier1 called:");
        this.setState({
        hoveringtier1: !this.state.hoveringtier1,
      })
    } else if (name === "tier2"){
      this.setState({
        hoveringtier1: !this.state.hoveringtier1,
        hoveringtier2: !this.state.hoveringtier2
      })
    } else {
      this.setState({
        hoveringtier1: this.state.hoveringtier1,
        hoveringtier2: !this.state.hoveringtier2,
        hoveringtier3: !this.state.hoveringtier3
      })
    }
  }

  changeColors = (e) => {
    // console.log("change colors");
    let nextColor = getRandomColor()
    let nextColorReduced = getReducedColor(nextColor)
    let nextColorReducedAgain = getReducedColor(nextColorReduced)
    if (this.state.hoveringtier1) {
      this.setState({
        color: nextColor,
        childColor: nextColorReduced,
        grandChildColor1: nextColorReducedAgain,
        grandChildColor2: nextColorReducedAgain
      })
    } else if (this.state.hoveringtier2){
      // console.log("also here")
      this.setState({
        childColor: nextColor,
        grandChildColor1: nextColorReduced,
        grandChildColor2: nextColorReduced
      })
    } else {
      // console.log("here");
      let child = "grandChildColor" + e.target.id
      this.setState({
        [child]: nextColor
      })
    }
  }

  render() {
    // console.log(`hoveringtier1: ${this.state.hoveringtier1}`);
    // console.log(`hoveringtier2: ${this.state.hoveringtier2}`);
    // console.log(`hoveringtier3: ${this.state.hoveringtier3}`);
    // console.log(`tier1 color: ${this.state.color}`);
    // console.log(`tier2 color: ${this.state.childColor}`);
    // console.log(`tier3 color: ${this.state.grandchildColor}`);

    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onMouseEnter = {(e)=> {this.onHover(e.target.className)}} onMouseLeave = {(e)=> {this.onHover(e.target.className)}} onClick={this.changeColors} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 id="1"color={this.state.childColor} changeColors= {this.changeColors} onHover = {this.onHover} childColor={this.state.grandChildColor1} />
        <Tier2 id="2"color={this.state.childColor} changeColors= {this.changeColors} onHover = {this.onHover} childColor={this.state.grandChildColor2} />
      </div>
    )
  }
}
