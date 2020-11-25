import countBy from '../src/countBy.js'
import pkg from 'chai'
const { assert } = pkg


describe('Field test for counting occurances from a collection', function (){
    
    const products = [
        {'name': 'apple', 'cost': 1.00, 'type': 'fruit', 'available': true},
        {'name': 'banana', 'cost': 1.50, 'type': 'fruit', 'available': true},
        {'name': 'orange', 'cost': 2.00, 'type': 'fruit', 'available': true},
        {'name': 'cucubmer', 'cost': 2.50, 'type': 'vegetable', 'available': true},
        {'name': 'chicken', 'cost': 9.00, 'type': 'meat', 'available': false},
        {'name': 'pork', 'cost': 7.00, 'type': 'meat', 'available': true},
        {'name': 'spinach', 'cost': 4.00, 'type': 'vegetable', 'available': false},
        {'name': 'fish', 'cost': 12.00, 'type': 'seafood', 'available': false}
    ];

    const typeObject = { fruit: 3, vegetable: 2, meat: 2, seafood: 1 };
    const availableObject = { true: 5, false: 3 };

    it('Counting the number of types from an imaginery product object array', function(){
        assert.equal(countBy(products, value => value.type), typeObject);
    })

    it('Counting the number of available products from an imaginery product object array', function(){
        assert.equal(countBy(products, value => value.available), availableObject);
    })
})