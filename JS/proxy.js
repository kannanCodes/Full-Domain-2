const user = {
     name: 'Kannan',
     age:23
}
const validator = {
     set(target,prop,value){
          if (value < 0){
               console.log('Age cannot be negative');
               return false;
          }
          target[prop] = value;
          return true;
     }
}

const person = new Proxy(user,validator);
person.age = -1