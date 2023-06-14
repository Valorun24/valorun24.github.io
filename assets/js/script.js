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

function playRandomMusic() {
  var audio = document.getElementById("myAudio");
  var sources = audio.getElementsByTagName("source");
  var randomIndex = Math.floor(Math.random() * sources.length);
  var randomSource = sources[randomIndex].src;

  audio.src = randomSource;
  audio.load();
  audio.play();
}

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

(function () {
  "use strict";

  var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    W = (canvas.width = window.innerWidth),
    H = (canvas.height = window.innerHeight),
    maxP = 3500,
    minP = 3000,
    fireworks = [];

  function tick() {
    var newFireworks = [];
    ctx.clearRect(0, 0, W, H);

    fireworks.forEach(function (firework) {
      firework.draw();
      if (!firework.done) newFireworks.push(firework);
    });

    fireworks = newFireworks;
    window.requestAnimationFrame(tick);
  }

  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }

  Vector.prototype = {
    constructor: Vector,

    add: function (vector) {
      this.x += vector.x;
      this.y += vector.y;
    },

    diff: function (vector) {
      var target = this.copy();
      return Math.sqrt((target.x -= vector.x) * target.x + (target.y -= vector.y) * target.y);
    },

    copy: function () {
      return new Vector(this.x, this.y);
    },
  };

  var colors = [
    ["rgba(179,255,129,", "rgba(0,255,0,"], //green / white
    ["rgba(0,0,255,", "rgba(100,217,255,"], //blue / cyan
    ["rgba(255,0,0,", "rgba(255,255,0,"], //red / yellow
    ["rgba(145,0,213,", "rgba(251,144,204,"], //purple / pink
  ];

  function Firework(start, target, speed) {
    this.start = start;
    this.pos = this.start.copy();
    this.target = target;
    this.spread = Math.round(Math.random() * (maxP - minP)) + minP;
    this.distance = target.diff(start);
    this.speed = speed || Math.random() * 10 + 20;
    this.angle = Math.atan2(target.y - start.y, target.x - start.x);
    this.velocity = new Vector(Math.cos(this.angle) * this.speed, Math.sin(this.angle) * this.speed);

    this.particals = [];
    this.prevPositions = [];

    var colorSet = colors[Math.round(Math.random() * (colors.length - 1))];

    for (var i = 0; i < this.spread; i++) {
      this.particals.push(new Partical(target.copy(), colorSet));
    }
  }

  Firework.prototype = {
    constructor: Firework,

    draw: function () {
      var last = this.prevPositions[this.prevPositions.length - 1] || this.pos;

      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(this.pos.x, this.pos.y);
      ctx.strokeStyle = "rgba(255,255,255,.7)";
      ctx.stroke();

      this.update();
    },

    update: function () {
      if (this.start.diff(this.pos) >= this.distance) {
        var newParticals = [];
        this.particals.forEach(function (partical) {
          partical.draw();
          if (!partical.done) newParticals.push(partical);
        });

        this.particals = newParticals;
        this.prevPositions = [];

        if (!newParticals.length) this.done = true;
      } else {
        this.prevPositions.push(this.pos.copy());

        if (this.prevPositions.length > 8) {
          this.prevPositions.shift();
        }

        this.pos.add(this.velocity);
      }
    },
  };

  function Partical(pos, colors) {
    this.pos = pos;
    this.ease = 0.2;
    this.speed = Math.random() * 6 + 2;
    this.gravity = Math.random() * 3 + 0.1;
    this.alpha = 0.8;
    this.angle = Math.random() * (Math.PI * 2);
    this.color = colors[Math.round(Math.random() * (colors.length - 1))];
    this.prevPositions = [];
  }

  Partical.prototype = {
    constructor: Partical,

    draw: function () {
      var last = this.prevPositions[this.prevPositions.length - 1] || this.pos;

      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(this.pos.x, this.pos.y);
      ctx.strokeStyle = this.color + this.alpha + ")";
      ctx.stroke();

      this.update();
    },

    update: function () {
      if (this.alpha <= 0) {
        this.done = true;
      } else {
        this.prevPositions.push(this.pos.copy());

        if (this.prevPositions.length > 10) this.prevPositions.shift();
        if (this.speed > 1) this.speed -= this.ease;

        this.alpha -= 0.01;
        this.gravity += 0.01;

        this.pos.add({
          x: Math.cos(this.angle) * this.speed,
          y: Math.sin(this.angle) * this.speed + this.gravity,
        });
      }
    },
  };

  function addFirework(target) {
    var startPos = new Vector(W / 2, H);
    target = target || new Vector(Math.random() * W, Math.random() * (H - 300));
    fireworks.push(new Firework(startPos, target));
  }

  canvas.addEventListener(
    "click",
    function (e) {
      addFirework(new Vector(e.clientX, e.clientY));
      playsound();
    },
    false
  );

  function playsound() {
    var sound = new Audio("assets/audio/petasanfix.mp3");
    sound.play();
  }

  function randomFirework() {
    addFirework();
    window.setTimeout(randomFirework, Math.random() * 500);
  }

  tick();
  randomFirework();
})();
