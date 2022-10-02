import React from "react"
import PetCardcss from "../styles/PetCard.css"

const PetCard = ({ image }) => {
  return (
    <button className="pet-card button">
      <img className="pet-card-image" src={image} alt="A Pet Card"></img>
    </button>
  )
}

export default PetCard
