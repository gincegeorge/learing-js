let my_string = "12345";

function reverseString(my_string){
    try{
        my_string = my_string.split('').reverse().join('');
        document.write(my_string+"<br>");
    } catch(err){
        document.write("Error : "+err.message+"<br>");
    }finally {
        document.write("Type of my_string is : "+typeof my_string+"<br>");
    }
}

reverseString(my_string);