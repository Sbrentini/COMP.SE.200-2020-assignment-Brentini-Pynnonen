import toNumber from '../src/toNumber.js'
import ceil from '../src/ceil.js'
import pkg from 'chai'
const { assert } = pkg

/**
 * Test case: decimals
 * All prices should have two decimals.
 * This integration test uses toNumber.js and ceil.js.
 */
describe('Integration test for decimals', function(){

    let newProduct = {'name': 'chicken', 'type': 'meat', 'price': '9.849279456'}

    // convert price value in newProduct to a number
    let priceNumber = toNumber(newProduct.price)
    newProduct.price = priceNumber

    it('Price of new product is a number', function() {
        assert.isNumber(newProduct.price);
    })

    // round up price value to two decimals
    let priceCeil = ceil(newProduct.price, 2)
    newProduct.price = priceCeil

    it('Price has two decimals', function() {
        assert.equal(newProduct.price, 9.85)
    })

})