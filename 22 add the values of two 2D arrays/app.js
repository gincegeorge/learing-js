var limit = parseInt(prompt("Enter the limit of the array"));
var i,j;

var array1 = new Array(limit);
var array2 = new Array(limit);
var sum = new Array(limit);

for (i=0; i<limit; i++){
    array1[i] = new Array(limit);
    array2[i] = new Array(limit);
    sum[i] = new Array(limit);
}

getArray = () =>{
    for(i=0; i<limit; i++){
        for(j=0; j<limit; j++){
            array1[i][j] = parseInt(prompt("Enter the values of the array 1"));
        }
    }

    for(i=0; i<limit; i++){
        for(j=0; j<limit; j++){
            array2[i][j] = parseInt(prompt("Enter the values of the array 2"));
        }
    }
}

addArray = () => {
    for(i=0; i<limit; i++){
        for(j=0; j<limit; j++){
            sum[i][j] = array1[i][j] + array2[i][j];
        }
    }
}

displayArray = () =>{
    document.write("Sum of array 1 and array 2:");
    for(i=0; i<limit; i++){
        for(j=0; j<limit; j++){
            document.write(sum[i][j]+" ");
        }
        document.write("<br>");
    }
}

function main(){
    getArray();
    addArray();
    displayArray();
}

main();