import React, { useState } from "react"
import style from "./styles/style.css"
import PetCard from "./components/PetCard.js"
import PetGrid from "./components/PetGrid.js"

const App = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <div className="App">
      <header>Memory Game</header>
      <main>
        <PetGrid />
      </main>
      <footer>Copyright © aecel 2022</footer>
    </div>
  )
}

export default App
