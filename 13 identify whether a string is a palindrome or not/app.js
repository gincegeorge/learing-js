let i,j,flag=0,word;

word = prompt("Enter a string");
const limit = word.length;

//sort array
for(i=0,j=limit-1; i<limit/2; i++,j--){
    if(word[i]!=word[j]){
        flag = 1;
    }
}

//Print
if(flag==1){
    document.write("string is not a palindrome");
}else{
    document.write("string is a palindrome");
}