import ceil from '../src/ceil.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for ceil', function(){

    it('Round up to integer', function (){
        assert.equal(ceil(3.004), 4)
    });

    it('Round up to two decimals', function(){
        assert.equal(ceil(3.004, 2), 3.01)
    })

})