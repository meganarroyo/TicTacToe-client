'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .then(api.indexGame)
    .then(ui.indexGameSuccess)
    .catch(ui.createGameFailure)
}
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
const boardCopy = [...store.gameState.board]
  boardCopy[index] = store.gameState.currentPlayer

  for (let i = 0; i < checkWin[index].length; i++) {
    if (boardCopy[checkWin[index][i][0]] === store.gameState.currentPlayer && boardCopy[checkWin[index][i][1]] === store.gameState.currentPlayer) {
    return store.gameState.currentPlayer
    }
  }
  for (let i = 0; i < boardCopy.length; i++) {
    if (boardCopy[i] === '') {
    return undefined
    }
  }
return 'draw'
}

const makeMove = function (index) {
  event.preventDefault()


  if (store.gameState.over === true) {
    ui.updateGameFailure('Game over! Lets play again!')

  }
  else if (store.gameState.board[index] !== '') {
    ui.updateGameFailure('Party foul! Do not click on boxes that are in play.')
  }
  else {
  const winner = gameOver(index)
    api.updateGame(index, store.gameState.currentPlayer, !!winner, store.gameState.id)
      .then((response) => ui.updateGameSuccess(response, winner))
      .catch(ui.updateGameFailure)
  }
}

module.exports = {
  onCreateGame,
  makeMove
}
