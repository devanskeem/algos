function fib(n){
    console.log("-",n)
    if (n < 2){
        return n;
    } else return fib(n - 1) + fib(n - 2)
}

console.log('fib 3', fib(3))

function fact(n){
    if (n === 1) return n;
    return n * fact(n-1)
}

console.log('factorial 5', fact(5))