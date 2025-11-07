class Heap{
     constructor(){
          this.heap = [];
     }
     insert(value){
          this.heap.push(value);
          this.heapifyUp()
     }
     heapifyUp(){
          let index = this.heap.length-1;
          let parentIndex = Math.floor((index-1)/2);

          while (index > 0 && this.heap[parentIndex] < this.heap[index]){
               [this.heap[index],this.heap[parentIndex]] = 
               [this.heap[parentIndex],this.heap[index]];

               index = parentIndex;
          }
     }
     delete(){
          let max = this.heap[0]
          this.heap[0] = this.heap.pop()
          this.heapifyDown()
          return max;
     }
     heapifyDown(){
          let index = 0;
          let length = this.heap.length

          while(true){
               let left = (2*index)+1;
               let right = (2*index)+2;
               let largest = index;

               if (left < length && this.heap[left]> this.heap[largest]){
                    largest = left;
               }
               if (right < length && this.heap[right] > this.heap[largest]){
                    largest = right;
               }

               if (largest === index) break;

               [this.heap[largest],this.heap[index]] = 
               [this.heap[index],this.heap[largest]]

               index = largest;
          }
     }
}