document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    const limit = parseInt(document.getElementById('limit').value);
    let sum = 0, i;
    for(i=1;i<=limit;i++){
        if(i%2!=0){
            sum = sum + i;
        }
    }
    document.getElementById('returnedText').innerHTML = sum;
})