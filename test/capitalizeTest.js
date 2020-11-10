import capitalize from '../javascript-library/src/capitalize.js'
import pkg from 'chai'
const { assert } = pkg

describe('Field test for capitalize', function (){

    let str1 = 'TEST';
    let str2 = 'ranDomISed CaPitaLiZAtion.'
    let str3 = 'test'

    it('All capitalized to first letter being capitalized', function(){
        assert.equal(capitalize(str1), 'Test');
    })

    it('Sentence with randomised capitalization', function(){
        assert.equal(capitalize(str2), 'Randomised capitalization.')
    })

    it('All lower case test', function(){
        assert.equal(capitalize(str3), 'Test');
    })

});