function sum(...arguments) {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

Function.prototype.myBind = function(_this){
    const that = this; 
    const bind_args = Array.from(arguments).slice(1);

    return function(){
        const call_args1 = Array.from(arguments);
        const args2 = bind_args.concat(call_args1);
        return that.apply(_this, args2);
    }
}
Function.prototype.myBind = function(_this, ...bind_args){
    const that = this;
    return function(...call_args){
        const args = bind_args.concat(call_args)
        return that.apply(_this, args)
    }
}
    
const curriedSum = function(num_args){
   const numbers =[];
   let sum = 0;
   
    const _curriedSum = function(num) {
        numbers.push(num);
        if (numbers.length === num_args) {
            for(i = 0; i < num_args; i ++){     
              sum += numbers[i];
            }
            return sum;
        } else {
            return _curriedSum;
        }
    }

 return _curriedSum;
}

//Array.prototype.whatever //=> [1,2,3,4].whatever instead of whatever([1,2,3,4])
Function.prototype.myCurry = function(...num_args){
    // let sum = 0;
    const _curriedSum = function (...nums) {
        if (nums.length === num_args) {
            for (i = 0; i < num_args; i++) {
                sum += nums[i];
            }
            return sum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum
}


Function.prototype.myCurry = function (numArgs) {
    let nums = [];
    const that = this;
 
    const _curriedSum = function (arg){
        nums.push(arg);
        if (nums.length === numArgs) {
            return that(...nums);
        } else {
            return _curriedSum;
        }
    };
    return _curriedSum;
};



// it("curries arguments and calls function after called with total num args", () => {
    const dubs = function (a, b, c) {
        return (a + b + c) * 2;
    };

    // const threeSum = function (x, y, z) {
    //     return x + y + z;
    // };

    const curriedSum = dubs.myCurry(3);
    console.log(curriedSum(1)(2)(3));
    // expect(result).toEqual(12);
// });

let csum = dubs.curriedSum(4); 
console.log(csum(5)(30)(20)(1)); // => 112
