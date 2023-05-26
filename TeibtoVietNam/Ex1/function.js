function check() {
  var paragraph = document.getElementById("paragraph").value;
  if (paragraph == paragraph.toUpperCase()) {
    alert("All Capital Letter");
  } else if (paragraph == paragraph.toLowerCase()) {
    alert("All Small Letter");
  } else {
    alert("Mix");
  }
}
