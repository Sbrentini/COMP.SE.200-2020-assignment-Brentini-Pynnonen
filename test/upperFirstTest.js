import upperFirst from '../src/upperFirst.js'
import pkg from 'chai'
const { assert, expect } = pkg

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

    it('Upperfirst number', function(){
        expect(() => upperFirst(number)).to.throw('string.slice is not a function');
    })

    it('Upperfirst null', function(){
        assert.isEmpty(upperFirst(nullValue));
    })

    it('Upperfirst undefined', function(){
        assert.isEmpty(upperFirst(undefinedValue));
    })
});