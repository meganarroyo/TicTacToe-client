'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', gameEvents.onCreateGame)
  for (let i = 0; i < 9; i++) {
  $(`#cell-${i}`).on('click', () => gameEvents.makeMove(i))
  }
})
