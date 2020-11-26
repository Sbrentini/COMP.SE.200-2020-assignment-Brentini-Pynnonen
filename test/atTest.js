import at from '../src/at.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for at', function() {

    const product = {'name': 'apple', 'cost': 1.00, 'type': null, 'available': true};

    const producer = {
        'name': 'Fresh Apples', 
        'products': { 
            'allProducts': ['normal apple', 'green apple', 'red apple'] } };
    
    const expectedProduct = [ 'apple' ]
    const expectedProductList = [ 'normal apple', 'green apple', 'red apple' ]

    it('Find the name of a product with at', function (){
        assert.deepEqual(at(product, 'name'), expectedProduct);
    });

    it('Testing null value with at', function(){
        assert.isOk(at(product, 'name'));
    });

    it('Find list in a nested object with at', function() {
        assert.deepEqual(at(producer, ['products.allProducts[0]', 'products.allProducts[1]',
         'products.allProducts[2]']), expectedProductList);
    })

    // This really depends if it should be okay or not, since an unbound list should be thrown as an error
    it('Find list in a nested object with at - added an unbound list value', function() {
        assert.isOk(at(producer, ['products.allProducts[0]', 'products.allProducts[1]',
         'products.allProducts[2]', 'products.allProducts[3]']));
    })
})