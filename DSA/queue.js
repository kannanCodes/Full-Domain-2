class Queue {
     constructor() {
          this.items = []
     }
     enqueue(value) {
          this.items.push(value);
     }
     dequeue() {
          if (this.items.length === 0) return 'stack underflow';

          return this.items.shift()
     }
     peek() {
          return this.items.length === 0 ? null : this.items[0]
     }
     isEmpty() {
          return this.items.length === 0;
     }
}