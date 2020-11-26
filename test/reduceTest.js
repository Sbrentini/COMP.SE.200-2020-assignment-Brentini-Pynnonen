import reduce from '../src/reduce.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for reduce', function(){

    it('Test 1', function (){
        assert.equal(reduce([1, 2], (sum, n) => sum + n), 3)
    });
    
})