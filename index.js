const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/* const titleCased = () => {
  return tutorials.map((tutorial,context)=>{
    const p = tutorial.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    console.log(p)
    context.push(p)
  })
}

console.log(titleCased()) */

 
const t = 'what does the this keyword mean?'

const question1 = t.split(" ").toString().replace(/^./, t[0].toUpperCase())
/*
const question = tutorials.map(tutorial =>{
  tutorial.charAt(0).toUpperCase() + tutorial.slice(1).join(" ")

const test1=tutorials.map(tutorial =>{
  tutorial.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
})
const test2=tutorials.map(tutorial =>{
  tutorial.split(" ")
})
const result = t.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
const test = 'what'
const r2=test.charAt(0).toUpperCase() + test.slice(1);

console.log(question)

console.log(result)
console.log(r2)
console.log(test1)
console.log(test2)

const array =[]
for(let i=0;i<tutorials.length;i++){
  const p=tutorials[i].split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  console.log(p)
  array.push(p)
  
}
console.log(array) */
console.log(question1)