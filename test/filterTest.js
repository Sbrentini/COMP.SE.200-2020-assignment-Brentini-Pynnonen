import filter from '../src/filter.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for filter', function(){
    let products = [
        {'name': 'tomato', 'cart': true, 'type': 'vegetable'},
        {'name': 'cucumber', 'cart': false, 'type': 'vegetable'},
        {'name': 'baguette', 'cart': false, 'type': 'bread'},
        {'name': 'chicken', 'cart': true, 'type': 'meat'}
    ]

    let filteredProductsCart = filter(products, ({ cart }) => cart)
    let filteredProductsType = filter(products, ({ type }) => type == 'vegetable')
    let filteredProductsProducer = filter(products, ({ producer }) => producer == 'Mäkinen')

    let productsInCart = [
        {'name': 'tomato', 'cart': true, 'type': 'vegetable'},
        {'name': 'chicken', 'cart': true, 'type': 'meat'}
    ]

    let vegetables = [
        {'name': 'tomato', 'cart': true, 'type': 'vegetable'},
        {'name': 'cucumber', 'cart': false, 'type': 'vegetable'}
    ]

    let emptyArray = [[]]

    it('Filtering products that are in the shopping cart', function() {
        assert.sameDeepMembers(filteredProductsCart, productsInCart)
    })

    it('Filtering by type', function(){
        assert.sameDeepMembers(filteredProductsType, vegetables)
    })
    
    it('Filtering by producer, producer not in array', function(){
        assert.sameDeepMembers(filteredProductsProducer, emptyArray)
    })

})