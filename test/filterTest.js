import filter from '../src/filter.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for filter', function(){

    let products = [
        {'name': 'tomato', 'available': true, 'type': 'vegetable', 'price': 1.50},
        {'name': 'cucumber', 'available': false, 'type': 'vegetable', 'price': 0.90},
        {'name': 'baguette', 'available': false, 'type': 'bread', 'price': 2.50},
        {'name': 'chicken', 'available': true, 'type': 'meat', 'price': 9.85}
    ]

    it('Filtering products that are available', function() {
        let filteredProductsAvailable = filter(products, ({ available }) => available)
        let productsAvailable = [
            {'name': 'tomato', 'available': true, 'type': 'vegetable', 'price': 1.50},
            {'name': 'chicken', 'available': true, 'type': 'meat', 'price': 9.85}
        ]

        assert.sameDeepMembers(filteredProductsAvailable, productsAvailable)
    })

    it('Filtering by type', function(){
        let filteredProductsType = filter(products, ({ type }) => type == 'vegetable')
        let vegetables = [
            {'name': 'tomato', 'available': true, 'type': 'vegetable', 'price': 1.50},
            {'name': 'cucumber', 'available': false, 'type': 'vegetable', 'price': 0.90}
        ]

        assert.sameDeepMembers(filteredProductsType, vegetables)
    })

    it('Filtering by price, products that are under 5€', function() {
        let filteredProductsPrice = filter(products, ({ price }) => price <= 5)
        let cheapProducts = [
            {'name': 'tomato', 'available': true, 'type': 'vegetable', 'price': 1.50},
            {'name': 'cucumber', 'available': false, 'type': 'vegetable', 'price': 0.90},
            {'name': 'baguette', 'available': false, 'type': 'bread', 'price': 2.50},
        ]

        assert.sameDeepMembers(filteredProductsPrice, cheapProducts)
    })
    
    it('Filtering by producer, producer not in array', function(){
        let filteredProductsProducer = filter(products, ({ producer }) => producer == 'Mäkinen')
        let emptyArray = [[]]

        assert.sameDeepMembers(filteredProductsProducer, emptyArray)
    })

})