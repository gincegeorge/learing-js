document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    const mark = parseInt(document.getElementById('mark').value);
    const retunValue = document.getElementById('returnedText');
    if (mark >= 50){
        retunValue.innerHTML = "Passed";
    }else{
        retunValue.innerHTML = "Failed";
    }
    console.log(mark);
})
document.getElementById('reset').addEventListener('click',function(){
    window.reload();
})