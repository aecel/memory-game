import React, { useEffect, useRef } from "react"
import EndGameModalcss from "../styles/EndGameModal.css"

const EndGameModal = ({ revealModal, onClick }) => {
  const modalRef = useRef()

  useEffect(() => {
    if (revealModal) {
      modalRef.current.style.display = "block"
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
