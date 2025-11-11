//------> REMOVE DUPLICATES IN A SORTED ARRAY.
function removeDuplicates(arr){
     let n = arr.length;

     let i = 0;

     for ( let j = 1; j < n ; j++){
          if (arr[j] !== arr[i]){
               i++
               arr[i] = arr[j]
          }
     }
     return i+1;
}
let arr = [1,1,2,2,3]
let lengthOfArr = removeDuplicates(arr)
console.log(arr.splice(0,lengthOfArr))

//------> REMOVE DUPLICATES IN AN UNSORTED ARRAY.
function removeDuplicates(arr){
     let seen = {};
     let unique = [];

     for (let num of arr){
          if (!seen[num]){
               seen[num] = true

               unique.push(num)
          }
     }
     return unique;
}
let arr = [1,1,2,2,3]
let result = removeDuplicates(arr)
console.log(result)

//------> SECOND LARGEST NUMBER
function findSecond(arr){
     let n = arr.length;
     let largest = -Infinity;
     let secondLargest = -Infinity;

     for ( let i = 0 ; i < n; i++){
          if (arr[i] > largest){
               secondLargest = largest;
               largest = arr[i];

          }else if (arr[i] > secondLargest && arr[i] !== largest){
               secondLargest = arr[i]
          }
     }

     return secondLargest === -Infinity ? null : secondLargest
}
let arr = [5, 1, 9, 2, 9, 7];
console.log(findSecond(arr))