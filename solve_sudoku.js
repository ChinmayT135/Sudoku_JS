function isboardValid(boardArray){
    for(var i=0 ; i<boardArray.length ; i++){
        if(boardArray[i] != 0){
            var x = Math.floor(i/9);
            var y = i%9;
            var j = boardArray[i];
            var count = 0;
            for(var k=0 ; k<9 ; k++){
                if(boardArray[(9*x)+k] == j)
                    count++;
                if(boardArray[(9*k)+y] == j)
                    count++;
                if(boardArray[(9*(((Math.floor(x/3))*3)+(Math.floor(k/3))))+(((Math.floor(y/3))*3)+(k%3))] == j)
                    count++;
            }
            if(count>3)
                return false;
        }
    }
    return true;
}

function check(x,y,j,sudoku_array) {
    for(var k=0 ; k<9 ; k++){
        if(sudoku_array[(9*x)+k] == j)
            return false;
        if(sudoku_array[(9*k)+y] == j)
            return false;
        if(sudoku_array[(9*(((Math.floor(x/3))*3)+(Math.floor(k/3))))+(((Math.floor(y/3))*3)+(k%3))] == j)
            return false;
    }
    return true;
}

function solveSudoku(sudoku_array){
    console.log(sudoku_array);
    for(var i=0 ; i<81 ; i++){
        var x = Math.floor(i/9);
        var y = i%9;
        
        if(sudoku_array[i] == 0){
            for(var j=1 ; j<=9 ; j++){
                if(check(x,y,j,sudoku_array)){
                    sudoku_array[i]=j;
                    if(solveSudoku(sudoku_array))
                        return true;
                    else
                        sudoku_array[i]=0;
                }
            }
            return false;
        }
    }
    return true;
}
