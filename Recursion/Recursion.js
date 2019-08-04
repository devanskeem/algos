/*
    Fibonacci Sequence
*/
function fib(n){
    if (n < 2){
        return n;
    } else return fib(n - 1) + fib(n - 2)
}
console.log('fib 3', fib(3))
//-----------------------------------

/* 
    Factorial
*/
function fact(n){
    if (n === 1) return n;
    return n * fact(n-1)
}

console.log('factorial 5', fact(5))
//-----------------------------------

/*
Helper Method Recursion vs Pure Recursion
*/
function oddValues(arr){
    let result = []
    function helper(helperInput){
        if (helperInput.length === 0){
            return 
        }
        if (helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

function oddValuesPure(arr){
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) newArr.push(arr[0])
    newArr = newArr.concat(oddValuesPure(arr.slice(1)))
    return newArr
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log('oddValues(array)', oddValues(array))
console.log('oddValuesPure(array)', oddValuesPure(array))
//-----------------------------------