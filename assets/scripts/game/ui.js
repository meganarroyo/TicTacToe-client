'use strict'

// Require:
const store = require('../store')
$('#game-started').hide()

// Create Game:
const createGameSuccess = function (response) {
  $('#message').text('Game started. x is up first!')
  $('#create-game').hide()
  $('#game-started').show()

  store.gameState = {
    over: response.game.over,
    board: response.game.cells,
    id: response.game._id,
    currentPlayer: 'x'
  }
  updateBoard()
}

const createGameFailure = function () {
  $('#message').text('Game not started.')
}

const updateGameSuccess = function (response, winner) {
const currentPlayer = store.gameState.currentPlayer
const nextPlayer = currentPlayer === 'x' ? 'o' : 'x'

  if (response.game.over) {
    if (winner === 'draw') {
      $('#message').text('Tie Game!')
    }
    else {
      $('#message').text(`${currentPlayer} is the winner! Click "Start Game" to play again!`)
    }
    $('#create-game').show()
  }
  else {
    $('#message').text(`${currentPlayer} made their move. Your turn, ${nextPlayer}`)
  }

  store.gameState = {
    board: response.game.cells,
    over: response.game.over,
    id: response.game._id,
    currentPlayer: nextPlayer
  }
  updateBoard()
}

const updateBoard = function () {
  for (let i = 0; i < 9; i++) {
    $(`#cell-${i}`).text(store.gameState.board[i])
  }
}

const updateGameFailure = function (error) {
  $('#message').text(`Error: ${error}`)
}

const indexGameSuccess = function (response) {
  $('#index-game').text(`number of games played: ${response.games.length - 1}`)
}

const indexGameFailure = function () {
  $('#index-game').text('Couldnt count games played')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  indexGameSuccess,
  indexGameFailure
}
