import React from "react"


function Details({hog}){
  const {specialty, weight, greased, "highest medal achieved":medal} = hog
  return(
    <div className="extra content">
      <div className="description">
        <p>Specialty: <strong>{specialty}</strong></p>
        <p>Weight: <strong>{weight}</strong></p>
        <p>Greased: <strong>{greased ? "Yes" : "No"}</strong></p>
        <p>Highest Medal Achieved: <strong>{medal}</strong></p>
      </div>
    </div>
  )
}

export default Details