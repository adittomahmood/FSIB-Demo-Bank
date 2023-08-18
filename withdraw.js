document.getElementById("btn-withdraw").addEventListener("click", function () {
  let withdrawAmount = parseFloat(document.getElementById("withdraw").value);
  let currentWithdraw =
    parseFloat(document.getElementById("total-withdraw").innerText) +
    withdrawAmount;
  document.getElementById("total-withdraw").innerText =
    currentWithdraw.toFixed(2);
  let newBalance =
    parseFloat(document.getElementById("total-balance").innerText) -
    withdrawAmount;
  document.getElementById("total-balance").innerText = newBalance;
  document.getElementById("withdraw").value = "";
});
