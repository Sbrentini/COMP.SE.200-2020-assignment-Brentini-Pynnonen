import get from '../src/get.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for get', function() {

    const producer = {
        'name': 'Fresh Apples', 
        'products': { 
            'allProducts': ['normal apple', 'green apple', undefined] } };

    const expectedProduct = 'green apple';
    const expectedDefaultValue = 'default'

    it('Find a value with get - String parameter', function (){
        assert.equal(get(producer, 'products.allProducts[1]'), expectedProduct);
    });

    it('Find a value with get - Array parameter', function(){
        assert.equal(get(producer, ['products', 'allProducts', '1']), expectedProduct);
    });

    it('Find an undefined value with get and return defaultValue instead', function (){
        assert.equal(get(producer, 'products.allProducts[2]', 'default'), expectedDefaultValue);
    });
})