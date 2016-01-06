var user = prompt('What is your name?');
alert('Well hello, ' + user + '! Great to have you here on my page.');
console.log('The user\'s name is ' + user + '.');
var answer1 = prompt('Do you think I am a human? (answer yes or no please)');
console.log('The user answered ' + answer1 + 'to question 1.');
if (answer1 === 'yes'){
  alert('Wrong, ' + user + ', I am actually a computer program.');
} else if (answer1 === 'no'){
  alert('Correct, ' + user + '. I am a computer program.');
} else {
  alert('Sorry, ' + user + ' I didn\'t understand that.');
}
var answer2 = prompt('What language do you think I was programmed in?');
console.log('The user answered ' + answer2 + 'to question 2.');
switch(answer2){
  case 'javascript':
    alert('You are correct, ' + user + '.');
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
if (answer3 === 'switch'){
  alert('Yes! Wow, ' + user + ', you are very perceptive.');
} else if (answer3 === 'if/else') {
  alert('Sorry, ' + user + ', but it was actually a switch!');
} else {
  alert('That didn\'t make sense to me, ' + user + '.');
}
var answer4 = prompt('Last question, ' + user + '! How many lines of code do you think I contain?')
console.log('The user answered ' + answer4 + 'to question 4.')
if (answer4 == 53){
  alert('Wow, impressive! Did you cheat and look at my sourcecode, ' + user + '?');
} else if (parseInt(answer4) < 53){
  alert('That is too few lines of code for a being of my complexity, ' + user + '!');
} else if (parseInt(answer4) > 53){
  alert('That is an excessive amount of code, ' + user + '!');
}
