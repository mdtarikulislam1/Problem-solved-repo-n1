

const filterByNumber = (d) => {
  let result = [];
  for (let i = 0; i < d.length; i++) {
    if (typeof d[i] === "number") {
      result.push(d[i]);
    }
  }
  return result
};
console.log(filterByNumber([12,58,54,'sdc']))

// shortcat way

const resultBolean = arr => arr.filter(x => typeof x === 'boolean')

console.log(resultBolean([1,5,5,21,true, false, 'xfv']))
const resultString = arr => arr.filter(x => typeof x === 'number')

console.log(resultString([1,5,5,21,true, false, 'xfv']))



