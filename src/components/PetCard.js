import React, { useEffect, useRef, useState } from "react"
import PetCardcss from "../styles/PetCard.css"

const PetCard = ({ image, isFlipped, onClick }) => {
  // const [isFlipped, setIsFlipped] = useState(false)
  const containerRef = useRef()

  useEffect(() => {
    if (isFlipped) {
      const inner = containerRef.current.querySelector(".pet-card-inner")
      inner.style.transform = "rotateY(180deg)"
    } else {
      const inner = containerRef.current.querySelector(".pet-card-inner")
      inner.style.transform = "unset"
    }
  }, [isFlipped])

  return (
    <div
      onClick={onClick}
      ref={containerRef}
      className="pet-card"
    >
      <div className="pet-card-inner">
        <div className="pet-card-front"></div>
        <div className="pet-card-back">
          <img className="pet-card-image" src={image} alt="A Pet Card"></img>
        </div>
      </div>
    </div>
  )
}

export default PetCard
