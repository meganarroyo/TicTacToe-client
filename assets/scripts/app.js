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
