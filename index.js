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

function createBtn(className, text, id) {
  const btn = document.createElement("button");
  btn.className = className;
  btn.innerHTML = text;
  btn.id = id;
  return btn;
}

function loader() {
  console.log("çalıştı loader");
  const div = document.createElement("div");
  div.className = "loader";
  div.innerHTML = `<div class="text">Lütfen Bekleyin İmza Oluşturuluyor</div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="shape-rendering: auto;" width="250px" height="250px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <circle cx="50" cy="50" r="16" stroke-width="2" stroke="#fff" stroke-dasharray="25.132741228718345 25.132741228718345" fill="none" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
  </circle>`;
  document.body.appendChild(div);
}

function loaderdone() {
  const div = document.getElementsByClassName("loader")[0];
  div.parentNode.removeChild(div);
}

function state() {
  console.log("çalıştı");
  if (location.href == "https://mail.google.com/mail/u/0/#settings/general") {
    if (document.querySelector(".P4")) {
      document
        .querySelector(".P4")
        .appendChild(createBtn("P5 enjectbtn", "İmzayı Ekle", "signature"));
      document
        .getElementById("signature")
        .addEventListener("click", function () {
          chrome.storage.local.get(["html"], function (result) {
            document.getElementById(":2j").innerHTML = result.html;
          });
        });
    } else {
      if (document.querySelector(".P7")) {
        document
          .querySelector(".P7")
          .appendChild(
            createBtn("P5 enjectbtn", "Otomatik İmzayı Ekle", "signatureOTO")
          );
        oto();
      } else {
        setTimeout(back, 3000);
      }
    }
  }
}

function oto() {
  if (document.getElementById("signatureOTO")) {
    document
      .getElementById("signatureOTO")
      .addEventListener("click", function () {
        loader();
        document.getElementById(":2p").click();
        setTimeout(function () {
          if(document.getElementById(":db.in")){
            document.getElementById(":db.in").value = "Apti İmza";
          }else if(document.getElementById(":dc.in")){
            document.getElementById(":dc.in").value = "Apti İmza";
          }else{
            alert("İmza Eklenemedi Tekrar Deneyin");
          }
          setTimeout(function () {
            document.querySelector(".J-at1-auR").click();
            loaderdone();
            state();
          }, 1000);
        }, 1000);
      });
  }
}

function back() {
  state();
}

state();
