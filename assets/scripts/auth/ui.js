'use strict'

// Require:
const store = require('../store')

// Update the Screen Functions:
// Only show sign up and sign in upon loading page:
$('#authenticated').hide()
$('#unauthenticated').show()

// Sign Up:
const signUpSuccess = function () {
  $('#message').text('You are signed up! Now sign in to play!')
  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Couldnt sign up! Please try again.')
}

// Sign In:
const signInSuccess = function (response) {
  $('#message').text('You are signed in! Time to play! Click "Start Game"')

  store.user = response.user

  $('form').trigger('reset')

  // Remove sign up and sign in options, show the rest:
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('#create-game').show()
  $('#index-game').show()
}
const signInFailure = function () {
  $('#message').text('Please try again! Did you forget your e-mail or password?')
}

// Sign Out:
const signOutSuccess = function () {
  $('#message').text('You are signed out!')

  // Show only sign up and sign in again:
  $('#unauthenticated').show()
  $('#sign-up').show()
  $('#authenticated').hide()
  $('#game-started').hide()
  $('#index-game').hide()
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('You are still signed in!')
}

// Change Password:
const changePasswordSuccess = function () {
  $('#message').text('Password updated!')
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Password hasnt changed!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
