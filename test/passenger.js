const PassengerClass = require('../src/PassengerClass.js')
const chai = require('chai');
const expect = chai.expect;
const bookshelf = require('../database/connection.js')
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const myPassenger = new PassengerClass()

describe ('Making database calls on Passenger ', () =>{
  context('Fetching Passengers ', () =>{
    it('Should fetch passenger by ID', () =>{
      expect(myPassenger.getById(1)).to.eventually.eql({ id: 1, FirstName: 'Phillip', LastName: 'Barnes' })
    })

    it('Should fetch passenger by First Name', () =>{
      expect(myPassenger.getByFirstName('Jacob')).to.eventually.eql({ id: 2, FirstName: 'Jacob', LastName: 'Marley' })
    })

  })
})
