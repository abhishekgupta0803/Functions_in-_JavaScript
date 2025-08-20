// --> 1 Function without return value without parameter

// 1. wap to calculate sum of even and odd digits of a specific number

var num = 123456

function sumEvenandOdd() {
  var even = 0;
  var odd = 0;

  while (num != 0) {
    var dig = num % 10;

    if (dig % 2 == 0) {
      even += dig;
    } else {
      odd += dig;
    }

    num = parseInt(num / 10);
  }

  console.log(`Sum of even digit : ${even} `);
  console.log(`Sum of odd digit : ${odd}`);
}

sumEvenandOdd();

// 2. wap to count even and odd digits in a number

var num = 123456

function countEvenandOdd() {
  var even = 0;
  var odd = 0;

  while (num != 0) {
    var dig = num % 10;

    if (dig % 2 == 0) {
      even++
    } else {
      odd++
    }

    num = parseInt(num / 10);
  }

  console.log(`Count of even digit : ${even} `);
  console.log(`Count of odd digit : ${odd}`);
}

countEvenandOdd();

// 3.wap to reverse a number

var num = 1234

function isReverse() {
  var revNum = 0

  while (num != 0) {
    var rem = num % 10
    revNum = revNum * 10 + rem
    num = parseInt(num / 10)
  }

  console.log(` Reverse Number is : ${revNum}`)
}

isReverse()

// 4 wap to check wheather a number is palindrome or not

var num = 121
function isPlandrome(){
  var revNum = 0
  var orgNum = num

  while(num != 0){
    var rem = num % 10
    revNum = revNum * 10 + rem
    num = parseInt(num / 10);
  }

  if(revNum == orgNum){
    console.log(`${revNum} is Plandrome`);
  }else{
    console.log(`${revNum} is Not a Plandrome`);
  }
}
isPlandrome()

// 2--> function with return value without parameter.
// 
// 1.wap to check whether a number is NEON number or not
// 
var num = 9
function checkNeon(){
  var sqrNum =  num * num
  var sum = 0
  while(sqrNum != 0){
    var rem = sqrNum % 10
    sum += rem
    sqrNum = parseInt(sqrNum / 10);
  }
  return sum
}
var neonNum = checkNeon()
if(neonNum == num ){
  console.log(`${num} is NEON Number`);
}else{
  console.log(`${num} is Not a NEON Number`);
}
 
// 2.wap to check whether a number is Armstrong or not
// 
var num = 157
function checkArmstrong(){
  var num1 = num
  var num2 = num
  var dig = 0

  while(num1 != 0){
    dig++
    num1 = parseInt(num1 / 10);
  }

  var sum = 0
  while(num2 != 0){
    var rem = num2 % 10
    sum  += rem ** dig
    num2 = parseInt(num2 / 10);
  }
  return sum
}
var armst = checkArmstrong()
if(armst ===  num ){
  console.log(`${num} is a Armstrong Number`);
} else{
  console.log(`${num} is Not a Armstrong Number`);
}
 
// 3. wap to print factorial of any specific number
// 
var num = 5
function factorial(){
  var fact = 1;
  for(var i=1; i<=num; i++){
    fact = fact * i
  }
  return fact
}
var result = factorial()
console.log(`${num} Factorial is : ${result}`)

// 4. wap to check whether a number is prime or not
// 
var num = 3
function  checkPrime(){
  var isPrime = true
  if(num <=  1){
    isPrime = false
  }else{
    for(var i=2; i<=num/2; i++){
      if(num % i === 0){
        isPrime = false
        break
      }
    }
  }
  return isPrime
}
var res = checkPrime()
if(res === true){
  console.log(`${num} is Prime Number`)
}else{
  console.log(`${num} is Not Prime Number`)
}
 
// 3 function without return value and with parameters

// 1 wap to print whether a number is perfect or not
// 
function  perfectNumber(num){
  var sum = 0
  for(var i=1; i<num; i++){
    if(num % i === 0){
      sum += i;
    }
  }
  if(sum === num){
    console.log(` ${num} is Perfect Number`);
  }else{
    console.log(` ${num} is Not a Perfect Number`);
  }
}
var num = 28
perfectNumber(num)

