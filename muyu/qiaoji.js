var yy = "音游人模式"
document.getElementById("moshi").innerHTML = yy
var qihuan =0
//功德准备
var gongde = 0
document.getElementById("gongde").innerHTML ="功德:"+gongde
//准备音乐
var player = new Audio("https://storage.live.com/items/1E4148EF6D8FD434!1463:/muyu.mp3?authkey=AGO2bUosNacKkZw");
var player_lan = new Audio("http://storage.live.com/items/1E4148EF6D8FD434!1466:/tap(Au2218389).aac?authkey=AGO2bUosNacKkZw");
//随机字
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
//敲木鱼
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
//重新加载效果
function musicxiaoguo(){
if(document.getElementById("xiaoguo").style.display == 'none'){
    document.getElementById("xiaoguo").style.display = 'block'
}
wuizi()
document.getElementById("xiaoguo").src = document.getElementById("xiaoguo").src 

}
//敲击蓝键
function lanqiao(){
    player_lan.currentTime = 0;
musicxiaoguo()
    gongde = gongde+1
    document.getElementById("gongde").innerHTML ="功德:"+gongde
    player_lan.play()
}
//点击功德清0
function gui0(){
    gongde = 0
    document.getElementById("gongde").innerHTML ="功德:"+gongde
}
//点击作者
function zuozhe(){
    alert("ko no 苹果味的铁剑da")
}
//点击音游人模式按键
function musicgame() {
    if (qihuan == 1){
        qihuan2()
        }
   else{
        qihuan1()
    }
    
}
//切换成音游人模式
function qihuan1(){
    qihuan = 1
    document.getElementById("mu").style.display = "none"
    document.getElementById("lan").style.display = "block"
    yy = "木鱼模式"
    document.getElementById("moshi").innerHTML = yy
    var obj = document.getElementById('lanjian')

var x = obj.getBoundingClientRect().left;

var y = obj.getBoundingClientRect().top;
var a = x - 35
var b = y - 93
document.getElementById("xiaoguo").style.left = a + "px" 
document.getElementById("xiaoguo").style.top = b + "px" 
document.getElementById("xiaoguo").style.display = 'none'
window.x = x
window.y = y
}
//切换成木鱼模式
function qihuan2(){
    qihuan = 0
    document.getElementById("mu").style.display = "block"
    document.getElementById("lan").style.display = "none"
    yy = "音游人模式"
document.getElementById("moshi").innerHTML = yy
}
//效果位置变化
function wuizi(){
    
    if (window.x !== document.getElementById('lanjian').getBoundingClientRect().left){
        x = document.getElementById('lanjian').getBoundingClientRect().left;
y = document.getElementById('lanjian').getBoundingClientRect().top;
a = x - 35
b = y - 93
document.getElementById("xiaoguo").style.left = a + "px" 
document.getElementById("xiaoguo").style.top = b + "px" 
    }
if (window.y !== document.getElementById('lanjian').getBoundingClientRect().top){
    x = document.getElementById('lanjian').getBoundingClientRect().left;
y = document.getElementById('lanjian').getBoundingClientRect().top;
a = x - 35
b = y - 93
document.getElementById("xiaoguo").style.left = a + "px" 
document.getElementById("xiaoguo").style.top = b + "px" 
}
}
