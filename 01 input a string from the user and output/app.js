document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    let returnText = document.getElementById('textField').value;
    if (returnText === ""){
        alert("Please enter the name");
    }else{
        document.getElementById('returnedText').innerHTML = returnText;
        document.getElementById('textField').value = "";
        console.log(returnText);
    }
})