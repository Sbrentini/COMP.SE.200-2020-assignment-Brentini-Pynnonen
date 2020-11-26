import isObjectLike from '../src/isObjectLike.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for isObjectLike', function(){
    let map = {}
    let array = [1, 2, 3]
    let str = 'asd'
    let num = 3

    it('Map is object-like', function(){
        assert.isTrue(isObjectLike(map))
    })

    it('Array is object-like', function(){
        assert.isTrue(isObjectLike(array))
    })

    it('str is object-like'), function(){
        assert.isTrue(isObjectLike(str))
    }

    it('null is not object-like', function() {
        assert.isFalse(isObjectLike(null))
    })

    it('undefined is not object-like', function() {
        assert.isFalse(isObjectLike(undefined))
    })

    it('num is not object-like', function() {
        assert.isFalse(isObjectLike(num))
    })

    it('Function is not object-like', function(){
        assert.isFalse(isObjectLike(Function))
    })

})