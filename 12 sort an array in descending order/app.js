var limit = prompt("Enter the limit of the array");
var array = [];
let i,j,temp;

for (i=0; i<limit; i++){
    array[i] = prompt("Enter the values");
}

//sort array
for(i=0; i<limit; i++){
    for(j=i+1;j<limit;j++){
        if(array[i]<array[j]){
            temp = array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}

//Print array
for(i=0; i<limit; i++){
    document.write(array[i]+ " ");
}

