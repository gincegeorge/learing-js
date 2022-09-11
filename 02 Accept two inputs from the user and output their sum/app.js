document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    const numinput1 = document.getElementById('numInput1').value;
    const numinput2 = document.getElementById('numInput2').value;

    var x = parseInt(numinput1);
    var y = parseInt(numinput2);

    let sum = x + y;

    if (numinput1 === "" || numinput2 === ""){
        alert("Enter two numbers");
    }else{
        document.getElementById('returnedText').innerHTML = x + y;
        console.log(sum);
    }
})

document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('myForm').reset();
    document.getElementById('returnedText').innerHTML = "__";
})