// 2 wap to count and print all prime number in range
// 
function allprimeNumRange(start, end) {
  var count = 0;
  for (var i = start; i <= end; i++) {
    var isPrime = true;
    if (i < 2) {
      isPrime = false;
    } else {
      for (var j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      console.log(i);
      count++;
    }
  }
  console.log("Total Numbers :", count);
}
allprimeNumRange(1, 20);

// 3. wap to print and count all armstrong number
// 
function allArmstrong(start, end) {
  var count = 0;
  for (var i = start; i <= end; i++) {
    var dig = 0;
    var num1 = i;
    var num2 = i;
    var arms = 0;

    while (num1 != 0) {
      dig++;
      num1 = parseInt(num1 / 10);
    }

    while (num2 != 0) {
      var rem = num2 % 10;
      arms += rem ** dig;
      num2 = parseInt(num2 / 10);
    }

    if (arms === i) {
      console.log(arms);
      count++;
    }
  }
  console.log("Total Armstrong Number :", count);
}
allArmstrong(1, 153);
 
// 4 wap to print and count all plandrome number in a range
// 
function allPlandrome(start, end) {
  var count = 0;
  for (var i = start; i <= end; i++) {
    var num1 = i;
    var num2 = i;
    var reverse = 0;
    while (num1 != 0) {
      var rem = num1 % 10;
      reverse = reverse * 10 + rem;
      num1 = parseInt(num1 / 10);
    }
    if (num2 === reverse) {
      console.log(reverse);
      count++;
    }
  }
  console.log("Total Plandrome  Number is :", count);
}
allPlandrome(1, 20);
// 
// 4 function with return value and with parameters
 
// 1. wap to print magical number
// 
function magicalNumber(num) {
  var sum = num;
  while (sum > 9) {
    var temp = 0;
    while (sum != 0) {
      temp += sum % 10;
      sum = parseInt(sum / 10);
    }
    sum = temp;
  }
  return sum;
}
var num = 28;
var res = magicalNumber(num);
if (res === 1) {
  console.log(`${num} is a Magical Number`);
} else {
  console.log(`${num} is Not a Magical Number`);
}

// 2. wap to print and count all plandrome number in a range
// 
function allPlandrome(num) {
  var x = num;
  var rev = 0;
  while (x != 0) {
    var rem = x % 10;
    rev = rev * 10 + rem;
    x = parseInt(x / 10);
  }
  return rev;
}
function rangePlandrome(start, end) {
  var count = 0;
  for (var i = start; i <= end; i++) {
    var res = allPlandrome(i);
    if (res === i) {
      console.log(res);
      count++;
    }
  }
  console.log("Total no of Plandrome is :", count);
}
rangePlandrome(1, 10);

// 3 wap to reverse a number
// 
function isReverse(num){
  var x = num
  var rev = 0
  while(x != 0){
    var rem = x % 10
    rev = rev * 10 + rem
    x = parseInt(x / 10)
  }
  return rev
}
var num = 1263;
var res = isReverse(num)
console.log(`${num} Reverse is : ${res}`)

// 4 wap to print factorial of any specific number

function factorial(num) {
  var fact = 1
  for (var i = 1; i <= num; i++) {
    fact = fact * i
  }
  return fact
}

var num = 3
var res = factorial(num)
console.log(`${num} Factorial is : ${res}`)



 //Anonymous Function

 //1

var test = function(){
   console.log("test function call")
}

test()

// //2

var sum = function(){
   var a = 10
   var b = 20

   return a +b
}

console.log(sum())


// //3
var sum = function(a,b){
  console.log(a+b)
}

sum(10,20)

// //4
var sum = function(a,b){
  return a+b
}

console.log(sum(10,20))


// //2 Arrow or Flat function

// //1
var test = ()=>{
  console.log("test func")
}

test()


// //2

var sum = () =>{
  var a = 10
  var b = 20

  return a+b
}

console.log(sum())


// //3

var sum = (a,b)=>{
  return a + b
}

console.log(sum(10,20))


// //4

var sum = (a,b) =>{
  return a+b
}

console.log(sum(10,20))


// //Self Invoked Function or Immedately Invoked Function Expression 

//1
(function test(){
  console.log("test call")
})()



//2
console.log(`sum is ${function sum(){
   var a =10
   var b =20
   return a + b
}()}`)



//3

console.log(`Sum is ${function sum (a,b){
  return a+b
}(10,20)}`)


//4
console.log(`Sum is ${function sum(a,b){
    console.log(a+b)
}(10,20)}`)




//Anonimous Function
//1


(function (){
  console.log("func")
})()

//2


console.log(`sum ${function(){
   var a =10
   var b =20
   return a+b
}()}`)

//3


(function (a,b){
  console.log(a+b)
})(10,20)


//4
console.log(`Sum is ${function(a,b){
  return a+b
}(10,20)}`)

//Fat Arrow function

//1



(()=>console.log("In test Function"))()
//2


console.log(`sum is ${(()=>{
  var a = 10
  var b =20
  return a + b
})()}`)

//3


console.log(`Sum is ${((a,b)=>{
    return a +b
})(10,20)}`)

//4


console.log(`sum is ${((a,b)=>{
  console.log(a+b)
})(10,20)}`)
