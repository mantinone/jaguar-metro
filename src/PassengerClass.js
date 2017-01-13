const { bookshelf, Passenger, Passengers, knex } = require('../database/connection.js')
const commands = require('./commands.js')

class PassengerClass {

  getById(id){
    return commands.getPassenger( {id} )
  }

  getByFirstName(FirstName){
    return commands.getPassenger( {FirstName} )
  }

}

module.exports = PassengerClass
