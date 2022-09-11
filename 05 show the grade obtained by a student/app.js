document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    const mark = parseInt(document.getElementById('mark').value);
    const returnValue = document.getElementById('returnedText');
    if (mark > 100 || mark < 0){
        alert("Mark is invalid");
    }else {
        if (mark >= 90){
            returnValue.innerHTML= "A";
        }else if(mark >= 80){
            returnValue.innerHTML= "B";
        }else if(mark >= 70){
            returnValue.innerHTML= "C";
        }else if(mark >= 60){
            returnValue.innerHTML= "D";
        }else if(mark >= 50){
            returnValue.innerHTML= "E";
        }else {
            returnValue.innerHTML= "Failed";
        }
    }
})