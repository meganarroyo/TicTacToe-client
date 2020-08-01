const config = require('../config')
const store = require('../store')


const createGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {}
  })
}

const updateGame = function (index, value, over, id) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index,
          value
        },
        over
      }
    }
  })
}

const indexGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'GET',
    data: {
      games: []
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  indexGame
}
