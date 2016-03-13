function StopWatch() {

 var startAt = 0;
 var lapTime = 0;

 // Get current time
 var now = function() {
  return (new Date()).getTime();
 };

 // Start or resume
 this.start = function() {
  startAt = startAt ? startAt : now();
  if (startAt) {
   this.viewNone(buttonStart);
   this.viewBlock(buttonStop);
  }
 };

 // Stop or pause
 this.stop = function() {
  lapTime = startAt ? lapTime + now() - startAt : lapTime;
  startAt = 0;
  this.viewBlock(buttonStart);
  this.viewNone(buttonStop);
 };

 // Reset
 this.reset = function() {
  lapTime = startAt = 0;
  this.viewBlock(buttonStart);
  this.viewNone(buttonStop);
 };

 // Duration
 this.duration = function() {
  return lapTime + (startAt ? now() - startAt : 0);
 };

 //Hide and Show buttons
 this.viewNone = function(elem) {
  elem.style.display = 'none';
 }

 this.viewBlock = function(elem) {
  elem.style.display = 'inline-block';
 }
};

var stpWatch = new StopWatch();
var buttonStart;
var buttonReset;
var buttonStop;
var fullTime;
var clocktimer;

function pad(n, width, z) {
 z = z || '0';
 n = n + '';
 return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function formatTime(time) {
 var h = m = s = ms = 0;
 var newTime = '';

 h = Math.floor(time / (60 * 60 * 1000));
 time = time % (60 * 60 * 1000);
 m = Math.floor(time / (60 * 1000));
 time = time % (60 * 1000);
 s = Math.floor(time / 1000);
 ms = time % 1000;

 newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
 return newTime;
}

function show() {
 buttonStart = document.getElementById('start');
 buttonReset = document.getElementById('reset');
 buttonStop = document.getElementById('stop');

 stpWatch.viewNone(buttonStop);

 buttonStart.addEventListener("click", start);
 buttonReset.addEventListener("click", reset);
 buttonStop.addEventListener("click", stop);

 fullTime = document.getElementById('time-zone');
 update();
}

function update() {
 fullTime.innerHTML = formatTime(stpWatch.duration());
}

function start() {
 clocktimer = setInterval("update()", 1);
 stpWatch.start();
}

function stop() {
 stpWatch.stop();
 clearInterval(clocktimer);
}

function reset() {
 stop();
 stpWatch.reset();
 update();
}
