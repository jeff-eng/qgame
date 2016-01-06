var counter = 0;
var correctnum = 0;
var user = prompt('What is your name?');
alert('Well hello, ' + user + '! Great to have you here on my page.');
console.log('The user\'s name is ' + user + '.');
var answer1 = prompt('Do you think I am a human? (answer yes or no please)');

// Log the result to the console
console.log('The user answered ' + answer1 + 'to question 1.');

// want to accept multiple answers
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
  alert('Wrong, ' + user + ', I am actually a computer program.');
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase()){
  alert('Correct, ' + user + '. I am a computer program.');
  // Add correct answer to variable and log it to the console
  counter ++;
  console.log('The user has answered ' + counter + ' question(s) correctly.');
} else {
  alert('Sorry, ' + user + ' I didn\'t understand that.');
}
var answer2 = prompt('What language do you think I was programmed in?');
console.log('The user answered ' + answer2 + 'to question 2.');
switch(answer2.toLowerCase()){
  case 'javascript':
    alert('You are correct, ' + user + '.');
    // Add correct answer to variable and log it to the console
    counter ++;
    console.log('The user has answered ' + counter + ' question(s) correctly.');
    break;
  case 'python':
    alert('Wrong. Does it look like I have a beard to you, ' + user + '?');
    break;
  default:
    alert('Nope! I was coded in javascript, ' + user + '.');
    break;
  }
var answer3 = prompt('Do you think the last question was a \'switch\' or an \'if/else\' statement?');
console.log('The user answered ' + answer3 + 'to question 3.')
if (answer3.toLowerCase() === 'switch'){
  alert('Yes! Wow, ' + user + ', you are very perceptive.');
  // Add correct answer to variable and log it to the console
  counter ++;
  console.log('The user has answered ' + counter + ' question(s) correctly.');
} else if (answer3.toLowerCase() === 'if/else') {
  alert('Sorry, ' + user + ', but it was actually a switch!');
} else {
  alert('That didn\'t make sense to me, ' + user + '.');
}
while (correctnum == 0) {
  var answer4 = prompt('Last question, ' + user + '! How many lines of code do you think I contain?')
  console.log('The user answered ' + answer4 + 'to question 4.')
  if (answer4 == 65){
    alert('Wow, impressive!');
    // Add correct answer to variable and log it to the console
    counter ++;
    console.log('The user has answered ' + counter + ' question(s) correctly.');
    correctnum ++;
  } else if (parseInt(answer4) < 65){
    alert('That is too few lines of code for a being of my complexity, ' + user + '!');
  } else if (parseInt(answer4) > 65){
    alert('That is an excessive amount of code, ' + user + '!');
  }
}
alert('You\'ve finished the quiz, ' + user + '. You answered ' + counter + ' question(s) correctly.');
