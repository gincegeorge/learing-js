const limit = prompt("Enter the limit of the array");
let i, array = [], count = 0;

for (i=0; i<limit; i++){
    array[i] = prompt("Enter the values");
}

for(i=0; i<limit; i++){
    if(array[i]%2 == 0){
        count += 1;
    }
}

document.write(count);



