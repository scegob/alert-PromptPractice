// ask the user for their question
let question = prompt('whats your question');
console.log(question);
// check the question for a few things
if(question.includes("love")) {
    alert("Noooo")
}

//give them an answer
if(question.includes("love")) {
    alert("Noooo")
} else if(question.includes("money")) {
    alert("Yessss")
} else {
    alert("Maybe")
}


//// same though
if(question === "Does she love me") {
     alert("NOOOOO")
} else {
alert("Maybe")
}

// ask the use for a number to count to
let number = prompt("What number should I count to?");
number = parseInt(number);


for(i = 0; i < number; i++) {
    // the code will run until it reaches number input
    alert(i + 1);
}
// the same but it does it the opposide way

// uncomment this bottom one and comment the top

// for(i = 10; i > number; i--) {
//     alert(i - 1);
// }