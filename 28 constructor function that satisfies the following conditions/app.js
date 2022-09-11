function Car (name, mileage, max_speed){
    this.name = name; 
    this.mileage = mileage;
    this.max_speed = max_speed;

    this.car_details = () =>{
        document.write(this.name+" "+this.mileage+" "+this.max_speed);
    }
}

let firstCar = new Car("audi", 10, 500);
firstCar.car_details();