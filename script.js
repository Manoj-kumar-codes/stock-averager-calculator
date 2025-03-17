"use strict";

const calculator = document.querySelector(".calculate");
const reset = document.querySelector(".reset");
const resetFun = function () {
  document.getElementById("price1").value = 0;
  document.getElementById("share1").value = 0;
  document.getElementById("price2").value = 0;
  document.getElementById("share2").value = 0;
};
resetFun();
calculator.addEventListener("click", function () {
  const price1 = Number(document.getElementById("price1").value);
  const share1 = Number(document.getElementById("share1").value);
  const price2 = Number(document.getElementById("price2").value);
  const share2 = Number(document.getElementById("share2").value);
  const totalShares = document.getElementById("total-share");
  const totalPrices = document.getElementById("total-price");
  const avgPrices = document.getElementById("total-avg");

  if (!price1 && !share1 && !price2 && !share2) {
    alert(`Don't submit the empty field`);
  } else {
    const avg = (price1 * share1 + price2 * share2) / (share1 + share2);
    const totalShare = share1 + share2;
    const totalAmount = price1 + price2;
    totalShares.textContent = totalShare;
    totalPrices.textContent = totalAmount;
    avgPrices.textContent = avg;
  }
});
reset.addEventListener("click", resetFun);
