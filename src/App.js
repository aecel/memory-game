import React, { useState } from "react"
import style from "./styles/style.css"
import PetGrid from "./components/PetGrid.js"
import getRandomInt from "./getRandomInt.js"
import uniqueId from "./uniqueId.js"
import shuffleArray from "./shuffleArray"

const App = () => {
  // const [currentScore, setCurrentScore] = useState(0)
  // const [bestScore, setBestScore] = useState(0)

  // Setting up the grid
  // gridLength should be even
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

  // Making an array with random integer pairs
  // Something like this [4,4,9,9,2,2...]
  const getPetIntArray = () => {
    const intArray = []

    for (let i = 0; i < gridLength / 2; i++) {
      const randomInt = getRandomInt(petImages.length)
      if (!intArray.includes(randomInt)) {
        intArray.push(randomInt)
        intArray.push(randomInt)
      } else {
        i--
      }
    }
    return intArray
  }

  // Shuffle the random pair array
  const intArray = shuffleArray(getPetIntArray())

  // Setting up the initial grid
  let initialGrid = []
  for (let i = 0; i < gridLength; i++) {
    initialGrid.push({
      id: uniqueId(),
      image: petImages[intArray[i]],
      isFlipped: true,
    })
  }

  const [grid, setGrid] = useState(initialGrid)

  console.log(grid)

  const flipCard = (index) => {
    const nextGrid = [...grid]
    nextGrid[index].isFlipped = !nextGrid[index].isFlipped
    setGrid(nextGrid)
  }

  return (
    <div className="App">
      <header>Memory Game</header>
      <main>
        <PetGrid grid={grid} flipCard={flipCard} />
      </main>
      <footer>Copyright © aecel 2022</footer>
    </div>
  )
}

export default App
