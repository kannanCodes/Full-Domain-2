class Node{
     constructor(value){
          this.value = value;
          this.left = null;
          this.right = null;
     }
}
class BT{
     constructor(){
          this.root = null;
     }
     insert(value){
          let newNode = new Node(value);

          if (!this.root){
               this.root = newNode;
               return;
          }
          let queue = [this.root];

          while(queue.length > 0){
               let node = queue.shift();

               if (!node.left){
                    node.left = newNode;
                    return;
               }else{
                    queue.push(node.left);
               }

               if(!node.right){
                    node.right = newNode;
                    return;
               }else{
                    queue.push(node.right);
               }
          }
     }
     levelOrder(){  
         
          if (!this.root) return;

          let queue = [this.root]

          while(queue.length > 0){
               
               let node = queue.shift()

               console.log(node.value)

               if (node.left){
                    queue.push(node.left)
               }
               if (node.right){
                   queue.push(node.right)
               }
               
          }
     }
     internalNodes(node = this.root){
          if (!node) return;

          if (node.left || node.right){
               console.log(node.value);
          }

          this.internalNodes(node.left);
          this.internalNodes(node.right);
     }
     siblings(node=this.root){
          if (!node) return;

          if (node.left && node.right){
               console.log(`${node.left.value}<->${node.right.value}`)
          }

          this.siblings(node.left)
          this.siblings(node.right)
     }
     depth(value,node=this.root,depth=0){
          if (!node) return -1;

          if (value === node.value){
               return depth;
          }
          let left = this.depth(value,node.left,depth+1)

          if(left !== -1) return left;

          return this.depth(value,node.right,depth+1)
     }
     height(node=this.root){
          if (!node){
               return -1;
          }
          let leftHeight = this.height(node.left)
          let rightHeight = this.height(node.right)

          return Math.max(leftHeight,rightHeight)+1
     }
}

let tree = new BT()
tree.insert('A');
tree.insert('B');
tree.insert('C');
tree.insert('D');

// tree.levelOrder()
// tree.internalNodes();
// tree.siblings()
// console.log(tree.depth('D'))

console.log(tree.height())