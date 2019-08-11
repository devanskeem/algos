function binarySearch(arr, val){
    let l = 0;
    let r = arr.length - 1;
    while (l <= r){
        let m = Math.floor((r - l) / 2) + l
        console.log('l', l)
        console.log('m', m)
        console.log('r', r)
        console.log('---')
        if (arr[m] === val) return m;
        else if (val > arr[m]) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

let array = [1, 3, 16, 26, 27, 30, 38, 75, 1003, 1112]
console.log('1 -> ', binarySearch(array, 1))
console.log('38 -> ', binarySearch(array, 38))
console.log('75 -> ', binarySearch(array, 75))
console.log('15 -> ', binarySearch(array, 15))
console.log('1112 -> ', binarySearch(array, 1112))
console.log('done')