"use strict";

const calculator = document.querySelector(".calculate");
const reset = document.querySelector(".reset");
const resetFun = function () {
  document.getElementById("price1").value = "";
  document.getElementById("share1").value = "";
  document.getElementById("price2").value = "";
  document.getElementById("share2").value = "";
};
calculator.addEventListener("click", function () {
  const price1 = Number(document.getElementById("price1").value);
  const share1 = Number(document.getElementById("share1").value);
  const price2 = Number(document.getElementById("price2").value);
  const share2 = Number(document.getElementById("share2").value);

  const totalShares = document.getElementById("total-share");
  const totalPrices = document.getElementById("total-price");
  const avgPrices = document.getElementById("total-avg");

  if (
    document.getElementById("price1").value.trim() === "" ||
    document.getElementById("share1").value.trim() === "" ||
    document.getElementById("price2").value.trim() === "" ||
    document.getElementById("share2").value.trim() === "" ||
    isNaN(price1) ||
    isNaN(share1) ||
    isNaN(price2) ||
    isNaN(share2)
  ) {
    alert("Please enter valid numbers");
    return;
  } else {
    const avg = (price1 * share1 + price2 * share2) / (share1 + share2);
    const totalShare = share1 + share2;
    const totalAmount = price1 * share1 + price2 * share2;
    totalShares.textContent = totalShare;
    totalPrices.textContent = totalAmount;
    avgPrices.textContent = avg;
  }
});
reset.addEventListener("click", function () {
  resetFun();
  document.getElementById("total-share").textContent = 0;
  document.getElementById("total-price").textContent = 0;
  document.getElementById("total-avg").textContent = 0;
});
