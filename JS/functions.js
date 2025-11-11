

//<<-----[ Factory Function ]----->>

function createCar(brand,name){
     return{
          brand,
          name,
          drive(){
               console.log(`This is a ${brand}-${name}`)
          }
     }
}

const car1 = createCar('Porshe','911');
car1.drive()


//<<-----[ Constructor Function ]----->>

function CreateBike(brand,name){

     this.brand = brand;
     this.name = name;
     this.drive = function(){
          console.log(`I'm Riding a ${this.brand} ${this.name} bike`)
     }
}

const bike1 = new CreateBike('Yamaha','RX-135')
bike1.drive()


//<<------[ Generator Function ] ----->>

// eg:1
function* idGenerator(){
     let id = 1;
     while(true){
          yield id
          id++
     }
}
let result = idGenerator()
console.log(result.next().value)
console.log(result.next().value)

//eg:2 (first n even numbers)

function* genEven(n){
     let count = 0, i = 2;

     while(count < n){
          
          if (i % 2 === 0){
               yield i;
               count++

          }
          i++
     }
}

let output = genEven(3)
console.log(output.next().value)
console.log(output.next().value)
console.log(output.next().value)


//<<------ [ Function Currying ] ----->>

function add(a){
     return function(b){
          return function(c){
               return a+b+c
          }
     }
}

let sum = add(10)(20)(30)
console.log(sum)


//<<------ [ call,apply,bind ] ----->>

let car1 = {
     brand : 'Porshe',
     drive(model,speed){
          console.log(`This is ${this.brand}-${model} driving @ ${speed} m/s.`)
     }
}

let car2 = {
     brand : 'Ferrari'
}

car1.drive.call(car2,'Sports-Car',199) 
car1.drive.apply(car2,['Formula-Car',399])
let binded = car1.drive.bind(car2,'Special-Edition',299)
binded()