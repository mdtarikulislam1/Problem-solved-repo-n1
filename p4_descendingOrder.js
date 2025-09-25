function descendingOrder(n){
let r = parseInt(n.toString().split('').sort((a,b)=>b-a).join(''))
 if(r % 2 === 0){
    r -=  1
 }
 return r
}

console.log(descendingOrder(2254))