function validateForm() {
  var firstName = document.contactForm.firstName.value;
  var lastName = document.contactForm.lastName.value;
  var email = document.contactForm.email.value;
  var phone = document.contactForm.phone.value;
  var comment = document.contactForm.comment.value;

  var fNameErr = (lNameErr = phoneErr = emailErr = commentErr = true);

  //validating first name
  if (firstName == "") {
    printError("fNameErr", "Please enter your first name.");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(firstName) === false) {
      printError("fNameErr", "Please enter a valid name.");
    } else {
      printError("fNameErr", "");
    }
  }

  //validating last name
  if (lastName == "") {
    printError("lNameErr", "Please enter your last name.");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lastName) === false) {
      printError("lNameErr", "Please enter a valid name.");
    } else {
      printError("lNameErr", "");
    }
  }

  //validating email
  if (email == "") {
    printError("emailErr", "Please enter your email.");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email.");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  //validate mobile
  if (phone == "") {
    printError("phoneErr", "Please enter your phone number.");
  } else {
    var regex = /^[0-9]{10}$/;
    if (regex.test(phone) === false) {
      printError("phoneErr", "Please enter a valid phone number.");
    } else {
      printError("phoneErr", "");
      mobileErr = false;
    }
  }

  //validate content section
  if (coment == "") {
    printError("commentErr", "Please enter some sort of comment to send");
  } else {
    printError("commentErr", "");
    commentErr = false;
  }

  if (fNameErr || lNameErr || phoneErr || emailErr || commentErr == true) {
    return false;
  } else {
    alert("You have submitted the form!");
  }
}

function printError(element, msg) {
  document.getElementById(element).innerHTML = msg;
}
