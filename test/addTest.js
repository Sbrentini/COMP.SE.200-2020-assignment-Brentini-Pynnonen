import add from '../javascript-library/src/add.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for add', function(){

    it('Add positive numbers', function (){
        assert.equal(add(5, 7), 12)
    });

    it('Add positive and negative numbers', function(){
        assert.equal(add(5, -5), 0)
    });
    
})