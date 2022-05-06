import React from "react"
import Porkers from "./Porker"

function ShowPorkers({hogs}){


  const porkers = hogs.map((hog)=> <Porkers hog={hog} key={hog.name}/>)

  return(
      <div className="ui cards">
        {porkers}
      </div>
  )
}

export default ShowPorkers