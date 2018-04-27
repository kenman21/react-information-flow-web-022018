import React from 'react'


const Tier3 = (props) => {
  // console.log(props.color)

  return (
  <div className="tier3" id={props.id} onMouseEnter = {(e)=> {props.onHover(e.target.className)}} onMouseLeave = {(e)=> {props.onHover(e.target.className)}} onClick={(e) => {props.changeColors(e)}} style={{backgroundColor: props.color, color: props.color}}></div>
)
}

export default Tier3
