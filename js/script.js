/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var totalScores = totalScore();
    });
});

function network (channels) {
    if (channels === "Disney Channel") {
        return 4;
    } else if (channels === "Nickelodeon") {
        return 8;
    } 
}

function show (tvshow) {
    if (tvshow === "Wizards of Waverly Place") {
        return 4;
    } else if (tvshow === "Hannah Montana") {
        return 5;
    } else if (tvshow === "Zoey 101") {
        return 9;
    } else if (tvshow === "Degrassi") {
        return 10;
    } 
}

function actors (characters) {
    if (characters === "Raven-Symone") {
        return 4;
    } else if (characters === "Ashley Tisdale") {
        return 5;
    } else if (characters === "Victoria Justice") {
        return 9;
    } else if (characters === "Jamie Lynn Spears") {
        return 10;
    } 
}

function totalScore () {
    var q1Result = $("#question1").val();
    var score = network (q1Result);
    var q2Result = $("#question2").val();
    score = show (q2Result) + score;
    var q3Result = $("#question3").val();
    score = actors (q3Result) + score;
    
    if (score <15) {
    var finalVariable = "Disney Channel";
    } else if (score >15) {
    var finalVariable = "Nickelodeon";
    } else if (score ===15) {
    var finalVariable = "You're an avid watcher of both!!";
    }
    $("button").text(finalVariable);
}

