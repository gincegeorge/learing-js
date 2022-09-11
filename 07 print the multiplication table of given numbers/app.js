document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    const num = parseInt(document.getElementById('num').value);
    const returnedText = document.getElementById('returnedText');
    var result = num;
    for(var i=1;i<=10;i++){
        result = result + "<p>" + i + "*" + num + "=" + num * i + "</p>";
    }
    returnedText.innerHTML = result; 
})