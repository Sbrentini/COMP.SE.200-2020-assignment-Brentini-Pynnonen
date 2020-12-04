import map from '../src/map.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for map', function (){

    let priceArray = [ 12.00, 50, 99.99, 5.25, 1];
    const expectedPriceArray = [ 6, 25, 49.995, 2.625, 0.5 ]

    let testArray = [ 12.00, 50, 'test', 5.25, 1];
    const expectedTestArray = [ 6, 25, NaN, 2.625, 0.5 ]

    const discount = 0.50; //a 50% discount on all prices

    function getDiscount(price) {
        return price*discount;
    }

    it('Map function to count discount of a price array', function(){
        assert.deepEqual(map(priceArray, getDiscount), expectedPriceArray);
    })

    it('Map function to count discount of a price array which also includes a string', function(){
        assert.deepEqual(map(testArray, getDiscount), expectedTestArray); 
    })
    
});