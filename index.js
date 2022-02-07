window.onpopstate = function () {
  if (
    document.location == "https://mail.google.com/mail/u/0/#settings/general"
  ) {
    location.reload();
  }
};

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
  const div = document.createElement("div");
  div.className = "loader";
  div.innerHTML = `<div class="text">Lütfen Bekleyin</div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="shape-rendering: auto;" width="250px" height="250px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <circle cx="50" cy="50" r="16" stroke-width="2" stroke="#fff" stroke-dasharray="25.132741228718345 25.132741228718345" fill="none" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
  </circle>`;
  document.body.appendChild(div);
}

localStorage.setItem("stateSave", false);

function save() {
  const div = document.createElement("div");
  div.className = "savemodal";
  div.innerHTML = `<div class="text">Lütfen Kaydetmek için "Boşluk" tuşuna basın</div>`;
  localStorage.setItem("stateSave", true);
  document.body.appendChild(div);
}


document.onkeydown = function(e){
  e = e || window.event;
  var key = e.which || e.keyCode;
  if(key===32){
    console.log(localStorage.getItem("stateSave"));
    if(localStorage.getItem("stateSave")=="true"){
      console.log("save");
      localStorage.setItem("stateSave", false);
      document.querySelector(".savemodal").remove();
      document.getElementById(":2j").focus();
      setTimeout(function(){
        document.getElementById(":3g").click();
      },1000);
    }
  }
}


function loaderdone() {
  const div = document.getElementsByClassName("loader")[0];
  div.parentNode.removeChild(div);
}

function state() {
  if (document.querySelectorAll(".Ic")[1]) {
    document.querySelectorAll(".Ic")[1].addEventListener("click", function () {
      loader();
      setTimeout(function () {
        loaderdone();
        if (document.querySelector(".J-at1-auR")) {
          document
            .querySelector(".J-at1-auR")
            .addEventListener("click", function () {
              setTimeout(state, 1000);
            });
        }
      }, 1000);
    });
  }

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
            save();
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
        if(document.getElementById(":2p")){
          document.getElementById(":2p").click();
        }
        setTimeout(function () {
          if (document.getElementById(":db.in")) {
            document.getElementById(":db.in").value = "Apti İmza";
          } else if (document.getElementById(":dc.in")) {
            document.getElementById(":dc.in").value = "Apti İmza";
          } else {
            alert("İmza Eklenemedi Tekrar Deneyin");
            location.reload();
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
