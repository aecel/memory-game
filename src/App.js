import React, { useEffect, useState } from "react"
import "./styles/style.css"
import PetGrid from "./components/PetGrid.js"
import EndGameModal from "./components/EndGameModal.js"
import getInitialGrid from "./getInitialGrid.js"
import grayturtle from "./images/grayturtle.svg"

const App = () => {
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
  // const [bestScore, setBestScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [lastTwoClickedCards, setLastTwoClickedCards] = useState([])
  const [revealModal, setRevealModal] = useState(false)

  // const link = document.createElement("link")
  // link.type = "image/x-icon"
  // link.rel = "shortcut icon"
  // link.href = "./favicon.ico?"
  // document.getElementsByTagName("head")[0].appendChild(link)

  const flipCard = (index) => {
    const nextGrid = [...grid]
    nextGrid[index].isFlipped = !nextGrid[index].isFlipped
    setGrid(nextGrid)
  }

  const clickCard = (index) => {
    if (!grid[index].isFlipped) {
      flipCard(index)

      const nextClickedCards = [...lastTwoClickedCards]
      nextClickedCards.push(grid[index])
      setLastTwoClickedCards(nextClickedCards)
    }
  }

  useEffect(() => {
    if (lastTwoClickedCards.length === 2) {
      if (lastTwoClickedCards[0].image === lastTwoClickedCards[1].image) {
        setTimeout(() => {
          setCurrentScore(currentScore + 1)
        }, 600)
      } else {
        setTimeout(() => {
          flipCard(grid.indexOf(lastTwoClickedCards[0]))
          flipCard(grid.indexOf(lastTwoClickedCards[1]))
        }, 800)
      }
      setLastTwoClickedCards([])
    }
  }, [lastTwoClickedCards])

  useEffect(() => {
    if (currentScore === gridLength / 2) {
      // Congratulations! You win! ( Play again button )
      setRevealModal(true)
    }
  }, [currentScore])

  const resetGame = () => {
    // window.location.reload()
    setRevealModal(false)
    setGrid(getInitialGrid(petImages, gridLength))
    setCurrentScore(0)
  }

  

  return (
    <div className="App">
      <header>
        <img id="grayturtle" src={grayturtle} alt="A gray turtle" />
        <h4>Super Auto Pets Memory Game</h4>
      </header>
      <main>
        <EndGameModal revealModal={revealModal} onClick={resetGame} />
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
