const store = require('../store.js')

const signUpSuccess = function (){
  $('#message').text('Sign up successful!')
}

const signUpFailure = function (){
  $('#message').text('Sign up failure')
}

const signInSuccess = function (){
  $('#message').text('Signed in!')
}

const signInFailure = function (){
  $('#message').text('Sign In Failed')
}

const changePasswordSuccess = function (){
  $('#message').text('Password Changed!')
}

const changePasswordFailure = function (){
  $('#message').text('Password Not Changed')
}

const signOutSuccess = function (){
  $('#message').text('Signed Out!')
}

const signOutFailure = function (){
  $('#message').text('Sign Out Failed')
}




module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
}
