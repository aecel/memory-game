import getRandomInt from "./getRandomInt.js"
import shuffleArray from "./shuffleArray.js"
import uniqueId from "./uniqueId.js"

const getInitialGrid = (petImages, gridLength) => {
  // Making an array with random integer pairs
  // with values below petImages.length
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
      isFlipped: false,
    })
  }

  return initialGrid
}

export default getInitialGrid
