//crystals
var crystal = {
    blue:
    {
        name: "blue",
        value: 0
    },

    red:
    {
        name: "red",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    yellow:
    {
        name: "yellow",
        value: 0
    }
};

//variables
var currentScore = 0;
var targetScore = 0;

var lose = 0;
var win = 0;

//random number function
var getRandom = function (min, max) {
    return Math.floor((Math.random() * max - min + 1) + min);
};

//initialize game function
var initGame = function () {
    //initialize current score to 0
    currentScore = 0;
    //get random number for target score
    targetNumber = getRandom(19, 120);
    console.log(targetNumber);
    $(".targetScore").html(targetNumber);
    $(".userScore").html(currentScore);
};

//get random number for each crystal
crystal.blue.value = getRandom(1, 12);
crystal.red.value = getRandom(1, 12);
crystal.green.value = getRandom(1, 12);
crystal.yellow.value = getRandom(1, 12);

console.log("blue:" + crystal.blue.value);
console.log("red:" + crystal.red.value);
console.log("green:" + crystal.green.value);
console.log("yellow:" + crystal.yellow.value);

//function to add value of crystals to current score
var crystalValue = function (crystal) {
    currentScore = currentScore + crystal.value;
    $("#userScore").html(currentScore);

    checkWins();
}

// function to check if user has reached target number
var checkWins = function () {
    // var lose = 0;
    if (currentScore > targetNumber) {
        alert("YOU LOSE");
        console.log("YOU LOSE");
        // adds a lose to lose card
        lose++;
        $("#lose").html(lose);
        //restart game
        initGame();
    }
    else if (currentScore === targetNumber) {
        // var win = 0;
        alert("YOU WIN!");
        console.log("YOU WIN!");
        // adds a win to win card
        win++;
        $("#win").html(win);
        //restart game
        initGame();
    }
};

//reinitialize game
initGame();

//on-click for crystal images
$("#blue").on("click", function () {
    crystalValue(crystal.blue);
    console.log(crystalValue);
});

$("#green").on("click", function () {
    crystalValue(crystal.green);
    console.log(crystalValue);
});

$("#red").on("click", function () {
    crystalValue(crystal.red);
    console.log(crystalValue);
});

$("#yellow").on("click", function () {
    crystalValue(crystal.yellow);
    console.log(crystalValue);
});