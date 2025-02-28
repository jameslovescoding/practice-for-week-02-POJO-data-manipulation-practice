/**************DO NOT MODIFY THIS LINE BELOW*****************/
const fruits = require('../fruit-data')

/* 01. `firstFruitObject()` - Return the first object in the fruits array

console.log(firstFruitObject(fruits));
// { genus: 'Malus', name: 'Apple', id: 6, family: 'Rosaceae', order:
// 'Rosales', nutritions: { carbohydrates: 11.4, protein: 0.3, fat: 0.4,
// calories: 52, sugar: 10.3 } }
*/

function firstFruitObject(fruits) {
    // Your code here
    return fruits[0];
}



/* 02. `lastFruitObject()` - Return the last object in the fruits array

console.log(lastFruitObject(fruits));
// { genus: 'Citrullus', name: 'Watermelon', id: 25, family: 'Cucurbitaceae',
// order: 'Cucurbitales', nutritions: { carbohydrates: 8, protein: 0.6, fat:
// 0.2, calories: 30, sugar: 6 } }
*/

function lastFruitObject(fruits) {
    // Your code here
    return fruits[fruits.length-1];
}


/* 03. `indexFruitObject()` - Return one object at the given index from the
fruits array. The function should have two parameters, the array and the
index of the item.

console.log(indexFruitObject(17, fruits));
// { genus: 'Mangifera', name: 'Mango', id: 27, family: 'Anacardiaceae',
// order: 'Sapindales', nutritions: { carbohydrates: 15, protein: 0.82, fat:
// 0.38, calories: 60, sugar: 13.7 } };
*/

function indexFruitObject(index, fruits) {
    // Your code here
    return fruits[index];
}


/* 04. `fruitNames()` - Return a list of all of the fruit names

console.log(fruitNames(fruits));
// [ 'Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cherry', 'Durian',
    'Fig', 'Gooseberry', 'Grapes', 'GreenApple', 'Guava', 'Kiwi', 'Lemon',
    'Lime', 'Lingonberry', 'Lychee', 'Mango', 'Melon', 'Orange', 'Papaya',
    'Passionfruit', 'Pear', 'Persimmon', 'Pineapple', 'Plum', 'Raspberry',
    'Strawberry', 'Tomato', 'Umbu', 'Watermelon' ];
*/

function fruitNames(fruits) {
    // Your code here
    return fruits.map(fruit => {
        let {name} = fruit;
        return name;
    });
}

/* 05. `getFruitKeys()` - Return a list of all of the keys for each fruit record.
NOTE: Call a function you previously wrote as a helper function.

// console.log(getFruitKeys(fruits));
// // [ 'genus', 'name', 'id', 'family', 'order', 'nutritions' ];
*/

function getFruitKeys(fruits) {
    // Your code here
    let firstFruit = firstFruitObject(fruits);
    let fruitKeys = Object.keys(firstFruit);
    return fruitKeys;
}


/* 06. `getNutritionsKeys()` - Return a list of all of the keys within each
"nutritions" object.
NOTE: Can you use a different approach than what you used in the previous
problem? Can you use a helper function?

console.log(getNutritionsKeys(fruits));
// [ 'carbohydrates', 'protein', 'fat', 'calories', 'sugar' ];
*/

function getNutritionsKeys(fruits) {
    // Your code here
    let firstFruit = firstFruitObject(fruits);
    let {nutritions: nutritionObj} = firstFruit;
    let nutritionKeys = Object.keys(nutritionObj);
    return nutritionKeys;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [firstFruitObject, lastFruitObject, indexFruitObject,
    fruitNames, getFruitKeys, getNutritionsKeys];