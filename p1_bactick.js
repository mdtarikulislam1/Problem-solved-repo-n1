function greet(name){
  return `"Hello, ${name} how are you doing today?" .`
}

const name = 'torikul'
const result = greet(name)

console.log(result)

// shortkat way

const result2 = (name)=> `"Hello, ${name} how are you doing?".` 

console.log(result2('torikul'))