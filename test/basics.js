const chai = require('chai');
const expect = chai.expect;
const testDummy = require('../src/TestDummy.js')

describe( 'Are tests running', () => {

  context ('When trying to run a basic test file', () => {
      describe(' and trying to see if describe works', () => {
        it('Should tell us tests are running', () => {
          expect(true).to.equal(true)
        })
      })
      describe('And testing functions from other files', () => {
        it('Should say hello', () =>{
          expect(testDummy.testfunction()).to.equal('Hello Mocha')
        })
      })
  })


})
