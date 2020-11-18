import toNumber from '../javascript-library/src/toNumber.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for toNumber', function(){
    let num = 5
    let numFloat = 5.0
    let numArray = [5]
    let str = '5'
    let str2 = ' 5 '
    let str3 = 'abc'

    it('num to number', function(){
        assert.isNumber(toNumber(num))
    })
    
    it('numFloat to number', function(){
        assert.isNumber(toNumber(numFloat))
    })
    
    it('array to number', function() {
        assert.isNumber(toNumber(numArray))
    })
    
    it('string to number', function(){
        assert.isNumber(toNumber(str))
    })

    it('string with whitespace to number', function(){
        assert.isNumber(toNumber(str2))
    })

    // string is not a valid number and should give NaN
    it('string to number', function(){
        assert.isNaN(toNumber(str3))
   })
});