// function getUserName
// takes in information from the user and returns a user name
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
// returns string depending on if the user is staying in or not
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
// takes in time information from the browser and returns a greeting string
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


// function writeToThePage
// writes the page header
// requires: 3 arguments- greet, name, homeStatus... just for fun
// modifies: nothing
// effects: header of the webpage

function writeToThePage(greet, name, homeStatus) {
    document.write("<h1>" + greet + name + "!" + " Check out these great Indoor Activities" + "</h1>");
    document.write("<h3>" + homeStatus + "</h3>");
}



// function verifyIndoor
// requires: nothing
// modifies: the values of userName, homeAlone
// effects: the apperance of the entry header

function verifyIndoor() {
    let message = "Are you planning on staying in today? (y or n)";
    let answer = prompt(message);

    while (answer !== "y" && answer !== "n") {
        alert("Please answer using y or n");
        answer = prompt(message);
    }

    if (answer === 'n') {
        let userName = "friend";
        let homeAlone = "Please visit our other pages since you aren't staying in today!";
        let greeting = greetingFunction();

        writeToThePage(greeting, userName, homeAlone);
    } else {
        let userName = getUserName();
        let homeAlone = homeAloneStatus();
        let greeting = greetingFunction();

        writeToThePage(greeting, userName, homeAlone);
    }
}

verifyIndoor();

// function indoorGame
// a game for users to play indoors
// requires: nothing
// modifies: nothing
// effects: user experience

function indoorGame() {
    let message = "Since you are staying in, lets play a game! (y or n)";
    let answer = prompt(message);

    while (answer !== "y" && answer !== "n") {
        alert("Please answer using y or n");
        answer = prompt(message);
    }

    if (answer === 'n') {
        alert("Maybe later :)")
    } else {
        let number = 49;
        let guess = prompt("You have 10 chances to pick a number beween 1 and 100")

        for (let i = 0; i < 10; i++) {
            if (number !== parseInt(guess) && i < 9) {
                alert("Sorry! You have " + (10 - (i + 1)) + " chances left. Try again!");
                guess = prompt("You have 10 chances to pick a number beween 1 and 100")
            } else if (number !== parseInt(guess) && i == 9) {
                alert("Sorry! You have " + (10 - (i + 1)) + " chances left. Maybe next time!");
            } else if (number === parseInt(guess) && i < 10) {
                alert("Wow! You got it in " + (i + 1) + "! You should play the lotto");
                break;
            }
        }


    }
}
indoorGame();

