 function squareDigits(num){
  let s = num.toString().split('')
  let r = s.map(d=> parseInt(d) ** 2)
  return parseInt(r.join(''))
}

console.log(squareDigits(333))