class Node{
     constructor(value){
          this.value = value;
          this.left = null;
          this.right = null;
     }
}
class BST{
     constructor(){
          this.root = null;
     }
     insert(value){
          let newNode = new Node(value);
          if (!this.root){
               this.root = newNode;
               return;
          }
          let node = this.root;

          while (node){
               if (value === node.value) return;
               if (value < node.value){
                    if (!node.left){
                         node.left = newNode;
                         return;
                    }
                    node = node.left;
               }else{
                    if (!node.right){
                         node.right = newNode;
                         return;
                    }
                    node = node.right;
               }
          }
     }
     inOrder(node=this.root){
          if (!node) return;
          this.inOrder(node.left);
          console.log(node.value)
          this.inOrder(node.right)
     }
     preOrder(node=this.root){
          if (!node) return;
          console.log(node.value);
          this.preOrder(node.left);
          this.preOrder(node.right);
     }
     postOrder(node=this.root){
          if (!node) return;
          this.postOrder(node.left);
          this.postOrder(node.right);
          console.log(node.value)
     }
     levelOrder(){
          let queue = [this.root]
          while (queue.length > 0){
               let node = queue.shift();
               console.log(node.value);
               if (node.left){
                    queue.push(node.left)
               }
               if (node.right){
                    queue.push(node.right);
               }
          }
     }
     findMin(node){
          while (node.left){
               node = node.left
          }
          return node;
     }
     delete(value,node = this.root){
          if (!node) return ;

          if (value < node.value){
               node.left = this.delete(value,node.left);
          }else if (value > node.value){
               node.right = this.delete(value,node.right);
          }else{
               if (!node.left && !node.right){
                    return null;
               }
               if (!node.left){
                    return node.right;
               }else if (!node.right){
                    return node.left;
               }

               let minRight = this.findMin(node.right);
               node.value = minRight.value;

               node.right = this.delete(minRight.value,node.right)

          }
          return node;
     }
     findHeight(node){
          if(!node) return -1;
          const leftHeight = this.findHeight(node.left);
          const rightHeight = this.findHeight(node.right);
          return Math.max(leftHeight,rightHeight)+1;
     }
     isBalanced(node=this.root){
          if(!node) return true;

          const leftHeight = this.findHeight(node.left);
          const rightHeight = this.findHeight(node.right);

          const diff = Math.abs(leftHeight - rightHeight);

          if (diff > 1) return false;

          return this.isBalanced(node.left) &&
          this.isBalanced(node.right)
     }

}
const tree = new BST()
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);

