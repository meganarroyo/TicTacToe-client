'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// Event Handler Functions:
const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    // indexGame under createGame - each game created will increase count by 1
    .then(api.indexGame)
    .then(ui.indexGameSuccess)
    .catch(ui.createGameFailure)
}

// Possible wins based on current player's move/index:
const checkWin = [
  [[1, 2], [3, 6], [4, 8]],
  [[0, 2], [4, 7]],
  [[0, 1], [5, 8], [4, 6]],
  [[4, 5], [0, 6]],
  [[3, 5], [1, 7], [0, 8], [2, 6]],
  [[3, 4], [2, 8]],
  [[7, 8], [0, 3], [2, 4]],
  [[6, 8], [1, 4]],
  [[6, 7], [2, 5], [0, 4]]
]

const gameOver = function (index) {
  // Make copy of the board so that the actual board doesn't change:
  const boardCopy = [...store.gameState.board]
  // Simulate current player's move:
  boardCopy[index] = store.gameState.currentPlayer

  for (let i = 0; i < checkWin[index].length; i++) {
    // Check if someone won:
    if (boardCopy[checkWin[index][i][0]] === store.gameState.currentPlayer && boardCopy[checkWin[index][i][1]] === store.gameState.currentPlayer) {
      return store.gameState.currentPlayer
    }
  }
  for (let i = 0; i < boardCopy.length; i++) {
    if (boardCopy[i] === '') {
      // game is not over yet. `undefined` is falsy.
      return undefined
    }
  }
  // If there is no winner and all the spots are taken, it's a draw:
  return 'draw'
}

const makeMove = function (index) {
  event.preventDefault()

  // Cannot add x or o to any spaces after the game is over:
  if (store.gameState.over === true) {
    ui.updateGameFailure('Game over! Lets play again!')
    // Cannot choose already occupied spots:
  }
  else if (store.gameState.board[index] !== '') {
    ui.updateGameFailure('Party foul! Do not click on boxes that are in play.')
  }
  else {
    const winner = gameOver(index)
    // `!!winner` will change strings (bc truthy) into Boolean:
    api.updateGame(index, store.gameState.currentPlayer, !!winner, store.gameState.id)
      .then((response) => ui.updateGameSuccess(response, winner))
      .catch(ui.updateGameFailure)
  }
}

module.exports = {
  onCreateGame,
  makeMove
}
