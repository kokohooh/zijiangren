var xiaoqianqian =14400
var Jochan =10
document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian
function jochan(){
    if(document.getElementById("jozhankai").name == "1"){
        document.getElementById("wen1").innerHTML ="160:1，兑换"
        document.getElementById("shuru").style.display="block"
        document.getElementById("ke").style.display="block"
        document.getElementById("queding").style.display="block"
        document.getElementById("jozhankai").innerHTML = "-"
        document.getElementById("jozhankai").name = "0"
    }
 else{if (document.getElementById("jozhankai").name == "0" ){
    document.getElementById("wen1").innerHTML =""
    document.getElementById("shuru").style.display="none"
    document.getElementById("ke").style.display="none"
    document.getElementById("queding").style.display="none"
    document.getElementById("jozhankai").innerHTML = "+" 
    document.getElementById("jozhankai").name = "1"

}}





}
function queding(){
    var shuliang =document.getElementById("shuru").value;
    var shuliang160 =shuliang * 160
    document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian

    
if(xiaoqianqian<shuliang160){
    document.getElementById("wen1").innerHTML ="钱不够"
document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian

}
else{
    xiaoqianqian = xiaoqianqian-shuliang160
    Jochan=parseInt(Jochan)+parseInt(shuliang)
document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian
   
    document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
}
}
function qianzhankai(){
    if(document.getElementById("qianzhankai").name == "1"){
        document.getElementById("yiju").style.display = "block"
        document.getElementById("han").style.display = "block"
        document.getElementById("qianzhankai").innerHTML = "-"
        document.getElementById("qianzhankai").name = "0"
    }
 else{if (document.getElementById("qianzhankai").name == "0" ){
    document.getElementById("yiju").style.display = "none"
    document.getElementById("han").style.display = "none"
    document.getElementById("qianzhankai").innerHTML = "+" 
    document.getElementById("qianzhankai").name = "1"

}}



}
function daqian(){
    document.getElementById("tdl").style.display = "block"
    xiaoqianqian =xiaoqianqian + 1600
document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian
    


    
}