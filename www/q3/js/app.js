function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Invalid email.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateDescription() {
  var desc = document.getElementById("description").value;

  if (desc == ''){
    alert("Empty Description");

    return false;
  }

  return true;
}

function validateFile() {
  var avatarImage = document.getElementById("avatarImage").value;

  if (avatarImage == ''){
    alert("Empty File");

    return false;
  }

  return true;
}
function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateDescription()) {
    return false;
  }

  if (!validateFile())) {
    return false;
  }

  return true;
}
