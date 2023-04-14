// pulls the current date from day.js and displays it underneath the header
var today = dayjs();
$('#currentDay').text('Today is ' + today.format('MMMM DD, YYYY'));


// gets the current hour and compares to local time, then changes the color
var currentHour = dayjs().hour();
var timeBlocks = document.querySelectorAll('.time-block');
var compareHour;
for(let i = 0; i < timeBlocks.length; i++) {
  compareHour = timeBlocks[i].id.length < 7 ? parseInt(timeBlocks[i].id.slice(-1)) 
  : parseInt(timeBlocks[i].id.slice(-2));
  if (currentHour > compareHour) {
    timeBlocks[i].classList.add('past');
  } else if (currentHour === compareHour) {
    timeBlocks[i].classList.add('present');
  } else {
    timeBlocks[i].classList.add('future');
  }
};


var saveBtn = document.querySelectorAll('.saveBtn');
var userInput = document.querySelectorAll('.description');
var localKeys = [];

// loops through each text area and stores the textarea's id into the localKeys array
for (var j=0; j < userInput.length; j++ ) {
 localKeys.push(userInput[j].id);
 console.log(typeof(userInput[j].value));
}

// saves the user text input to the local storage, for each save button
saveBtn[0].addEventListener('click', function() {
  localStorage.setItem(localKeys[0], userInput[0].value);
});
if(localStorage.getItem(localKeys[0])) userInput[0].textContent = localStorage.getItem(localKeys[0]);

saveBtn[1].addEventListener('click', function() {
  localStorage.setItem(localKeys[1], userInput[1].value);
});
if(localStorage.getItem(localKeys[0])) userInput[1].textContent = localStorage.getItem(localKeys[1]);

saveBtn[2].addEventListener('click', function() {
  localStorage.setItem(localKeys[2], userInput[2].value);
});
if(localStorage.getItem(localKeys[0])) userInput[2].textContent = localStorage.getItem(localKeys[2]);

saveBtn[3].addEventListener('click', function() {
  localStorage.setItem(localKeys[3], userInput[3].value);
});
if(localStorage.getItem(localKeys[3])) userInput[3].textContent = localStorage.getItem(localKeys[3]);

saveBtn[4].addEventListener('click', function() {
  localStorage.setItem(localKeys[4], userInput[4].value);
});
if(localStorage.getItem(localKeys[0])) userInput[4].textContent = localStorage.getItem(localKeys[4]);

saveBtn[5].addEventListener('click', function() {
  localStorage.setItem(localKeys[5], userInput[5].value);
});
if(localStorage.getItem(localKeys[0])) userInput[5].textContent = localStorage.getItem(localKeys[5]);

saveBtn[6].addEventListener('click', function() {
  localStorage.setItem(localKeys[6], userInput[6].value);
});
if(localStorage.getItem(localKeys[0])) userInput[6].textContent = localStorage.getItem(localKeys[6]);

saveBtn[7].addEventListener('click', function() {
  localStorage.setItem(localKeys[7], userInput[7].value);
});
if(localStorage.getItem(localKeys[0])) userInput[7].textContent = localStorage.getItem(localKeys[7]);

saveBtn[8].addEventListener('click', function() {
  localStorage.setItem(localKeys[8], userInput[8].value);
});
if(localStorage.getItem(localKeys[8])) userInput[8].textContent = localStorage.getItem(localKeys[8]);