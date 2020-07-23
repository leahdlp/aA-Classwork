// function uniq(arr) {
//     let uniqStuff = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (!uniqStuff.includes(arr[i])) {
//     //         uniqStuff.push(arr[i]);
//     //     }
//     // }
//     arr.forEach((n) => { 
//         if (!uniqStuff.includes(n)) {
//             uniqStuff.push(n);
//         }
//      })
//     return uniqStuff;
// };

// console.log(uniq([1, 2, 2, 3, 3, 3])); //=> [1,2,3])

// // adding a function to the User prototype
// User.prototype.sayHello = function () {           // no semi colon here
//     console.log(`${this.username} says hello :O`);  // yes semi colon here
// };


//monkey-patched 
Array.prototype.uniq = function () {
    let uniqStuff = [];
    this.forEach((n) => {
        if (!uniqStuff.includes(n)) {
            uniqStuff.push(n);
        }
    })
    return uniqStuff;    
};

// console.log([1, 2, 2, 2, 3, 4].uniq());

Array.prototype.twoSum = function () {
    
}

// data.forEach(function(entry){ //
//     entry.childNodes.forEach(function(childrenEntry){
//       console.log(childrenEntry.appId);
//     })
// })

// arr.forEach(callback(currentValue[, index[, array]])[, thisArg])

// callback
//     Function to execute on each element. It accepts between one and three arguments:

//     currentValue
//         The current element being processed in the array.
//     index Optional
//         The index currentValue in the array.
//     array Optional
//         The array forEach() was called upon.

// thisArg Optional
//     Value to use as this when executing callback.
//ES5
// function twoSum() {

// }


//ES6
// twoSum = () => {
//   return "Hello World!";
// } 

// someValues.forEach((element, index) => {
//     console.log(`Current index: ${index}`);
//     console.log(element);
// });


// let matrix = []
// objects.forEach((object) => {
//     numbers.forEach((number) => {
//         matrix.push({ ...object, number })
//     })
// })

Array.prototype.twoSum = function () {
  pairs = [];

    for (let i = 0; i < this.length - 1; i++) {  //[1, 2, 3]
        for (let j = 1; j <= this.length; j++) {
    //   this.forEach(num1, i) 
    //         let j = i + 1;
    //     this.forEach(num2, j) 
        
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    }

  return pairs;
}

// console.log([1, 2, -2, 3, -1].twoSum());

Array.prototype.transpose = function () {
    transposedArr = [];

    // for loop that iterates over each row
            // subarray 
    // for loop that iterates over each el
        // push the els into sub
        // the push the sub into transposedArr

    for (let i = 0; i < this.length; i++) { // i = 0/2
        sub = [];
        for(let j = 0; j < this.length; j++) {  // j = 0/2
            sub.push(this[j][i]);  // 
        }
        transposedArr.push(sub);
    }
    return transposedArr;
};

let arr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

// console.log(arr.transpose());

// arr[j][i] => [1][0] => a
// arr[j][i] => [1][0] => d

 

// // matrix arg
// [
//     [a, b, c],
//     [d, e, f],
//     [g, h, i]

// ]

// // expected output
// [
//     [a, d, g],
//     [b, e, h],
//     [c, f, i]

// ]

// save the forEach in a variable
// 

// anatomy of monkey patching
// class.prototype.methodName = function () {
    // variableName = this.forEach((el) => {

    // })
// }

//  ES6 syntax
// const squareMe2 = (num) => {
//     return num * num; // explicit
// };

// const squareMe = function (num) {
//     return num * num;
// };

Array.prototype.myEach = function (callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }

    return this;
};


Array.prototype.myMap = function (callback) {
    let arr = []
    
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]));
    }

    return arr;
};

([1,2,3].myMap(function(num) {
    console.log(num + 5);
}));
