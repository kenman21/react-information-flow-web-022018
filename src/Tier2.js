import React, { Component } from 'react'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  render() {
    // console.log(this.state.childColor);
    // console.log(this.props.onHoverTier3);
    // console.log(this.props.onHoverTier2);
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.props.changeColors} onMouseEnter={(e)=> {this.props.onHover(e.target.className)}} onMouseLeave={(e)=> {this.props.onHover(e.target.className)}} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 id={this.props.id} color={this.props.childColor} changeColors= {this.props.changeColors} onHover = {this.props.onHover} />
        <Tier3 id={this.props.id} color={this.props.childColor} changeColors= {this.props.changeColors} onHover = {this.props.onHover}/>
      </div>
    )
  }
}
