import toString from '../javascript-library/src/toString.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for toString', function (){


    let str = 'this is a string';
    let num = 5;
    let array = ['This', 'is', 'an', 'Array', 6, 2, 6.00];
    let empty = null;

    it('String to String', function(){
        // toString shouldn't change the str values, and instead return as it is. 
        assert.equal(toString(str), str);
    })

    it('Number to String', function(){
        assert.isString(toString(num));
    })

    it('Array to String', function(){
        assert.isString(toString(array));
    })

    // Used for handling null values 
    it('null to empty string', function(){
        assert.isString(toString(empty));
    })

});