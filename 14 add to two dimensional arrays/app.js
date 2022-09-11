let i,j;
let limit = prompt("Enter the limit");

//Define single dimentional arrays
let array1 = new Array(limit);
let array2 = new Array(limit);
let sum = new Array(limit);

//Define multidimentional arrays
for(i=0; i<limit; i++){
    array1[i] = new Array(limit);
    array2[i] = new Array(limit);
    sum[i] = new Array(limit);
}

//Get the values
for(i=0; i<limit; i++){
    for(j=0; j<limit; j++){
        array1[i][j] = prompt("Enter the elements array 1");
    }
}
for(i=0; i<limit; i++){
    for(j=0; j<limit; j++){
        array2[i][j] = prompt("Enter the elements array 2");
    }
}

//Addition
for(i=0; i<limit; i++){
    for(j=0; j<limit; j++){
        sum[i][j] = parseInt(array1[i][j] + array1[i][j]);
    }
}

//Display array
for(i=0; i<limit; i++){
    for(j=0; j<limit; j++){
        document.write(sum[i][j]+" ");
    }
    document.write("<br>");
}