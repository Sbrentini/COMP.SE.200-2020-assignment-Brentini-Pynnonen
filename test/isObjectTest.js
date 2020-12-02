import isObject from '../src/isObject.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for isObject', function(){
    let map = {}
    let array = [1, 2, 3]
    let str = new String('asd')
    let num = new Number(3)

    it('Map is an object', function(){
        assert.isTrue(isObject(map))
    })

    it('Array is an object', function(){
        assert.isTrue(isObject(array))
    })

    it('String is an object', function(){
        assert.isTrue(isObject(str))
    })

    it('null is not an object', function() {
        assert.isFalse(isObject(null))
    })

    it('undefined is not an object', function() {
        assert.isFalse(isObject(undefined))
    })

    it('Number is an object', function() {
        assert.isTrue(isObject(num))
    })

    it('Function is an object', function(){
        assert.isTrue(isObject(Function))
    })

})