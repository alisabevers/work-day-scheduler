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


// saves the user text input to the local storage
var saveBtn = document.querySelector('.saveBtn');
var userInput9 = document.querySelectorAll('#textInput9');

  saveBtn.addEventListener('click', function() {
    localStorage.setItem('#textInput9', JSON.stringify(userInput9));
    stringify();
  });

  function stringify() {
    
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
