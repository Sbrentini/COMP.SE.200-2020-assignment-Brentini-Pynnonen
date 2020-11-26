import castArray from '../src/castArray.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for cast array', function(){

    let str = 'test';
    let num = 11;
    let float = 2.4;
    let strSentence = 'This is a sentence, what happens now?';
    let array1 = ['one', 'two', 'three', '', 0]
    let empty1 = '';
    let empty2 = null;
    let object = {a:'test1', b:200, c:'test2'};

    it('Testing string cast to Array', function(){
        assert.isArray(castArray(str));
    })

    it('Testing number cast to Array', function(){
        assert.isArray(castArray(num));
    })

    it('Testing float cast to Array', function(){
        assert.isArray(castArray(float));
    })

    it('Testing string sentence cast to Array', function(){
        assert.isArray(castArray(strSentence));
    })

    it('Testing array cast to Array', function(){
        assert.equal(castArray(array1), array1);
    })

    it('Testing empty cast to Array', function(){
        assert.isArray(castArray(empty1));
    })

    it('Testing null cast to Array', function(){
        assert.isArray(castArray(empty2));
    })

    it('Testing object cast to Array', function(){
        assert.isArray(castArray(object));
    })
})