// Document elements
var questionEl = document.querySelector("#question");
var buttonBox = document.querySelector("#button-box");
var trueBtn = document.querySelector("#true");
var falseBtn = document.querySelector("#false");

var questionBank = [
    {
        q: "Sharks can blink.",
        a: "False"
    },
    {
        q: "Pineapple goes on pizza.",
        a: "True"
    },
    {
        q: "Tigers have stripes on their skin.",
        a: "True"
    },
    {
        q: "Polar bear's have transparent fur.",
        a: "True"
    },
    {
        q: "Horses are odd-toed hoofed animals.",
        a: "True"
    }
];

// declare question iterator and a function to move to the next question in the array
var questionIterator = 0;
var nextQuestion = function() {
    questionIterator++;

    if (questionIterator < questionBank.length) {
        questionEl.textContent = questionBank[questionIterator].q;
    } else {
        // display score after the last question
        questionEl.textContent = "You got " + score + "  questions correct!";
    }
};

// declare a variable to hold the user's answer and a score variable
var userAns = null;
var score = 0;

// program the true and false buttons to set userAns to true or false, update the score, and move to the next question

trueBtn.addEventListener("click", function(){
    // if their are still questions left
    if (questionIterator < questionBank.length) {
        userAns = "True";
        if (userAns === questionBank[questionIterator].a) {
            score++;
        }
        nextQuestion();
    }
});

falseBtn.addEventListener("click", function(){
    if (questionIterator < questionBank.length) {
        userAns = "False";
        if (userAns === questionBank[questionIterator].a) {
            score++;
        }
        nextQuestion();
    }
});

// Load page with 1st question displayed
questionEl.textContent = questionBank[questionIterator].q;
