function bubbleSort(array){
    for (let i = array.length - 1; i >= 0; i--){
        let swap = false;
        console.log('array', array)
        for (let j = 0; j < i; j++){
            if(array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                swap = true;
            }
        }
        if (!swap) return array
    }
}

console.log(bubbleSort([3,1,234,234523,23452,233,45,6763,45,89,576]))