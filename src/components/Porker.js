import React, { useState } from "react"
import Details from "./Details"

function Porkers({hog}){
  const {name,image} = hog
  let [show, setShow] = useState(false)

  function handleClick(){
    setShow(()=> show = !show)
  }

  return(
    <div className="ui card">
      <div className="image">
        <img src={image} alt="Pig"/>
      </div>
      <div className="content">
        <p className="header">{name}</p>
        {show ? <Details hog={hog}/> : null}
        <button className="ui secondary basic button" onClick={handleClick}>{show ? "Hide Details":"Show Details"}</button>
      </div>
    </div>
  )
}

export default Porkers