// Get the modal
var modal = document.querySelector(".modal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.classList.add('modal-open');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove('modal-open');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var form = document.getElementById("form");
form.onsubmit = function() {
  // validate form
  if (formIsValid()) {
    // form is valid, submit it
    return true;
  } else {
    // form is invalid, prevent submission
    return false;
  }
}

function formIsValid() {
  // check that name and email fields are not empty
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name == "" || email == "") {
    alert("Please enter your name and email.");
    return false;
  }
  return true;
}
function validateForm() {
  // Validate the full name field
  var x = document.forms["myForm"]["fullName"].value;
  var pattern = /^[a-zA-Z\s]+$/;
  if (x == "" || !x.match(pattern)) {
    alert("Full name must contain only letters and spaces");
    return false;
  }

  // Validate the email field
  var y = document.forms["myForm"]["email"].value;
  var pattern = /@gmail\.com$/;
  if (y == "" || !y.match(pattern)) {
    alert("Email must end with @gmail.com");
    return false;
  }

  // If both fields are valid, submit the form
  return true;
}
