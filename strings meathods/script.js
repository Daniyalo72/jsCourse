// let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// console.log(letters.length);
// console.log(letters.at(-0));
// console.log(letters.at(-1));
// console.log(letters.charAt(3).toUpperCase());



// let str = "Hello, World!";
// console.log(str.substr(0, 5)); // "Hello" (Start se 5 characters)
// console.log(str.substr(0, 5)); // "World" (7th position se 5 characters)
// let text = "HELLO WORLD";
// let char = text.charCodeAt(1);
// let lette = text.at(7)
// console.log(lette);

// function toggle(){
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML = text.toUpperCase();
//     document.getElementById("demo").style.color = "red";

// }
// let text1 = "daniyal"
// let text2 = "dev"
// let text3 = text1.concat(" ",text2);
// document.getElementById("demoo").innerHTML = text3;
// document.getElementById("demoo").style.color = "red";
// document.querySelector("button").style.color = "green";
// let trem = "       helllo weather       "
// let text4 = "daniyal"
// document.getElementById("trim").innerHTML = "length trem =" + trem.length + "<br>length text4 =" + text4.length;

let num = 5
let text = num.toString();
document.getElementById("duts").innerHTML = text.padStart(9,0)
 let text2 = "hellow world";
 let text3 = text2.repeat(1 );
 document.getElementById("reverse").innerHTML = text3 ;
 
//  function myFun(){
//   let net = document.getElementById("rot").innerHTML;
//   document.getElementById("rot").innerHTML = net.replace("weekly","month");
//  }
// function myFunction() {
//     let text6 = document.getElementById("rot").innerHTML;
//     document.getElementById("rot").innerHTML = text6.replaceAll("what","daniyal");
//   }
//   let str = "Hello, World! i am developing this program ";
//   let index = str.lastIndexOf("this")
//   document.getElementById("goty").innerHTML = index;

let introduction = ["hassan", "alice", "yazdan", "yawar"];
let output = ""; // Ye aik khaali string hai jisme hum saare naam ikattha karenge.

for (const self of introduction) {
  output += self + "<br>"; // Har naam ke baad aik new line daal rahe hain.
}

document.getElementById("demo").innerHTML = output; // Ab hum saare naam ko ek saath "demo" element mein daal rahe hain.
