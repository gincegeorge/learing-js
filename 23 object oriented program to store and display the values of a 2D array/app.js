let i,j;

class ArrClass{
    constructor(){
        const limit = parseInt(prompt("Enter the limit of the array"));
        var array = new Array(limit);
        
        function getArray() {
            for(i=0; i<limit; i++){
                array[i] = new Array(limit);
            }
            for(i=0; i<limit; i++){
                for(j=0; j<limit; j++){
                    array[i][j] = parseInt(prompt("Enter the values of the array"));
                }
            }
        }
    
        function displayArray(){
            for(i=0; i<limit; i++){
                for(j=0; j<limit; j++){
                    document.write(array[i][j]+" ");
                }
                document.write("<br>");
            }
        }
    
        function main(){
            getArray();
            displayArray();
        }
        main();
    }
    
}

let arrObj = new ArrClass();



