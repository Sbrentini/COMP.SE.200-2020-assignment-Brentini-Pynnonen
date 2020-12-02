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

     let products = [
         {'name': 'tomato', 'type': 'vegetable', 'description': 'thIs IS a prODUct deScrIptiOn. theSE tomaTOES are grown in Pirkanmaa.'},
         {'name': 'chicken', 'type': 'meat', 'description': 'thIs IS a prODUct deScrIptiOn. the CHIckeN is FrEE-raNge.'},
     ]

     let description = products[1].description
     let descriptionString = toString(description)

     it('Convert description to string', function() {
         assert.isString(toString(descriptionString))
     })

     let descriptionUpperFirst = upperFirst(descriptionString)
     it ('Capitalize first letter of sentences in the description', function() {
         assert.equal(descriptionUpperFirst, 'ThIs IS a prODUct deScrIptiOn. TheSE tomaTOES are grown in Pirkanmaa.')
     })

     let descriptionCapitalize = capitalize(descriptionUpperFirst)
     it('Each sentence starts with a capital letter and rest are lower case', function() {
         assert.equal(descriptionCapitalize, 'This is a product description. These tomatoes are grown in Pirkanmaa.')
     })


 })
