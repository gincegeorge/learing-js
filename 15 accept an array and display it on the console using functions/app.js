let i, array =[];

function getArray(){
    const limit = prompt("Enter the limit");
    for (i=0;i<limit; i++){
        array[i] = prompt("Enter the values");
    }
}

displayArray = () =>{
    document.write(array);
}

main = () =>{
    getArray();
    displayArray();
}

main();