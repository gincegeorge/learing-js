let income = parseInt(prompt("Enter the annual income"));

if(income <= 250000){
    document.write("No Tax");
}else if(income > 250000 && income <= 500000){
    let tax = (income*5)/100;
    document.write(tax);
}else if(income > 500000 && income <= 1000000){
    tax = (income*20)/100;
    document.write(tax);
}else if(income > 1000000 && income <= 5000000){
    tax = (income*30)/100;
    document.write(tax);
}



