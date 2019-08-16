function bubbleSort(array){
    for (let i = array.length - 1; i >= 0; i--){
        for (let j = 0; j < i; j++){
            if(array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
    }
    return array
}

console.log(bubbleSort([3,1,2,4,42,23,462,234,2345,2123,132,12,245,12,454,245,125,25121]))