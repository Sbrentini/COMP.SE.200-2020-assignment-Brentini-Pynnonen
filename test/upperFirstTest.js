import upperFirst from '../src/upperFirst.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for upperFirst', function (){

    let str1 = 'test';
    let str2 = 'let\'s test a sentence.';
    let str3 = 'TEST';

    let number = 12;
    let nullValue = null;
    let undefinedValue = undefined;


    it('simple one word test', function(){
        assert.equal(upperFirst(str1), 'Test');
    })

    it('A sentence test', function(){
        assert.equal(upperFirst(str2), 'Let\'s test a sentence.')
    })

    it('All capitalized test', function(){
        assert.equal(upperFirst(str3), str3);
    })

    // Again they don't throw an error, but two of them return an empty string? It depends if this is a wanted behaviour or not
    // I'd still think it's better to throw an error whenever a parameter is not a string
    it('Upperfirst number', function(){
        assert.throws(upperFirst(number));
    })

    it('Upperfirst null', function(){
        assert.isNull(upperFirst(nullValue));
    })

    it('Upperfirst undefined', function(){
        assert.isUndefined(upperFirst(undefinedValue));
    })
});