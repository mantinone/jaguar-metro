const bookshelf = require('../database/connection.js')
const commands = require('./commands.js')

class TrainClass {
  getById(id){
    return commands.getStation( {id} )
  }
}

module.exports = TrainClass
