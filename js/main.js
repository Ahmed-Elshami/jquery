$(".all").animate({"width":"100%"},5000)
$(".all").animate({"height":window.innerHeight},3000,function(){
    $(".all h1").slideDown(2000,function(){
        $(".memper").slideDown(2000)
    })
    })

////////////////////////////////////////
// عمل تاريخ اليوم

var date= new Date();
var today=document.getElementById("today")
var days=["Sunday","Monday","Tuesday","Wendesday","Thursday","friday","Saterday"];
today.innerHTML=`Today Is ${days[date.getDay()]}`
//////////////////////

//عمل ساعة رقمية

function getCurrentTime(){
  var date= new Date();
  var clock=document.getElementById("clock")
  clock.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  setTimeout(getCurrentTime,1000)

}
getCurrentTime()




// $(".sup-img").click(function(){
//   let currentSrc= $(this).attr("src");
//   $(".main-img").attr("src",currentSrc)
// })