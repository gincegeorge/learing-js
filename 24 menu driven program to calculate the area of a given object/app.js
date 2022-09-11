class Area{
    circle(r){
        let area = parseFloat(3.14*r*r);
        document.write(area);
    }
    square(a){
        let area = parseInt(a*a);
        document.write(area);
    }
    rectangle(l,b){
        let area = parseInt(l*b);
        document.write(area);
    }
    triangle(h,b){
        let area = parseInt((h*b)/2);
        document.write(area);
    }
}
class myClass extends Area{
    circle(){
        let r = parseInt(prompt("Enter the radius"));
        super.circle(r);
    }
    square(){
        let a = parseInt(prompt("Enter the side length"));
        super.square(a);
    }
    rectangle(){
        let l = parseInt(prompt("Enter the length of the rectangle"));
        let b = parseInt(prompt("Enter the breadth of the rectangle"));
        super.rectangle(l,b);
    }
    triangle(){
        let h = parseInt(prompt("Enter the height of the triangle"));
        let b = parseInt(prompt("Enter the breadth of the triangle"));
        super.triangle(h,b);
    }
}

let obj = new myClass();

var choice = parseInt(prompt("1:Circle\n2:Square\n3:Rectangle\n4:Triangle"));


switch(choice){
    case 1:
        obj.circle();
        break;
    case 2: 
        obj.square();
        break;   
    case 3:
        obj.rectangle();
        break;
    case 4:
        obj.triangle();
        break; 
}
