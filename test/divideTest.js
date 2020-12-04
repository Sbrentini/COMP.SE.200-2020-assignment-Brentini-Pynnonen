import divide from '../src/divide.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for divide', function(){

    it('Divide integer by integer that results in integer', function (){
        assert.equal(divide(6, 2), 3)
    });

    it('Divide integer by integer that results in float', function(){
        assert.equal(divide(6, 4), 1.5)
    })

    
})