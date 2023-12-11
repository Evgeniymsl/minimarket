function openModal() {
  document.getElementById("myModal").style.display = "flex";
  document.getElementById("modal-content").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("modal-content").style.display = "none";
}

function checkLogin() {
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  if (login === "admin" && password === "admin") {
    window.location.href = "../admin-page/admin-page.html";
  } else {
    window.location.href = "../entrance/sign-in-page.html";
  }
}

function notRegis() {
  console.log("lox");
}