let arr = [9,1,2,7,5]
function bubbleSort(arr){
     let n = arr.length;

     for (let i = 0; i < n-1;i++){
          let isSwapped = false;
          for ( let j = 0; j < n-1-i; j++){
               if (arr[j] > arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                    isSwapped = true
               }
          }
          if (!isSwapped)break
     }
     return arr;
}
console.log(bubbleSort(arr));

function selectionSort(arr){
     let n = arr.length;
     for ( let i = 0 ; i < n-1; i++){
          let minIndex = i

          for ( let j = i+1; j < n; j++){
               if (arr[j] < arr[minIndex]){
                    minIndex = j;
               }
          }
          if (minIndex !==i){
               [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
          }
     }
     return arr
}
console.log(selectionSort(arr));

function insertionSort(arr){
     let n = arr.length;

     for ( let i = 1; i < n ; i++){
          let key = arr[i];
          let j = i-1;

          while ( j >= 0 && arr[j] > key){
               arr[j+1] = arr[j];
               j--
          }
          arr[j+1] = key;
     }
     return arr
}
console.log(insertionSort(arr))

function merge(left,right){
     let i = 0,j = 0, result = [];

     while ( i < left.length && j < right.length){
          if ( left[i] < right[j]){
               result.push(left[i]);
               i++
          }else{
               result.push(right[j]);
               j++;
          }
     }
     return result.concat(left.slice(i)).concat(right.slice(j))
}

function mergeSort(arr){
     if (arr.length <=1) return arr;

     let mid = Math.floor(arr.length/2);
     let left = arr.slice(0,mid);
     let right = arr.slice(mid);

     let sortedLeft = mergeSort(left);
     let sortedRight = mergeSort(right);

     return merge(sortedLeft,sortedRight)
}
console.log(mergeSort(arr))


function partition(arr,low,high){
     let i = low;
     let j = high;
     let pivot = arr[low]
     while (i < j){
          do{
               i++
          }while(arr[i] <= pivot)

          do{
               j--
          }while(arr[j] > pivot)

          if (i < j){
               [arr[i],arr[j]] = [arr[j],arr[i]]
          }
     }
     [arr[low],arr[j]]=[arr[j],arr[low]]
     return j;
}
function quickSort(arr,low= 0, high = arr.length-1){
     if (low < high){
          const pIndex = partition(arr,low,high)
          quickSort(arr,low,pIndex-1)
          quickSort(arr,pIndex+1,high)
     }
     return arr;
}

console.log(quickSort(arr))