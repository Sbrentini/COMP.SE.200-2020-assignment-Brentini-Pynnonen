import upperFirst from '../src/upperFirst.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for upperFirst', function (){

    let str1 = 'test';
    let str2 = 'let\'s test a sentence.';
    let str3 = 'TEST';

    it('simple one word test', function(){
        assert.equal(upperFirst(str1), 'Test');
    })

    it('A sentence test', function(){
        assert.equal(upperFirst(str2), 'Let\'s test a sentence.')
    })

    it('All capitalized test', function(){
        assert.equal(upperFirst(str3), str3);
    })

});