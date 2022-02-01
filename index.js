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

const btn = document.createElement("button");
btn.className = "P5 enjectbtn";
btn.innerHTML = "İmzayı Ekle";
btn.id = "signature";

if (location.href == "https://mail.google.com/mail/u/0/#settings/general") {
  setTimeout(function () {
    if (document.querySelector(".P4")) {
      document.querySelector(".P4").appendChild(btn);
      document
        .getElementById("signature")
        .addEventListener("click", function () {
          chrome.storage.local.get(["html"], function (result) {
            document.getElementById(":2j").innerHTML = result.html;
          });
        });
    }
  }, 8000);
}

if (document.querySelector(".J-at1-auR")) {
  document.querySelector(".J-at1-auR").addEventListener("click", function () {
    document.querySelector(".P4").appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("test");
  btn.addEventListener("click", function () {
    window.document.getElementById("maill").innerHTML = "test";
  });
});
