import React, { useState } from "react"
import PetGridcss from "../styles/PetGrid.css"
import PetCard from "./PetCard.js"
import sloth from "../images/pets/sloth.svg"

const PetGrid = ({grid, flipCard}) => {

  return (
    <div className="pet-grid">
      {grid.map((pet, index) => (
        <PetCard
          image={pet.image}
          isFlipped={pet.isFlipped}
          key={pet.id}
          onClick={() => {flipCard(index)}}
        />
      ))}
    </div>
  )
}

export default PetGrid
