

const arr = (n) => {
  let min = n[0];
  for(let i = 1 ; i < n.length ; i++){
     if(n[i] < min){
        min = n[i]
     }
  }
  return min
};

console.log(arr([1,5,8,5,4,6]))


// Shortcat way
const arr1 = [8,54,5,4,5,5,32,54,655]

const result = Math.min(...arr)

console.log(result)