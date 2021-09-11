function createCar(color,maxSpeed){
  return {
     color,
    maxSpeed,
    move(){
        console.log(`my car goes ${this.maxSpeed}`);
    }
    
};
}

let car1= createCar('red',500);
console.log(car1.maxSpeed);

let car2= createCar('blue',100);
console.log(car2.move());