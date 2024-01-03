let moniter = document.querySelector(".moniter");
function pianoPlay(node) {
  audio = new Audio("node/" + node + ".mp3");
  audio.play();
  moniter.textContent = node;
  if (node === "C" || node === "G" || node === "D" || node === "F") {
    moniter.style.background = "#FF33B8";
  } else if (node === "FF" || node === "AA" || node == "E") {
    moniter.style.background = "steelblue";
  } else {
    moniter.style.background = "aqua";
  }
}
