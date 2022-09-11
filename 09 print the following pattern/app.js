document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();
    
    const limit = document.getElementById('limit').value;
    let i, j, string = "";

    for (i=1;i<=limit;i++){
        for(j=1;j<=i;j++){
            string += j;
        }
        string += "<br>";
        //if printed on the console
        //string += "<br>";
    }

    document.getElementById('returnedText').innerHTML = string;

    //console.log(string);

})


