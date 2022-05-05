import React from "react"

function Porkers({hogs}){
  const porkersList = hogs.map(hog =>{
    return(
      <div class="ui card">
        <div class="image">
          <img src={hog.image}/>
        </div>
        <div class="content">
          <a class="header">{hog.name}</a>
        </div>
      </div>
    )
  })
  return (
    <div class="ui link cards">
    {porkersList}
    </div>
  )
}

export default Porkers