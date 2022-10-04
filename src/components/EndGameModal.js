import React, { useEffect, useRef } from "react"
import EndGameModalcss from "../styles/EndGameModal.css"
import party from "party-js"

const EndGameModal = ({ revealModal, onClick }) => {
  const modalRef = useRef()

  useEffect(() => {
    if (revealModal) {
      modalRef.current.style.display = "block"
      const modalContent = modalRef.current.querySelector(".modal-content")
      party.confetti(modalRef.current)
      party.confetti(modalContent)
    } else {
      modalRef.current.style.display = "none"
    }
  }, [revealModal])

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        <h2>Congratulations! You win!</h2>
        <button onClick={onClick}>Play Again</button>
      </div>
    </div>
  )
}

export default EndGameModal
