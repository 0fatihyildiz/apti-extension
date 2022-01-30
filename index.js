if (document.getElementById("sendGmail")) {
  document.getElementById("sendGmail").addEventListener("click", function () {
    chrome.storage.local.set(
      {
        html: document.getElementById("maill").innerHTML,
      },
      function () {
        location.href = "https://mail.google.com/mail/u/0/#settings/general";
      }
    );
  });
}

console.log(location.href);

// random key
const random = Math.random().toString(36).substring(7);
console.log(random);

if (location.href == "https://mail.google.com/mail/u/0/#settings/general") {
  chrome.storage.local.get(["html"], function (result) {
    if (document.getElementById(":2j")) {
      document.getElementById(":2j").innerHTML = result.html;
    } else {
      console.error("no element found");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("test");
  btn.addEventListener("click", function () {
    window.document.getElementById("maill").innerHTML = "test";
  });
});
