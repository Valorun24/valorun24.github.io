"use strict";

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});

// const audio = new Audio();
// audio.src = "assets/audio/BATAS.mp3";
// audio.loop = true;
// audio.play();
// audio.pause();

var audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function replayAudio() {
  audio.currentTime = 0;
  audio.play();
}

const txtElement = ["Explore Journey"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 200);
})();

const txtElement1 = ["Destnations"];
let count1 = 0;
let txtIndex1 = 0;
let currentTxt1 = "";
let words1 = "";

(function ngetik1() {
  if (count1 == txtElement1.length) {
    count1 = 0;
  }

  currentTxt1 = txtElement1[count1];

  words1 = currentTxt1.slice(0, ++txtIndex1);
  document.querySelector(".efek-ngetik1").textContent = words1;

  if (words1.length == currentTxt1.length) {
    count1++;
    txtIndex1 = 0;
  }

  setTimeout(ngetik1, 200);
})();

const txtElement2 = ["Featured Tours"];
let count2 = 0;
let txtIndex2 = 0;
let currentTxt2 = "";
let words2 = "";

(function ngetik2() {
  if (count2 == txtElement2.length) {
    count2 = 0;
  }

  currentTxt2 = txtElement2[count2];

  words2 = currentTxt2.slice(0, ++txtIndex2);
  document.querySelector(".efek-ngetik2").textContent = words2;

  if (words2.length == currentTxt2.length) {
    count2++;
    txtIndex2 = 0;
  }

  setTimeout(ngetik2, 200);
})();

const txtElement3 = ["About Us"];
let count3 = 0;
let txtIndex3 = 0;
let currentTxt3 = "";
let words3 = "";

(function ngetik3() {
  if (count3 == txtElement3.length) {
    count3 = 0;
  }

  currentTxt3 = txtElement3[count3];

  words3 = currentTxt3.slice(0, ++txtIndex3);
  document.querySelector(".efek-ngetik3").textContent = words3;

  if (words3.length == currentTxt3.length) {
    count3++;
    txtIndex3 = 0;
  }

  setTimeout(ngetik3, 200);
})();
// function mulaiaudio() {
//   var play = document.getElementById("btnplay");
//   var mute = document.getElementById("btnplay");

//   play.addEventListener("click", play);
//   mute.addEventListener("click", mute);
// }
