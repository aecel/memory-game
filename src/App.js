import React, { useEffect, useState } from "react"
import style from "./styles/style.css"
import PetGrid from "./components/PetGrid.js"
import EndGameModal from "./components/EndGameModal"
import getInitialGrid from "./getInitialGrid"

const App = () => {
  // const [bestScore, setBestScore] = useState(0)

  // Setting up the grid
  // Changeable height and width
  // As long as gridLength is even
  const height = 4
  const width = 4
  const gridLength = height * width

  // Importing all pet images
  const importAll = (r) => {
    return r.keys().map(r)
  }
  const petImages = importAll(
    require.context("./images/pets/", false, /\.(png|jpe?g|svg)$/)
  )

  const initialGrid = getInitialGrid(petImages, gridLength)

  const [grid, setGrid] = useState(initialGrid)
  const [currentScore, setCurrentScore] = useState(0)
  const [lastClickedCards, setLastCLickedCards] = useState([])
  const [flipCount, setFlipCount] = useState(0)
  const [revealModal, setRevealModal] = useState(false)

  const flipCard = (index) => {
    const nextGrid = [...grid]
    nextGrid[index].isFlipped = !nextGrid[index].isFlipped
    setGrid(nextGrid)
  }

  const clickCard = (index) => {
    if (!grid[index].isFlipped) {
      flipCard(index)
      setFlipCount(flipCount + 1)

      const nextClickedCards = [...lastClickedCards]
      nextClickedCards.push(grid[index])
      setLastCLickedCards(nextClickedCards)
    }
  }

  useEffect(() => {
    if (flipCount === 2) {
      setFlipCount(0)
      if (lastClickedCards[0].image === lastClickedCards[1].image) {
        setCurrentScore(currentScore + 1)
      } else {
        setTimeout(() => {
          flipCard(grid.indexOf(lastClickedCards[0]))
          flipCard(grid.indexOf(lastClickedCards[1]))
        }, 800)
      }
      setLastCLickedCards([])
    }

    console.log(currentScore)
  }, [flipCount])

  useEffect(() => {
    if (currentScore === gridLength / 2) {
      // Congratulations blah blah
      setRevealModal(true)
    }
  }, [currentScore])


  const refreshPage = () => {
    // window.location.reload()
    setRevealModal(false)
    setGrid(getInitialGrid(petImages, gridLength))
    setCurrentScore(0)

  }

  return (
    <div className="App">
      <header>
        <h4>Memory Game</h4>
      </header>
      <main>
        <EndGameModal revealModal={revealModal} onClick={refreshPage} />
        <PetGrid
          dimensions={[height, width]}
          grid={grid}
          clickCard={clickCard}
        />
      </main>
      <footer>Copyright © aecel 2022</footer>
    </div>
  )
}

export default App
