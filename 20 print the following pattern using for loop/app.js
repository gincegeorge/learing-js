let limit = parseInt(prompt("Enter the limit"));

let i,j,k=1;

for(i=0; i<limit; i++){
    for(j=0; j<=i; j++){
        document.write(k);
        k++;
    }
    document.write("<br>");
}