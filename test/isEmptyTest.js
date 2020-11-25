import isEmpty from '../src/isEmpty.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for isEmpty', function(){
    let str = 'abc'
    let emptyStr = ''
    let array = [1, 2, 3]
    let emptyArray = []
    let map = {'a': 1, 'b': 2}
    let emptyMap = {}
    let number = 4

    it('String with values not Empty', function(){
        assert.isFalse(isEmpty(str))
    })

    it('Array with values not empty', function(){
        assert.isFalse(isEmpty(array))
    })

    it('Map with values is not empty', function() {
        assert.isFalse(isEmpty(map))
    })

    it('emptyStr is empty', function(){
        assert.isTrue(isEmpty(emptyStr))
    })

    it('emptyArray is empty', function(){
        assert.isTrue(isEmpty(emptyArray))
    })

    it('emptyMap is empty', function(){
        assert.isTrue(isEmpty(emptyMap))
    })

    it('undefined is empty', function(){
        assert.isTrue(isEmpty(undefined))
    })

    it('null is empty', function(){
        assert.isTrue(isEmpty(null))
    })

    it('number is empty', function() {
        assert.isTrue(isEmpty(number))
    })

})