<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer->  B: `ReferenceError: greetign is not defined`

<i>Explanation : In this case 'greeting' is declared but it's value is not assigned . And  'greetign' = {} which is not define but value is an empty object.So , console.log(greetign) -> will gave a reference error (greetign is not defined)</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer-> C: `"12"`</b></summary>
<p>

#### Answer: ?

<i>Explanation : In the sum function, the parameters a and b are expected to be numbers but in the function call sum(1, "2"),first argument 1 is number and the second argument "2" is a string.So,in this case as,the + operator is used, it will concatenate them.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer-> A: ['🍕', '🍫', '🥑', '🍔']

<i>Explanation :The info.favoriteFood variable is initially set to the first item in the food array, which is "🍕". However, later in the code, the value of info.favoriteFood is changed to "🍝", but this change doesn't affect the original food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer-> B: `Hi there, undefined`

<i>Explanation : After sayHi() is called without passing any arguments, then inside the sayHi function, the name parameter is undefined.So, The function returns a string using template literals: "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer->  C: 3

<i>Explanation : nums.forEach methods iterate over each element in the 'nums' array.If there is a truthy value in the 'nums' array , then the element will be counted.Here first time,
0 is falsy, so there will be no count .Then,
1 is truthy, so count becomes 1. Then,
2 is truthy, so count becomes 2. Finally,
3 is truthy, so count becomes 3.</i>

</p>
</details>
