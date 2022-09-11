document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    let p = document.getElementById('amount').value;
    let r = document.getElementById('interest').value;
    let n = document.getElementById('noOfYears').value;

    if ( p === "" || r === "" || n === ""){
        alert("Enter the values")
    }else{
        let si = parseFloat((p*r*n)/100);
        document.getElementById('returnedText').innerHTML = si; 
    }
})

document.getElementById('reset').addEventListener('click',function(){
    document.reload();
})