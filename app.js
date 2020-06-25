// function getUserName
// requires: nothing
// modifies: value of userName
// effects: greeting on header of the page

function getUserName() {
    let userName = prompt("What is your name?");

    if (userName === "") {
        userName = "friend"
    }
    return userName;
}

// function homeAloneStatus
// requires: nothing
// modifies: value of homeAlone based on prompt from user
// effects: greeting on subheader of the page

function homeAloneStatus() {
    let answer = prompt("Type 1 if you are home alone, otherwise enter how many people you are indoors with.")
    let homeAlone;

    if (answer == 1) {
        homeAlone = "The first row of suggestions below are fun to do alone";
    } else {
        homeAlone = "The lower two rows of suggestions are fun for groups";
    }
    return homeAlone;
}


// function greetingFunction
// requires: nothing
// modifies: value of greeting based on browser input
// effects: greeting on header of the page

function greetingFunction() {
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

    return greeting;
}

let userName = getUserName();
let homeAlone = homeAloneStatus();
let greeting = greetingFunction();

// function writeToThePage
// requires: 3 arguments- greet, name, homeStatus... just for fun
// modifies: nothing
// effects: writes two lines of greeting to the webpage

function writeToThePage(greet, name, homeStatus) {
    document.write("<h1>" + greet + name + "!" + " Check out these great Indoor Activities" + "</h1>");
    document.write("<h3>" + homeStatus + "</h3>");
}

writeToThePage(greeting, userName, homeAlone);
