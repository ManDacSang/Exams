function getUrlParam() {
  const params = new URLSearchParams(window.location.search);
  return params;
}
var fname = getUrlParam().get("fname");
var lname = getUrlParam().get("lname");
var sex = getUrlParam().get("sex");
var email = getUrlParam().get("email");
var country = getUrlParam().get("country");
var language = getUrlParam().get("language");
var phone = getUrlParam().get("phone");
var address = getUrlParam().get("address");

document.getElementById("fname").innerText = fname;
document.getElementById("lname").innerText = lname;
document.getElementById("email").innerText = email;
document.getElementById("sex").innerText = sex;
document.getElementById("phone").innerText = phone;
document.getElementById("address").innerText = address;

document.getElementById("country").innerText = country;
document.getElementById("language").innerText = language;
