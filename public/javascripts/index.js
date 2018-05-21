var timer = null;

function reset(){
  var min = document.getElementById("min").value = "0";
  var sec = document.getElementById("sec").value = "0";
}

function stopTimer(){
  document.getElementById("timerBtn").value = "stop";
  clearInterval(timer);
}

function countUpStartOrStop()
{
  if (!timer){  //timerがnullじゃなければ、スタート
    timer = setInterval(countUp, 100);
    function countUp(){
      // console.log("countUp");
      document.getElementById("timerBtn").value = "stop";
      var min = document.getElementById("min").value;
      var sec = document.getElementById("sec").value;
      if (min=="") min=0;
      min = parseInt(min)

      if (sec=="") sec=0;
      sec= parseInt(sec)

      tmWrite(min*60+sec+1);
    }
  }else{  //timerがnullだったらストップ
    clearInterval(timer);
    timer = null;
    document.getElementById("timerBtn").value = "start";
  }
}

function tmWrite(time)
{
  // console.log("tmWrite");
  time = parseInt(time);
  document.getElementById("min").value=Math.floor(time/60);
  document.getElementById("sec").value=Math.floor(time%60);
}
