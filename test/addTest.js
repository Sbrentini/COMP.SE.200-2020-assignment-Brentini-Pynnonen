import add from '../src/add.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for add', function(){

    it('Add positive numbers', function (){
        assert.equal(add(5, 7), 12);
    });

    it('Add positive and negative numbers', function(){
        assert.equal(add(5, -5), 0);
    });

    it('Add string and number', function() {
        let str = 'abc';
        assert.equal(add(5, str), '5abc');
    })

    it('Add decimals numbers', function(){
        assert.equal(add(1.25, 2.75), 4);
    });
})