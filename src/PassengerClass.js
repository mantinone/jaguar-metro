const { bookshelf, Passenger, Passengers, knex } = require('../database/connection.js')
const commands = require('./commands.js')

class PassengerClass {

  getById(id){
    return commands.getPassenger( {id} ).then( result => result )
  }

  getByFirstName(FirstName){
    return commands.getPassenger( {FirstName} ).then( result => result )
  }

  getName(id){
    this.getById(id).then( result => {
      console.log(`${result.FirstName} ${result.LastName}`)
    })
  }

}

module.exports = PassengerClass
