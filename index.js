console.log("Hello World");

console.log("Its a beautiful day outside, birds are singing, flowers are blooming, On days like this kids like you, SHOULD BE BURNING IN HELL")


function sayHello(name){
   return `Hello ${name}`;


}
console.log(sayHello('Marley O '))

const Rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(Rainbow[4])

let name = prompt('What is your name?')


import * as promptSync from "prompt-sync";
const prompt = promptSync();


const Basestring  = prompt("Please enter the base of your multiple set. ");
const BaseNumber  = parseInt(Basestring);
  for (let i=0 ; i<13 ; i++)  {
    let a_number  = Math.floor(BaseNumber* i)
       console.log(`${i}: ${a_number}`)

    }
