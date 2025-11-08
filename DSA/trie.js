class Node{
     constructor(){
          this.children = {};
          this.isEnd = false;
     }
}
class Trie {
     constructor(){
          this.root = new Node();
     }
     insert(word){
          let node = this.root;

          for ( let char of word){
               if (!node.children[char]){
                    node.children[char] = new Node()
               }
               node = node.children[char]
          }
          node.isEnd = true;
     }
     print(node=this.root,word=''){
          if (node.isEnd){
               console.log(word)
          }

          for ( let char in node.children){
               this.print(node.children[char],word+char)
          }
     }
     search(word){
          let node = this.root;

          for ( let char of word){
               if (!node.children[char]) return false;

               node = node.children[char]
          }
          return node.isEnd
     }
     startsWith(prefix){
          let node = this.root;

          for ( let char of prefix){
               if (!node.children[char]){
                    console.log('No words with prefix')
               }
               node = node.children[char]
          }
          console.log(`Words with prefix ${prefix}:`);
          this.print(node,prefix)
     }
     collectWords(node=this.root,word='',results=[]){

          if (node.isEnd){
               results.push(word)
          }

          for ( let char in node.children){
               this.collectWords(node.children[char],word+char,results)
          }
          return results
     }
     autoComplete(prefix){
          let node = this.root;

          for ( let char of prefix){
               if (!node.children[char]) return[];

               node = node.children[char];
          }
          return this.collectWords(node,prefix,[])

     }

}
let trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dog");
trie.insert("cartoon");
trie.insert("care");


// console.log(JSON.stringify(trie,null,2))
// trie.print()

// console.log(trie.search('dog'));
// console.log(trie.search('cash'))
// trie.startsWith("ca");

console.log(trie.autoComplete("ca"));