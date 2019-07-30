/* 
    Write a function that takes in spreadsheet coordinates and converts them to integers
     A B C ..
    1
    2
    3
    ..

    Input: B12
    Output (2, 12)
*/

function coordinatesToIntegers(coordinates){
    let column = null;
    let row = '';
    coordinates = coordinates.toUpperCase();
    for (let i = 0; i < coordinates.length; i++){
        if (coordinates[i].charCodeAt(0) < 64 || !coordinates[i].charCodeAt(0) > 90){
            for(let j = i; j < coordinates.length; j++){
                row += coordinates[j]
            }
            break;
        }

        if (coordinates[i + 1].charCodeAt(0) < 58) {
            column += coordinates[i].charCodeAt(0) - 64
        }
        else column += (coordinates[i].charCodeAt(0) - 64) * 26;        
   }
    console.log('col: ', column)
    console.log('row: ', row)

}

coordinatesToIntegers('c12')
