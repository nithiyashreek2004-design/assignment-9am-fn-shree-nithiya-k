document.getElementById("changeTextBtn").onclick = function () {
  document.getElementById("heading").textContent = "Text Changed!";
};

document.getElementById("colorBtn").onclick = function () {
  document.querySelector("p").style.color = "navy blue";
};