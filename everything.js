//npm packages
var fs = require('fs');
var inquirer = require('inquirer');

//laying out some variables...
var questions = [];
var clozeQuestions = [];


//start with Basic
function Basic(question, answer) {
    this.question = question;
    this.answer = answer;
}

Basic.prototype.printInfo = function() {
    console.log("Question: " + this.question + "\nAnswer: " + this.answer + "\nThis card has been added to the database!");
    fs.appendFile('flashcards.txt', "\nQuestion: " + this.question + " Answer: " + this.answer);
};


//now for Cloze
function Cloze(cloze, phrase) {
    this.cloze = cloze;
    this.phrase = phrase;
}

Cloze.prototype.printClozeInfo = function() {
    console.log("Cloze: " + this.cloze + "\nPhrase: " + this.phrase + "\nThis card has been added to the database!");
    fs.appendFile('flashcards.txt', "\ncloze: " + this.cloze + " text: " + this.text);
};

module.exports = Flashcards;

