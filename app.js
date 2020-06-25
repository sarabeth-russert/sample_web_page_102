let userName = prompt("What is your name?");
let answer = prompt("Type 1 if you are home alone, otherwise enter how many people you are indoors with.")

let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good evening '; 
} else if (hourNow > 12) {
    greeting = 'Good afternoon ';
} else if (hourNow > 0) {
    greeting = 'Good morning ';
} else {
    greeting = 'Welcome ';
}

if (answer == 1) {
    homeAlone = "The first row of suggestions below are fun to do alone";
} else {
    homeAlone = "The lower two rows of suggestions are fun for groups";
}

document.write("<h1>" + greeting + userName + "!" + " Check out these great Indoor Activities" + "</h1>");
document.write("<h3>" + homeAlone + "</h3>");


