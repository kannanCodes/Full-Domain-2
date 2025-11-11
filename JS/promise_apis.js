const task1 = ()=>{
     return new Promise ((resolve,reject)=>{
          setTimeout(() => {
               resolve('Task-1 completed')
          }, 1000);
     })
}

const task2 = ()=>{
     return new Promise ((resolve,reject)=>{
          setTimeout(() => {
               resolve('Task-2 completed')
          }, 2000);
     })
}
const task3 = ()=>{
     return new Promise ((resolve,reject)=>{
          setTimeout(() => {
               reject('Task-3 Failed')
          }, 3000);
     })
}

//Promise.all()

// Promise.all([task1(),task2(),task3()])
// .then((results)=> console.log(results))
// .catch((err)=> console.log('One Failed ❌',err))

//Promise.allSettled()

// Promise.allSettled([task1(),task2(),task3()])
// .then((results)=> console.log('All Settled',results))
// .catch((err)=> console.log(err))

//Promise.race()

// Promise.race([task1(),task2(),task3()])
// .then((result)=> console.log('First Completed:',result))
// .catch((err)=> console.log(err))

Promise.any([task1(),task2(),task3()])
.then((result)=> console.log('First Resolved',result))
.catch((err)=> console.log('All Promise Rejected'))