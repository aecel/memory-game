import React from "react"
import PetGridcss from "../styles/PetGrid.css"
import PetCard from "./PetCard.js"
import sloth from "../images/pets/sloth.svg"

const PetGrid = () => {
  return (
    <div className="pet-grid">
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
      <PetCard image={sloth} />
    </div>
  )
}

export default PetGrid