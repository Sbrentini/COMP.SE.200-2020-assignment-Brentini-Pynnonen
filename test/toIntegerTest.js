import toInteger from '../javascript-library/src/toInteger.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for toInteger', function(){
    let num = 5
    let float = 5.3
    let numStr = '5.3'
    let str = 'abc'

    it('Integer to integer', function(){
        assert.equal(toInteger(num), 5)
    })

    it('Float to integer', function(){
        assert.equal(toInteger(float), 5)
    })

    // string is not a valid number and should give NaN
    it('String to integer', function() {
        assert.isNaN(toInteger(str))
    })

    it('Number string to integer', function() {
        assert.equal(toInteger(numStr), 5)
    })

    it('null to integer', function() {
        assert.equal(toInteger(null), 0)
    })

    it('undefined to integer', function() {
        assert.isNaN(toInteger(undefined))
    })
})