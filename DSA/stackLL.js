class Node{
     constructor(value){
          this.value = value;
          this.next = null;
     }
}
class Stack{
     constructor(){
          this.top = null;
     }
     push(value){
          let node = new Node(value);
          node.next = this.top;
          this.top = node;
     }
     pop(){
          if (!this.top) return 'stack underflow'
          return this.top.value;
     }
     peek(){
          return this.top ? this.top.value : null;
     }
     isEmpty(){
          return !this.top
     }
     print(){
          let node = this.top;
          while (node){
               console.log(node.value)
               node = node.next
          }
     }
}
const stack = new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)

stack.print()
console.log('peek:',stack.peek());

console.log('popped',stack.pop())

stack.print()