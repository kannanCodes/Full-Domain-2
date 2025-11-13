function findSum(num){
     let sum = 0
     while (num > 0){
          let digit = num % 10;
          sum+= digit
          num = Math.floor((num/10))

     }
     return sum;
}
console.log(findSum(123))

function findSumRecursively(num){
     if (num === 0) return 0;

     return num%10 + findSumRecursively(Math.floor(num/10))
}
console.log(findSumRecursively(123))