var xiaoqianqian =14400
var Jochan =10
document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian

function jo1(){
    if(xiaoqianqian<160){
        document.getElementById("win2").innerHTML = "钱不够"

    }
    else{
        xiaoqianqian= xiaoqianqian-160
            Jochan= Jochan + 1
            document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
            document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian
    }
}

function jo10(){
    if(xiaoqianqian<1600){
        document.getElementById("win2").innerHTML = "钱不够"

    }
    else{
        xiaoqianqian= xiaoqianqian-1600
            Jochan= Jochan + 10
            document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
            document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian

    }
}

function jo90(){
    if(xiaoqianqian<14400){
        document.getElementById("win2").innerHTML = "钱不够"

    }
    else{
        xiaoqianqian= xiaoqianqian-14400
            Jochan= Jochan + 90
            document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
            document.getElementById("qian").innerHTML ="小钱钱："+ xiaoqianqian
    }
}
function jochan(){
    if(document.getElementById("jozhankai").name == "1"){
        document.getElementById("wen1").innerHTML ="160:1，兑换"
        document.getElementById("huan1").style.display="block"
        document.getElementById("huan10").style.display="block"
        document.getElementById("huan90").style.display="block"
        document.getElementById("jozhankai").innerHTML = "-"
        document.getElementById("jozhankai").name = "0"
    }
 else{if (document.getElementById("jozhankai").name == "0" ){
    document.getElementById("wen1").innerHTML =""
    document.getElementById("huan1").style.display="none"
    document.getElementById("huan10").style.display="none"
    document.getElementById("huan90").style.display="none"
    document.getElementById("jozhankai").innerHTML = "+" 
    document.getElementById("jozhankai").name = "1"

}}}

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
