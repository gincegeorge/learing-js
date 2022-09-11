let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the second number"));
let operation = parseInt(prompt("1 for addition\n2 for substraction\n3 for division\n4 for multiplication"));

class BasicMath{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    addition(){
        document.write(this.num1+this.num2);
    }
    substraction(){
        document.write(this.num1-this.num2);
    }
    division(){
        document.write(this.num1/this.num2);
    }
    multiplication(){
       document.write(this.num1*this.num2);
    }
}

let task = new BasicMath(num1,num2);
switch (operation){
    case 1:
        task.addition();
        break;
    case 2:
        task.substraction();
        break;
    case 3:
        task.division();
        break;
    case 4:
        task.multiplication();
        break;
}


