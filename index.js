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

let newArray = tutorials[0].split(" ");
let result = newArray.map(element => {
  return element[0].toUpperCase() + element.slice(1);
}); //output [ 'What', 'Does', 'The', 'This', 'Keyword', 'Mean?']

let result2 = tutorials[0].split(" ").map(element => {
  return element[0].toUpperCase() + element.slice(1);
}); //output [ 'What', 'Does', 'The', 'This', 'Keyword', 'Mean?']
//Need to iterate over tutorials + each ind array

function titleCased () {
  return tutorials.map(array => {
  for(let i =0; i < array[i].length; i++) {
  return array.split(" ").map(letter => {
    return letter[0].toUpperCase() + letter.slice(1)
       }).join(' ')
    }
  })
}