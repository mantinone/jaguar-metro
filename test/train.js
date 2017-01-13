const TrainClass = require('../src/TrainClass.js')
const chai = require('chai');
const expect = chai.expect;
const bookshelf = require('../database/connection.js')
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const myTrain = new TrainClass()

describe ('Making database calls on Train ', () =>{
  context('Fetching Trains ', () =>{
    it('Should fetch passenger by ID', () =>{
      expect(myTrain.getById(1)).to.eventually.eql({ id: 1, Capacity: 100, LastStation: 12, NumOnboard: 0 })
    })
  })
})
