class Node{
     constructor(value){
          this.value = value;
          this.next = null;
     }
}
class Sll{
     constructor(){
          this.head = null;
     }
     insert(value){
          let newNode = new Node(value);
          if (!this.head){
               this.head = newNode;
               return;
          }
          let current = this.head;
          while (current){
               if (!current.next){
                    current.next = newNode;
                    return;
               }
               current = current.next;
          }
     }
     print(){
          let current = this.head;

          while (current){
               console.log(current.value);
               current = current.next;
          }
     }
     insertAtFront(value){
          let newNode = new Node(value);
          newNode.next = this.head;
          this.head = newNode;
          return;
     }
     insertAtPosition(pos,value){
          let newNode = new Node(value);
          if (pos === 0 || !this.head){
               newNode.next = this.head;
               this.head = newNode;
               return;
          }
          let current = this.head;
          let prev = null;
          let index = 0;

          while(current && index < pos){
               prev = current;
               current = current.next;
               index++
          }
          newNode.next = current;
          prev.next = newNode;
     }
     deleteByValue(target){
          if (this.head.value === target){
               this.head = this.head.next;
               return;
          }
          let current = this.head;
          let prev = null;
          while(current && current.value !== target){
              prev = current;
              current = current.next;
          }
          prev.next = current.next;
          
     }
     deleteAtPositition(pos){
          let current = this.head;
          let prev = null
          let index = 0;
          if (pos === 0){
               this.head = this.head.next;
          }
          while(current && index < pos){
               prev = current;
               current = current.next;
               index++;
          }
          prev.next = current.next

     }
     findMiddle(){
          let slow = this.head;
          let fast = this.head;

          while (fast && fast.next){
               slow = slow.next;
               fast = fast.next.next;
          }
          return slow?.value
     }
     deleteMiddle(){
          let slow = this.head;
          let fast = this.head;
          let prev = slow;

          while (fast && fast.next){
               prev = slow;
               slow = slow.next;
               fast = fast.next.next;
          }
          prev.next = slow.next;
     }
     findMax(){
          
          let current = this.head;
          let largest = current.value;
          while (current){
               if (current.value > largest) {
                    largest = current.value
               }
               current = current.next
          }
          return largest;
     }
     removeDuplicates(){
          let current = this.head;
          let prev = null;
          let seen = new Set();

          while (current){
               if (!seen.has(current.value)){
                    seen.add(current.value);
                    prev = current
               }else{
                    prev.next = current.next
               }
               current = current.next;
          }
     }
     reverseList(){
          let current = this.head;
          let prev = null;
          let next = null;

          while(current){
               next = current.next;
               current.next = prev;
               prev = current;
               current = next;

          }
          this.head = prev;
     }
     reverseRecursively(){
          this.head = this.reverse(this.head)
     }
     reverse(node){
          if (!node || !node.next){
               return node;
          }
          let newHead = this.reverse(node.next);
          node.next.next = node;
          node.next = null;

          return newHead;
     }
}
let sll = new Sll()
sll.insert(10)
sll.insert(20)
sll.insert(30)
sll.insertAtFront(5)
sll.insertAtPosition(1,15)
// sll.deleteByValue(20)
// sll.deleteAtPositition(2)
// sll.print()
// console.log('Find-Middle',sll.findMiddle())
// sll.deleteMiddle()
// sll.print()
// console.log('Max',sll.findMax())
sll.print();
// sll.reverseList();
sll.reverseRecursively()
console.log('REVERSAL')
sll.print()