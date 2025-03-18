let array = ["ali", "abbas", "hussain", "yawar"]
document.getElementById("demo").innerHTML = array;



// 1. Array length
//Kya Hai?: Ye method array mein jitni cheezein hain, unka hisaab batata hai.
let text =array.length 
document.getElementById("length").innerHTML = text



// 2. Array shift()
//Kya Hai?: Ye method array ka pehla element hata deta hai aur usse return karta hai.
let shift = array.shift(0)
 document.getElementById("shift").innerHTML = ` shift kay waja say " ${shift}"  cut raha ha`

// 3. Array toString()
// Kya Hai?: Ye method array ko ek string mein badal deta hai. Har element ke beech comma (,) laga hota hai
 let toString = array.toString()
 document.getElementById("toString").innerHTML = ` toString kay waja say " ${toString}"  sab ko string may convert karraha ha`


//  3. Array at()
// Kya Hai?: Ye method aapko kisi bhi index par jo value hai, wo de deta hai. Negative index bhi samajh sakta hai (matlab, array ke end se count karega).
let at = array.at(0)
 document.getElementById("at").innerHTML =`at kay waja say " ${at}"  indexing ka valve bataraha ha`;


//  4. Array join()
// Kya Hai?: Ye method array ke sare elements ko ek string mein mila deta hai, aur aap decide kar sakte hain ke unke beech kis cheez ka separator ho.
let array1 = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// let array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
let array3 = array1.join(" * ");
document.getElementById("jion").innerHTML = array3;