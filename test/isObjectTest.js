import isObject from '../src/isObject.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for isObject', function(){
    let map = {}
    let array = [1, 2, 3]
    let str = 'asd'
    let num = 3

    it('Map is an object', function(){
        assert.isTrue(isObject(map))
    })

    it('Array is an object', function(){
        assert.isTrue(isObject(array))
    })

    it('str is an object', function(){
        assert.isTrue(isObject(str))
    })

    it('null is not an object', function() {
        assert.isFalse(isObject(null))
    })

    it('undefined is not an object', function() {
        assert.isFalse(isObject(undefined))
    })

    it('num is not an object', function() {
        assert.isFalse(isObject(num))
    })

    it('Function is an object', function(){
        assert.isTrue(isObject(Function))
    })

})