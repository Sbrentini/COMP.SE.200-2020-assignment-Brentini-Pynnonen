import add from '../src/add.js'
import isEmpty from '../src/isEmpty.js'
import drop from '../src/drop.js'
import reduce from '../src/reduce.js'
import pkg from 'chai'
const { assert } = pkg

/**
 * Test case: A shopping cart where products can be added and removed from. 
 * The shopping cart also sums the total value of the products. 
 * This integration test uses add.js, isEmpty.js, drop.js and reduce.js.
 */
describe('Integration test for shopping cart functionality', function (){
    
    // init
    var shoppingCart1 = {'productsInCart': [], 'totalSum': 0.0};
    var shoppingCart2 = {'productsInCart': [], 'totalSum': 0.0};
    const apple = {'name': 'apple', 'cost': 1.20, 'type': 'fruit', 'available': true}
    const chicken = {'name': 'chicken', 'cost': 9.85, 'type': 'meat', 'available': true}
    const somethingExpensive = {'name': 'expensive', 'cost': 999.99, 'type': undefined, 'available': true}

    
    it('Shopping cart is empty', function(){
        assert.isTrue(isEmpty(shoppingCart1.productsInCart));
    })

    it('Add product to shopping cart', function(){
        shoppingCart1.productsInCart.push(apple);
        shoppingCart1.totalSum = apple.cost;
    })

    it('Shopping cart is no longer empty', function(){
        assert.isFalse(isEmpty(shoppingCart1.productsInCart));
    })

    it('Now the shopping cart sum is 1.20', function(){
        assert.equal(shoppingCart1.totalSum, apple.cost);
    })

    it('Add a second product to shopping cart', function(){
        shoppingCart1.productsInCart.push(chicken);
        shoppingCart1.totalSum = add(shoppingCart1.totalSum, chicken.cost);
    })

    it('Now the shopping cart sum is 11.05', function(){
        let actualSum = chicken.cost + apple.cost; 
        assert.equal(shoppingCart1.totalSum, actualSum);
    })

    it('Add a third product to shopping cart', function(){
        shoppingCart1.productsInCart.push(somethingExpensive);
        shoppingCart1.totalSum = add(shoppingCart1.totalSum, somethingExpensive.cost);
    })

    it('Now the shopping cart sum is 1011.04', function(){
        let actualSum = somethingExpensive.cost + chicken.cost + apple.cost;
        assert.equal(shoppingCart1.totalSum, actualSum);
    })

    it('Remove all the products from the shopping cart', function(){
        shoppingCart1.productsInCart = drop(shoppingCart1.productsInCart, shoppingCart1.productsInCart.length);
        shoppingCart1.totalSum = 0.00;
        assert.isTrue(isEmpty(shoppingCart1.productsInCart));
        assert.equal(shoppingCart1.totalSum, 0.0);
    })

    it('Shopping cart with multiple same products', function(){
        shoppingCart2.productsInCart.push(apple);
        shoppingCart2.productsInCart.push(chicken);
        shoppingCart2.productsInCart.push(apple);
        shoppingCart2.productsInCart.push(apple);
        shoppingCart2.productsInCart.push(apple);
        shoppingCart2.productsInCart.push(chicken);
        let actualSum = 2*chicken.cost + 4*apple.cost;
        assert.lengthOf(shoppingCart2.productsInCart, 6);
        shoppingCart2.totalSum = reduce(shoppingCart2.productsInCart, (sum, products) => sum + products.cost, 0.0);
        assert.equal(shoppingCart2.totalSum, actualSum);
    })

})