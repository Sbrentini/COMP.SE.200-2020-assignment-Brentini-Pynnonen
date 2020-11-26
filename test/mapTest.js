import map from '../src/map.js'
import pkg from 'chai'
const { assert } = pkg

describe('Unit test for map', function (){

    let priceArray = [ 12.00, 50, 99.99, 5.25, 1];
    let expectedPriceArray = [ 6, 25, 49.995, 2.625, 0.5 ]

    let testArray = [ 12.00, 50, 'test', 5.25, 1];

    let discount = 0.50; //a 50% discount on all prices

    function getDiscount(price) {
        return price*discount;
    }

    //console.log(map(priceArray, getDiscount));
    //console.log(map(testArray, getDiscount)); // should the function throw an error or is NaN accepted? 

    it('Map function to count discount of a price array', function(){
        assert.deepEqual(map(priceArray, getDiscount), expectedPriceArray)
    })

});