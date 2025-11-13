//two pointer
function binarySearch(arr,target){
     let left = 0, right = arr.length-1;

     while( left <= right){
          let mid = Math.floor((left+right)/2);
          if (arr[mid] === target){
               return mid;
          }else if (target > arr[mid]){
               left = mid+1;
          }else{
               right = mid-1;
          }
     }
     return -1;
}
console.log(binarySearch([3, 4, 7, 8, 10, 15], 15));

//iterative
function recursiveBinarySearch(arr,target,left = 0,right= arr.length-1){
     if (left > right) return -1
     let mid = Math.floor((left+right)/2);

     if (arr[mid] === target) return mid;

     if (target > arr[mid]) {
          return recursiveBinarySearch(arr,target,left+1,right);
     }else{
          return recursiveBinarySearch(arr,target,left,right-1)
     }

}
console.log(recursiveBinarySearch([3, 4, 7, 8, 10, 15], 15))