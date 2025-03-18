function displayDate(){
    document.getElementById("demo").innerHTML = Date();
    document.getElementById("demo").style.color = "green";
    document.getElementById("demo").style.fontSize = "24px";
    document.getElementById("demo").style.fontFamily = "Arial, sans-serif";
    document.getElementById("demo").style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
    setTimeout(displayDate, 1000); // Call the function every second
    document.getElementById("demo").style.textAlign = "center";
}






function changeBackgroundColor() {
    document.body.style.backgroundColor = "darkred"; // Change background color when page loads
}
let hidi =43
let scf = 50
let eng =56

function calculateAverage() {
    let average = (hidi + scf + eng) / 3;
    document.getElementById("average").innerHTML = "calculateAverage()"; // Display average rounded to 2 decimal places
}