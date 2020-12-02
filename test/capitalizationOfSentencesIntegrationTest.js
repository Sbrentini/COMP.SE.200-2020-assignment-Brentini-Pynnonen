import capitalize from '../src/capitalize.js'
import upperFirst from '../src/upperFirst.js'
import toString from '../src/toString.js'
import pkg from 'chai'
const { assert } = pkg

/**
 * Test case: capitalizing sentences.
 * This is used to capitalize product descriptions to make look similar.
 * This integration test uses capitalize.js, upperFirst.js, toString.js.
 */

 describe('Integration test for capitalizing sentences', function(){
     
    let newProduct = {'name': 'chicken', 'type': 'meat', 'description': 'thIs IS a prODUct deScrIptiOn. the CHIckeN is FrEE-raNge.'}

     // Product description is a string
     let descriptionString = toString(newProduct.description)
     newProduct.description = descriptionString

     it('Convert description to string', function() {
         assert.isString(newProduct.description)
     })

     // Product description has first letter upper case
     let descriptionUpperFirst = upperFirst(newProduct.description)
     newProduct.description = descriptionUpperFirst

     it ('Capitalize first letter of sentences in the description', function() {
         assert.equal(newProduct.description, 'ThIs IS a prODUct deScrIptiOn. The CHIckeN is FrEE-raNge.')
     })

     // Product description has first letter upper case and rest are lower case
     let descriptionCapitalize = capitalize(newProduct.description)
     newProduct.description = descriptionCapitalize
     
     it('Each sentence starts with a capital letter and rest are lower case', function() {
         assert.equal(newProduct.description, 'This is a product description. The chicken is free-range.')
     })


 })
