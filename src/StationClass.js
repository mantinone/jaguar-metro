const { bookshelf, Passenger, Passengers, knex } = require('../database/connection.js')
const commands = require('./commands.js')

class StationClass {

  getById(id){
    return commands.getStation( {id} )
  }

  getByName(Name){
    return commands.getStation( {Name} )
  }
}

module.exports = StationClass
