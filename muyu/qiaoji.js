var gongde = 0
document.getElementById("gongde").innerHTML ="功德:"+gongde
var player = new Audio("https://storage.live.com/items/1E4148EF6D8FD434!1463:/muyu.mp3?authkey=AGO2bUosNacKkZw");
var zishu = Math.round(Math.random()*3);
var zi
if (zishu == 0){
zi = "————敲电子木鱼，成赛博佛祖"
}
if (zishu == 1){
zi = "————敲电子木鱼，见机械佛祖"
}
if (zishu == 2){
zi = "————敲电子木鱼，传赛博真经"
}
if (zishu == 3){
zi = "————敲电子木鱼，娶初音未来"
}
document.getElementById("zi").innerHTML = zi
function qiao(){
    player.currentTime = 0;
    document.getElementById("muyu").style.width ="139px"
    setTimeout(function () {document.getElementById("muyu").style.width ="137px"}, 20)
    setTimeout(function () {document.getElementById("muyu").style.width ="135px"}, 40)
    setTimeout(function () {document.getElementById("muyu").style.width ="133px"}, 60)
    setTimeout(function () {document.getElementById("muyu").style.width ="131px"}, 80)
    setTimeout(function () {document.getElementById("muyu").style.width ="129px"}, 90)
    setTimeout(function () {document.getElementById("muyu").style.width ="127px"}, 100)
    setTimeout(function () {document.getElementById("muyu").style.width ="125px"}, 110)
    setTimeout(function () {document.getElementById("muyu").style.width ="123px"}, 120)
    setTimeout(function () {document.getElementById("muyu").style.width ="121px"}, 130)
    setTimeout(function () {document.getElementById("muyu").style.width ="119px"}, 140)
    setTimeout(function () {document.getElementById("muyu").style.width ="121px"}, 150)
    setTimeout(function () {document.getElementById("muyu").style.width ="123px"}, 160)
    setTimeout(function () {document.getElementById("muyu").style.width ="125px"}, 170)
    setTimeout(function () {document.getElementById("muyu").style.width ="127px"}, 180)
    setTimeout(function () {document.getElementById("muyu").style.width ="129px"}, 190)
    setTimeout(function () {document.getElementById("muyu").style.width ="131px"}, 200)
    setTimeout(function () {document.getElementById("muyu").style.width ="133px"}, 210)
    setTimeout(function () {document.getElementById("muyu").style.width ="135px"}, 220)
    setTimeout(function () {document.getElementById("muyu").style.width ="137px"}, 230)
    gongde = gongde+1
    document.getElementById("gongde").innerHTML ="功德:"+gongde
    player.play()
}
function gui0(){
    gongde = 0
    document.getElementById("gongde").innerHTML ="功德:"+gongde
}
function zuozhe(){
    alert("ko no 苹果味的铁剑da")
}
