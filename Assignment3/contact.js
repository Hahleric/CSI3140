document.writeln("<h1>To reach us,you can:</h1>");



function check1(){

const hour = new Date().getHours(); 
let greeting;

if (hour < 9||hour>19) {
  greeting = "Not opening hour,sorry.";
  alert(greeting);
} else {
  greeting = "Good day,you can call us now.";
  alert(greeting);
}


}

function check2(){

const hour = new Date().getHours(); 
let greeting;

if (hour < 9||hour>19) {
  greeting = "We will email you back immediately tomorrow.";
  alert(greeting);
} else {
  greeting = "We are glad to contact you";
  alert(greeting);
}
}