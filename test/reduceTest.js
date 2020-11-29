import reduce from '../src/reduce.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for reduce', function(){

    const products = [
        {'name': 'apple', 'cost': 1.00, 'type': 'fruit', 'available': true},
        {'name': 'banana', 'cost': 1.50, 'type': 'fruit', 'available': true},
        {'name': 'orange', 'cost': 2.00, 'type': 'fruit', 'available': true},
    ];

    const numberArray = [1,2,6,7,15];

    it('Reducing the total sum from an array', function (){
        assert.equal(reduce(numberArray, (sum, number) => sum + number, 0), 31);
    });

    it('Reducing the total sum from an array of objects', function (){
        assert.equal(reduce(products, (sum, products) => sum + products.cost, 0), 4.5);
    });

})