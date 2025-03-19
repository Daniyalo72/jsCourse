// Chalo in methods ko araam se samajhtay hain, tumhari apni zubaan mein!//////////////////////


// 1. indexOf()
// Ye method array ke andar kisi bhi element ka pehla(first) index dhoondhne ke liye use hoti hai.
// Agar wo element mil jaye, toh uska index return karti hai.Agar na mile, toh - 1 return karti hai.

// 🔹 Example:

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = array.indexOf(5); // index = 4
document.getElementById("indexOf").innerHTML = `indexOf(): kay waja say " ${index}"`;


// 2. lastIndexOf()
// Ye bhi indexOf() ki tarah kaam karti hai, lekin ye array ke andar kisi element ka akhri (last) index return karti hai.

// 🔹 Example:


let fruits = ["apple", "banana", "mango", "banana"];
console.log(fruits.lastIndexOf("banana"));  // Output: 3
console.log(fruits.lastIndexOf("grape"));   // Output: -1


// (Yahan "banana" ka last index 3 hai, is wajah se 3 return hoga.)


// 3. includes()
// Ye method check karti hai ke array ke andar koi element mojood hai ya nahi. Ye true ya false return karti hai.

// 🔹 Example:


let numbers = [10, 20, 30, 40];
console.log(numbers.includes(20));  // Output: true
console.log(numbers.includes(50));  // Output: false
// (Agar element array me ho toh true, warna false.)
 

//********************************************** (Zyada Methods jo miltay julte hain)************************************************* */



// 4. find()
// Ye method array ke andar pehla element dhoondhti hai jo ek specific condition ko match kare.
//  Agar koi match mil jaye toh wo return karti hai, warna undefined.

// 🔹 Example:


let nums = [5, 12, 8, 130, 44];
let found = nums.find(num => num > 10);
console.log(found);  // Output: 12 (kyunki pehla number jo 10 se bara hai wo 12 hai)




// 5. findIndex()
// Ye method pehle matching element ka index return karti hai. Agar na mile, toh -1 return hota hai.

// 🔹 Example:


let numbers2 = [5, 12, 8, 130, 44];
let index1 = numbers2.findIndex(num => num > 10);
console.log(index1);  // Output: 1 (kyunki 12 ka index 1 hai aur wo pehla number hai jo 10 se bara h







// 6. findLast()
// Ye find() jaisi hai, lekin ye array ke end se start hoti hai aur pehla matching element return karti hai.

// 🔹 Example:


let numbers1 = [5, 12, 8, 130, 44];
let lastFound = numbers1.findLast(num => num > 10);
console.log(lastFound);  // Output: 44 (kyunki ye last number hai jo 10 se bara hai)




// 7. findLastIndex()
// Ye findIndex() jaisi hai, lekin ye array ke end se start hoti hai aur pehla matching element ka index return karti hai.

// 🔹 Example:


let numbers3 = [5, 12, 8, 130, 44];
let lastIndex = numbers3.findLastIndex(num => num > 10);
console.log(lastIndex);  // Output: 4 (kyunki 44 ka index 4 hai aur ye last number hai jo 10 se bara hai)




