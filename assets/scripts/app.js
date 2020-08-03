'use strict'

// Require:
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Game
  $('#create-game').on('submit', gameEvents.onCreateGame)
  for (let i = 0; i < 9; i++) {
    // Event listener for each cell/spot on game board
    $(`#cell-${i}`).on('click', () => gameEvents.makeMove(i))
  }
})
/*

// Require:
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Game
  $('#newGame').on('click', gameEvents.onCreateGame)
  // create a class instead or 9 statements event.target

$('.inside-box').on('click', gameEvents.makeMove)
})
*/
