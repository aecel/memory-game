import React from "react"
import "../styles/PetGrid.css"
import PetCard from "./PetCard.js"

const PetGrid = ({ dimensions, grid, clickCard }) => {
  const [height, width] = dimensions

  return (
    <div
      className="pet-grid"
      style={{
        gridTemplateColumns: `repeat(${height}, 1fr)`,
        gridTemplateRows: `repeat(${width}, 1fr)`,
      }}
    >
      {grid.map((pet, index) => (
        <PetCard
          image={pet.image}
          isFlipped={pet.isFlipped}
          key={pet.id}
          onClick={() => {
            clickCard(index)
          }}
        />
      ))}
    </div>
  )
}

export default PetGrid
