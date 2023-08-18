document.getElementById("btn-submit").addEventListener("click", function () {
  let emailfield = document.getElementById("username").value;
  let passfield = document.getElementById("password").value;
  let errorModal = document.getElementById("errorModal");
  let closeModalBtn = document.getElementById("closeModalBtn");

  if (emailfield === "adittomahmood@gmail.com" && passfield === "aditto123") {
    window.location.href = "bank.html";
  } else {
    errorModal.classList.remove("hidden");
  }

  closeModalBtn.addEventListener("click", function () {
    errorModal.classList.add("hidden");
  });
});
