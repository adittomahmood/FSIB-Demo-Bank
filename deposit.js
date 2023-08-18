document.getElementById("btn-deposit").addEventListener("click", function () {
  let depositAmount = parseFloat(document.getElementById("deposit").value);
  let previousAmount = parseFloat(
    document.getElementById("total-deposit").innerText
  );
  let currenntAmount = previousAmount + depositAmount;
  document.getElementById("total-deposit").innerText = currenntAmount;
  document.getElementById("deposit").value = "";
});
