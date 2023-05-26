var errMessage = "";
// hàm check đã tick acceptance chưa
function checkAcceptance() {
  var btnSubmit = document.getElementById("btnSubmit");
  if (document.getElementById("acceptance").checked == true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
// hàm check các phần input yêu cầu
function checkValidData(paragraph, atribute) {
  if (paragraph == "") {
    errMessage += "<p> Please enter " + atribute + "</p>";
    return;
  }
}
function checkValidEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.com|\.vn)$/.test(email)) {
    return;
  } else {
    errMessage += "<p> Please enter valid emai </p>";
  }
}
// hàm check
function submitForm() {
  errMessage = "";
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  checkValidData(fname, "First Name");
  checkValidData(lname, "Last Name");
  checkValidData(email, "Email");
  checkValidEmail(email);
  document.getElementById("errMessage").innerHTML = errMessage;
  if (errMessage != "") {
    document.getElementById("popupForm").style.display = "block";
  } else {
    document.getElementById("examResult").submit();
  }
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
if (document.getElementById("acceptance").checked == true) {
  btnSubmit.disabled = false;
}
