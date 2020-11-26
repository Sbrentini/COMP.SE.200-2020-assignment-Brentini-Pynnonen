import capitalize from '../src/capitalize.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for capitalize', function (){

    let str1 = 'TEST';
    let str2 = 'ranDomISed CaPitaLiZAtion.'
    let str3 = 'test'

    let number = 12;
    let nullValue = null;
    let undefinedValue = undefined;


    it('All capitalized to first letter being capitalized', function(){
        assert.equal(capitalize(str1), 'Test');
    })

    it('Sentence with randomised capitalization', function(){
        assert.equal(capitalize(str2), 'Randomised capitalization.')
    })

    it('All lower case test', function(){
        assert.equal(capitalize(str3), 'Test');
    })

    // Really the function should ensure that the parameter is a string and throw an error if it is not. 
    it('Capitalize number', function(){
        assert.isNotString(capitalize(number), 'A number capitalized sould not return a string');
    })

    it('Capitalize null', function(){
        assert.isNull(capitalize(nullValue), 'A null value should not be converted into a string and capitalized');
    })

    it('Capitalize undefined', function(){
        assert.isUndefined(capitalize(undefinedValue), 'An undefined value should not be converted into a string and capitalized ');
    })

});