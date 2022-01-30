// click button on action page
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("test");
  btn.addEventListener("click", function () {
    window.document.getElementById("maill").innerHTML = "test";
  });
});
