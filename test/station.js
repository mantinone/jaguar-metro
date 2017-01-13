const StationClass = require('../src/StationClass.js')
const chai = require('chai');
const expect = chai.expect;
const bookshelf = require('../database/connection.js')
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const myStation = new StationClass()

describe ('Making database calls on Station ', () =>{
  context('Fetching Stations ', () =>{
    it('Should fetch station by ID', () =>{
      expect(myStation.getById(1)).to.eventually.eql({ id: 1, Name: 'Downtown', Order: 1 })
    })

    it('Should fetch passenger by First Name', () =>{
      expect(myStation.getByName('Museum Isle')).to.eventually.eql({ id: 12, Name: 'Museum Isle', Order: 18 })
    })

  })
})
