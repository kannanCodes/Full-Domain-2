let obj = {
     name:'Kannan',
     address:{city:'Kollam'}
}

// let shallowCopy = Object.assign({},obj)
// // let shallowCopy = {...obj}

// shallowCopy.name = 'Virat'
// shallowCopy.address.city = 'Kochi'

// console.log(shallowCopy) // affected by original shallowcopy
// console.log(obj)

// let deepcopy = structuredClone(obj)
let deepcopy = JSON.parse(JSON.stringify(obj))

deepcopy.address.city = 'Kochi'

console.log(obj)//will not change original 