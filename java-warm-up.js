// javascript stuff

var apples = 14;
console.log("I have " + apples + " apples.");

// make a var with a value of Hash
var words = {'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.'};



// if/else loop
var num = 16;
if (num > 10) {
  console.log(num + " is greater than 10");
} else if (num = 10) {
  console.log(num + " is exactly 10");
} else if (num < 10) {
  console.log(num + " must be less than 10");
}

// .times (ruby method) in javascript)

function something() {console.log('thing you are repeating')}

[5].forEach(i => Array(i).fill(i).forEach(_ => {
  something()
}))

// .times (early version of forEach) basic for loop
var base = 5;

for (var i = base; i > 0; i--) {
    var answer = base * i;
    console.log(answer);
}

// .times one more time

var total = 0

for (var i = 100; i > 0; i--) {
  total += i;
}
console.log(total);

// range iteration in javascript

Array.range= function(start, end, step){
  var numRange= [];
  numRange[0]= start;
  step= step || 1;
  while(start+step<= end){
    numRange[numRange.length]= start+= step;
  }
  return numRange;
}

var countLength = Array.range(3,15);
var times = countLength.length;

countLength.forEach((number, index) => {
  if (number > 9) {
    console.log("You can get on the rollercoaster!")
  } else {
    console.log("You are too short to ride this rollercoaster")
  }});

// other iteration
var array = []
for (i = 3; i < 15; i++) {
  if (i > 9) {
    console.log("You can get on the rollercoaster!")
  } else {
    console.log("You are too short to ride this rollercoaster")
  }
};
console.log(array);

// Array interation
var containers = ['purse', 'wallet', 'backback'];

containers.forEach((word) => {
  console.log(word);
});

// Hello World
function helloWorld() {
  console.log('Hello, world!');
}

helloWorld();

// add sums

function addSums(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
};

addSums(5, 7);
