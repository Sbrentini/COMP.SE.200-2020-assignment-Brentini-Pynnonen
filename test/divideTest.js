import divide from '../javascript-library/src/divide.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for divide', function(){

    it('Result integer', function (){
        assert.equal(divide(6, 2), 3)
    });

    it('Result float', function(){
        assert.equal(divide(6, 4), 1.5)
    })

    
})