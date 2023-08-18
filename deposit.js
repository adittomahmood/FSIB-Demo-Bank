document.getElementById("btn-deposit").addEventListener("click", function () {
  let depositAmount = parseFloat(document.getElementById("deposit").value);
  let previousAmount = parseFloat(
    document.getElementById("total-deposit").innerText
  );
  let currentAmount = previousAmount + depositAmount;
  document.getElementById("total-deposit").innerText = currentAmount.toFixed(2);
  document.getElementById("deposit").value = "";
  let currentBalance =
    parseFloat(document.getElementById("total-balance").innerText) +
    depositAmount;
  document.getElementById("total-balance").innerText =
    currentBalance.toFixed(2);
});
