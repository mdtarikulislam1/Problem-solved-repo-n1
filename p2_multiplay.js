function simpleMultiplication(number) {
    // let ans = 0
    if(number % 2 == 0){
      return number * 8
    }
    else {
        return number * 9
    }
}

console.log(simpleMultiplication(5))

// shortcat way

const result = (number) => number % 2 === 0 ? number * 8 : number * 9

console.log(result(5))