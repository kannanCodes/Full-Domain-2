class Stack{
     constructor(){
          this.items = []
     }
     push(value){
          this.items.push(value);
     }
     pop(){
          if (this.items.length === 0) return 'Stack Underflow';
          return this.items.pop()
     }
     peek(){
          return this.items.length === 0 ? null : this.items[this.items.length-1]
     }
     isEmpty(){
          return this.items.length === 0
     }
     print(){
          console.log([...this.items].reverse().join(' '))
     }
}
const stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); 

console.log(stack.pop())
stack.print(); 
console.log(stack.peek())
console.log(stack.isEmpty())