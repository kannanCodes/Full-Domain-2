const task1 = () => {
     return new Promise((resolve) => {
          setTimeout(() => {
               resolve('Task-1 completed')
          }, 1000)
     })
}
const task2 = () => {
     return new Promise((resolve) => {
          setTimeout(() => {
               resolve('Task-2 completed')
          }, 2000)
     })
}
const task3 = () => {
     return new Promise((resolve) => {
          setTimeout(() => {
               resolve('Task-3 completed')
          }, 3000)
     })
}
task1()
     .then((result) => {
          console.log(result)
          return task2()
     })
     .then((result)=>{
          console.log(result)
          return task3()
     })
     .then((result)=>{
          console.log(result)
     })
     .catch((error)=> console.log(error))
     .finally(()=> console.log('All tasks completed'))