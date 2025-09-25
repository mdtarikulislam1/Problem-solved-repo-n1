বুঝেছি 👍
তাহলে আমি তোমার পুরো `README.md` একদম **GitHub এ সুন্দর করে দেখানোর মতো করে** আবার সাজিয়ে দিলাম।
সব কোড ব্লক ঠিকঠাক ফরম্যাট করা হয়েছে।

---

## 📄 Final `README.md`

````markdown
# 🚀 JavaScript Problem Solving  

এই রিপোজিটরিতে কিছু বেসিক থেকে ইন্টারমিডিয়েট জাভাস্ক্রিপ্ট প্রবলেম সলভ করা হয়েছে।  
প্রতিটা প্রবলেমের জন্য কোড এবং শর্টকাট সমাধানও দেওয়া আছে।  

---

## 📚 Table of Contents
1. [Greet Function](#1-greet-function)  
2. [Simple Multiplication](#2-simple-multiplication)  
3. [Count Sheep](#3-count-sheep)  
4. [Descending Order](#4-descending-order)  
5. [Square Digits](#5-square-digits)  
6. [Find Next Square](#6-find-next-square)  
7. [Filter By Number](#7-filter-by-number)  
8. [Filter By Boolean](#8-filter-by-boolean)  
9. [Vowel Count](#9-vowel-count)  
10. [Find Minimum Number](#10-find-minimum-number)  
11. [Summation](#11-summation)  

---

## 1. Greet Function
**Description:** নাম ইনপুট দিলে তাকে অভিবাদন জানাবে।  

```js
function greet(name){
  return `"Hello, ${name} how are you doing today?" .`
}
````

**Shortcut Way:**

```js
const greet = (name) => `"Hello, ${name} how are you doing?".`
```

---

## 2. Simple Multiplication

**Description:** যদি সংখ্যা even হয় তবে 8 দিয়ে গুণ হবে, আর odd হলে 9 দিয়ে।

```js
function simpleMultiplication(number) {
  if(number % 2 === 0){
    return number * 8
  } else {
    return number * 9
  }
}
```

**Shortcut Way:**

```js
const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9
```

---

## 3. Count Sheep

**Description:** একটি সংখ্যা ইনপুট নিলে সেই সংখ্যার পর্যন্ত `"sheep..."` রিটার্ন করবে।

```js
const countSheep = function (num){
  let result = ''
  for(let i = 1 ; i <= num ; i++){
      result += i + 'sheep...'
  }
  return result
}
```

---

## 4. Descending Order

**Description:** একটি সংখ্যা ইনপুট নিলে ডিজিটগুলোকে descending অর্ডারে সাজিয়ে সংখ্যা বানাবে। Even হলে 1 বাদ দিয়ে odd বানাবে।

```js
function descendingOrder(n){
  let r = parseInt(n.toString().split('').sort((a,b)=>b-a).join(''))
  if(r % 2 === 0){
     r -=  1
  }
  return r
}
```

---

## 5. Square Digits

**Description:** প্রতিটি digit কে square করে জোড়া লাগাবে।

```js
function squareDigits(num){ 
  let s = num.toString().split('')
  let r = s.map(d=> parseInt(d) ** 2)
  return parseInt(r.join(''))
}
```

---

## 6. Find Next Square

**Description:** একটি perfect square দেওয়া হলে তার পরের perfect square বের করবে, নাহলে `-1`।

```js
function findNextSquare(sq) {
  let a = Math.sqrt(sq)
  if(Number.isInteger(a)){
    return (a+1)**2
  }else{
    return -1
  }
}
```

---

## 7. Filter By Number

**Description:** একটি অ্যারেতে শুধু number গুলো বের করবে।

```js
const filterByNumber = (d) => {
  let result = [];
  for (let i = 0; i < d.length; i++) {
    if (typeof d[i] === "number") {
      result.push(d[i]);
    }
  }
  return result
};
```

**Shortcut Way:**

```js
const filterByNumber = arr => arr.filter(x => typeof x === 'number')
```


**Description:** একটি অ্যারেতে শুধু boolean গুলো বের করবে।

```js
const filterByBoolean = arr => arr.filter(x => typeof x === 'boolean')
```

---

## 8. Vowel Count

**Description:** একটি string এ কয়টা vowel আছে তা বের করবে।

```js
const res = (str) => (str.match(/[aeiou]/gi) || []).length;
```

**Shortcut Way:**

```js
const vowelCount = str => (str.split('').filter(t => 'aeiou'.includes(t))).length
```

---

## 9. Find Minimum Number

**Description:** একটি অ্যারে থেকে সবচেয়ে ছোট সংখ্যা বের করবে।

```js
const arr = (n) => {
  let min = n[0];
  for(let i = 1 ; i < n.length ; i++){
     if(n[i] < min){
        min = n[i]
     }
  }
  return min
};
```

**Shortcut Way:**

```js
const result = Math.min(...arr)
```

---

## 10. Summation

**Description:** 1 থেকে n পর্যন্ত সব সংখ্যা যোগফল বের করবে।

```js
var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i
  }
  return result
};
```

**Shortcut Way:**

```js
const summation = n => n * (n + 1) / 2
```

---

## ✅ Conclusion

এগুলো প্র্যাকটিস করলে জাভাস্ক্রিপ্টের **loop, condition, function, array method, string method, math method** — সবগুলোর উপরই ভালো ধারণা পাওয়া যাবে।



