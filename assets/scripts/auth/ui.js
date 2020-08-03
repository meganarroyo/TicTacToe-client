'use strict'

const store = require('../store')

$('#authenticated').hide()
$('#unauthenticated').show()

const signUpSuccess = function () {
  $('#message').text('Sign Up Successful!')
  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Error, please try again')
}

const signInSuccess = function (response) {
  $('#message').text('Signed In!')

  store.user = response.user

  $('form').trigger('reset')
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('#create-game').show()
  $('#index-game').show()
}
const signInFailure = function () {
  $('#message').text('Error, please try again!')
}

const signOutSuccess = function () {
  $('#message').text('See ya later!')
  $('#unauthenticated').show()
  $('#sign-up').show()
  $('#authenticated').hide()
  $('#game-started').hide()
  $('#index-game').hide()
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Error, could not sign out!')
}

const changePasswordSuccess = function () {
  $('#message').text('Password changed!')
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Error, password not changed!')
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
