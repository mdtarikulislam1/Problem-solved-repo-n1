function findNextSquare(sq) {
  let a = Math.sqrt(sq)
  if(Number.isInteger(a)){
    return (a+1)**2
  }else{
    return -1
  }
  return a
}

console.log(findNextSquare(122))
