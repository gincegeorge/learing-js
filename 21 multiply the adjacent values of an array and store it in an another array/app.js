let limit = parseInt(prompt("Enter the limit of the array"));
let i,array1 =[], array2 = [];

//get array
for(i=0;i<limit;i++){
    array1[i] = parseInt(prompt("Enter the values of the array"));
}

//multiply the adjacent values
for(i=0; i<limit-1; i++){
    array2[i]= array1[i]*array1[i+1];
}

//Print the array
document.write(array2);

