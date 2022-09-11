document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const returnedText = document.getElementById('returnedText');

    switch(day){
        case 1:
            returnedText.innerHTML = "Sunday";
            break;  
        case 2:
            returnedText.innerHTML = "Monday";
            break;
        case 3:
            returnedText.innerHTML = "Tuesday";
            break;
        case 4:
            returnedText.innerHTML = "Wednesday";
            break;
        case 5:
            returnedText.innerHTML = "Thursday";
            break;
        case 6:
            returnedText.innerHTML = "Friday";
            break;
        case 7:
            returnedText.innerHTML = "Saturday";
            break;          
    }
})