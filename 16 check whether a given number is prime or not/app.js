const num = prompt("Enter a number");
let i,flag=0;

for(i=2; i<=num/2;i++){
    if(num%i==0){
        flag = 1;
    }
}

if (flag==1){
    document.write("The number is not prime");
}else{
    document.write("The number is prime");
}