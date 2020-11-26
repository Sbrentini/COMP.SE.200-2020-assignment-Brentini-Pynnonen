import toString from '../src/toString.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for toString', function (){

    let str = 'this is a string';
    let num = 5;
    let array = ['This', 'is', 'an', 'Array', 6, 2, 6.00];
    let empty = null;
    let symbol = Symbol('£')


    it('String to String', function(){
        assert.equal(toString(str), str);
    })

    it('Number to String', function(){
        assert.isString(toString(num));
    })

    it('Array to String', function(){
        assert.isString(toString(array));
    })

    // Used for handling null values 
    it('Null to empty string', function(){
        assert.isString(toString(empty));
    })

    it('Symbol to string', function(){
        assert.isString(toString(symbol));
    })



});