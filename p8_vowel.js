const res = (str) => (str.match(/[aeiou]/gi) || []).length;
// console.log(res("hsgxchse"));

const result = (str2) => {
  let count = 0;
  const vowel = ["a", "e", "i", "o"];
  for (let i = 0; i < str2.length; i++) {
    if(vowel.includes(str2[i])){
        count ++
    }
  }
 return count
};
console.log(result('hellow'))

// Shortcat way

const result1 = str => (str.split('').filter(t => 'aeiou'.includes(t))).length

console.log(result1('helloiuooo'))