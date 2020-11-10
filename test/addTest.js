import add from '../javascript-library/src/add.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for add', function(){

    it('Test 1', function (){
        assert.equal(add(5, 7), 12)
    });
    
})