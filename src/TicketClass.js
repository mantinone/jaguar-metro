const bookshelf = require('../database/connection.js')
const commands = require('./commands.js')

class TicketClass {
  getById(id){
    return commands.getTicket( {id} )
  }
}

module.exports = TicketClass
