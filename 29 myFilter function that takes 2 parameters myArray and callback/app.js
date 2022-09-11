
var size = parseInt(prompt("Enter the size of the array : "));
var array = [];
for(i = 0 ; i < size ; i++){
    array[i] = parseInt(prompt("Enter the elements"));
}
function oddEven(oddEvenNo){
    if(oddEvenNo % 2 == 0 ){
        return true;
    }
    else{
        return false;
    }
}

function myFilter(myArray , callback){
    var sum = 0;
    for(i = 0 ; i < myArray.length ; i++){
        sum += myArray[i];
    }
    document.write("Sum of the elements in array is : ", sum+ "<br>");
    document.write(callback(sum));
}



myFilter(array, oddEven);