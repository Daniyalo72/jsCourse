// let myNumber = 2
// let text = ""
// while(myNumber != Infinity){
//      myNumber =    myNumber * myNumber
//     text = text + myNumber + "<br>" 

// }
// document.getElementById("demo").innerHTML = text;

//================================================ Better Approach:===========================================================
let myNumber2 = 2;
let txt1 = "";
let counter = 0;
function render(){

    while (myNumber2 != Infinity && counter < 20) {  // Limit to 20 iterations
       myNumber2 = myNumber2 * 2;
       txt1 = txt1 + myNumber2 + "<br>";
       counter++;
    }
    // console.log(txt1)
    document.getElementById("dem").innerHTML = txt1;
}
let price = 500;
let message = `The total price is: ${price}  rupess.`;
document.getElementById("demoo").innerHTML = message;
// document.getElementById("demoo").innerHTML = message.typeof();
console.log(typeof(message))
let fruits = ["apples", "cheese", "charry", ]
// document.getElementById("demoo").innerHTML = fruits;
document.getElementById("demo").innerHTML = fruits[0] = "mango";
