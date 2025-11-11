const task1 = (callback)=>{
     setTimeout(()=>{
          console.log('Task-1 complete')
          callback()
     },1000)
}
const task2 = (callback)=>{
     setTimeout(()=>{
          console.log('Task-2 complete')
          callback()
     },2000)
}
const task3 = ()=>{
     setTimeout(()=>{
          console.log('Task-3 complete')
     },3000)
}

task1(()=>{
     task2(()=>{
          task3()
     })
})