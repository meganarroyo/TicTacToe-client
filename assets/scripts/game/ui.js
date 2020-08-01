const store = require('../store')

$('#game-started').hide()

// Create Game:
const createGameSuccess = function (response) {
  $('#message').text('Game started. x is up first!')

  // Hide Start Game button once game has started:
  $('#create-game').hide()
  // Show Tic Tac Toe board:
  $('#game-started').show()

  store.gameState = {
    board: response.game.cells,
    over: response.game.over,
    id: response.game._id,
    currentPlayer: 'x'
  }
  updateBoard()
}

const createGameFailure = function () {
  $('#message').text('Game not started.')
}

const updateGameSuccess = function (response, winner) {
  // Current player rotates between x and o:
  const currentPlayer = store.gameState.currentPlayer
  const nextPlayer = currentPlayer === 'x' ? 'o' : 'x'

  if (response.game.over) {
    if (winner === 'draw') {
      $('#message').text('Draw!')
    } else {
      $('#message').text(`${currentPlayer} won! Click "Start Game" to play again!`)
    }
    $('#create-game').show()
  } else {
    $('#message').text(`${currentPlayer} made a move. Your turn, ${nextPlayer}`)
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
    $(`.inside-box[data-id=${i}]`).text(store.gameState.board[i])
  }
}

const updateGameFailure = function (error) {
  $('#message').text(`Error: ${error}`)
}

const indexGameSuccess = function (response) {
  // `- 1` because each sign in creates a new game and therefore increases game count
  $('#index-game').text(`# of games played: ${response.games.length - 1}`)
}

const indexGameFailure = function () {
  $('#index-game').text('Could not count games played')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  indexGameSuccess,
  indexGameFailure
}
