// audio player 

const display = document.getElementById("clock");
const audio = new Audio("mixkit-alert-alarm-1005.wav");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

//Set Alarm function

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}
setInterval(()=>{
  const date = new Date();

  const hour = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
  display.innerText = hour + " : " + minutes + " : " + seconds;
}, 1000);


function setAlarm(value) {
  alarmTime = value;
}

// Set Alarm  Time

function setTime() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(function() {
        audio.play();
      }, timeout);
      alert("Alarm set");
    }
  }
}

//  Clear the Alarm
function clearAlarm() {
  audio.pause();
 
  if (alarmTimeout) {
       clearTimeout(alarmTimeout);
       alert("Alarm cleared");
  }
}