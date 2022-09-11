//Define
const limit = prompt("Enter the limit");
let array1 =[], array2 =[],i;

for(i=0; i<limit; i++){
    array1[i] = prompt("Enter the values of array 1");
}

for(i=0; i<limit; i++){
    array2[i] = prompt("Enter the values of array 2");
}

for (i=0; i<limit; i++){
    temp = array1[i];
    array1[i] = array2[i];
    array2[i] = temp; 
}

//Print arrays
document.write("Array 1: ");
for (i=0; i<limit; i++){
    document.write(array1[i]+ " ");
}

document.write("<br><br>"+"Array 2: ");
for (i=0; i<limit; i++){
    document.write(array2[i]+ " ");
}