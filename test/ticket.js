const TicketClass = require('../src/TicketClass.js')
const chai = require('chai');
const expect = chai.expect;
const bookshelf = require('../database/connection.js')
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const myTicket = new TicketClass()

describe ('Making database calls on Ticket ', () =>{
  context('Fetching Tickets ', () =>{
    it('Tickets do not exist yet!', () =>{
      expect(true).to.be.true
    })

  })
})
