//参考
//http://www.pori2.net/js/timer/6.html

function sample() {
    var text = 'Hello World';
    console.log( text );
}
function countUpStart()
{
  setInterval(countUp, 100);

function countUp(){
  // console.log("countUp");
  var min = document.getElementById("min").value;
  var sec = document.getElementById("sec").value;
  if (min=="") min=0;
  min = parseInt(min)

  if (sec=="") sec=0;
  sec= parseInt(sec)

  tmWrite(min*60+sec+1);
}

}
function tmWrite(int)
{
  // console.log("tmWrite");
  int = parseInt(int);
  document.getElementById("min").value=Math.floor(int/60);
  document.getElementById("sec").value=Math.floor(int%60);
}

function changeTime() {
  var time = getTime();
  var timeTextArea = document.getElementById("time");
  timeTextArea.innerHTML=time;
}

function getTime(){
  var date = new Date();
  var month = date.getMonth()+1;
  var d = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return String(month) + "月"+String(d)+"日"+String(hours)+":"+String(minutes)+":"+String(seconds);
}
