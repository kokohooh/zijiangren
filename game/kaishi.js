function new_game (){
    document.getElementById("ym1").style.display = "none"
    document.getElementById("ym2").style.display = "block"
    
}




var name0 = window.name
var HP =100
    var MP =100
    //钱
    var qian =1000
    //经验
    var EXP =0
    //法伤
    var INT =5
    //物伤
    var ATN =5
    //防御
    var DEF =5
    //速度
    var DEX =10

document.getElementById("HP").innerHTML="HP:"+HP
    document.getElementById("MP").innerHTML="MP:"+MP
    document.getElementById("EXP").innerHTML="EXP:"+EXP
    document.getElementById("INT").innerHTML="法伤:"+INT
    document.getElementById("ATN").innerHTML="物伤:"+ATN
    document.getElementById("DEF").innerHTML="防御:"+DEF
    document.getElementById("DEX").innerHTML="速度:"+DEX
    document.getElementById("name0").innerHTML= localStorage.name
    function name1 (){
        document.getElementById("namejg").style.display = "none"
        document.getElementById("namecdjg").style.display = "none"
        var name = document.getElementById("name").value;
        localStorage.name=name
        
        
        if(name == "" || name == " " || name == "  " || name == "   "|| name == "    " || name == "     "|| name == "      "|| name == "       "|| name == "        "){
            
            document.getElementById("namejg").style.display = "block"
        }
        else{
            
            if (name.length > 8){
                document.getElementById("namecdjg").style.display = "block"
            }else{
                document.getElementById("name0").innerHTML= localStorage.name
                document.getElementById("ym2").style.display = "none"
                document.getElementById("tou").style.display = "block"
                document.getElementById("ym3").style.display = "block"
                document.getElementById("word0").innerHTML= "你的名字是" + localStorage.name + "，欢迎来到这个我还没想好叫什么名字的游戏"
                word1()
                
            }
    
        }
    }
    function word1 () {
        var index=0;
       var word=document.getElementById("word0").innerHTML;
       function type(){
           document.getElementById("word1").innerText = word.substring(0,index++);
           next()}
       setInterval(type, 250);
       function next (){
        if(document.getElementById("word1").innerHTML== "你的名字是" + localStorage.name + "，欢迎来到这个我还没想好叫什么名字的游戏"){
            document.getElementById("next1").style.display = "block"
        }
       }
   }
    function word2 () {
        var index=0;
       var word=document.getElementById("word2").innerHTML;
       function type(){
           document.getElementById("word3").innerText = word.substring(0,index++);
           next()}
       setInterval(type, 250);
       function next (){
        if(document.getElementById("word3").innerHTML== "这个世界的名字是 (没想好)"){
            word3()
        }
       }
    }
    function word3 () {
        var index=0;
       var word=document.getElementById("word4").innerHTML;
       function type(){
           document.getElementById("word5").innerText = word.substring(0,index++);
           next()}
       setInterval(type, 250);
      /* function next (){
        if(document.getElementById("word5").innerHTML== "你的名字是" + localStorage.name + "，欢迎来到这个我还没想好叫什么名字的游戏"){
            document.getElementById("next1").style.display = "block"
        }
       }
    */}
   function next1 (){
    document.getElementById("ym3").style.display = "none"
    document.getElementById("ym4").style.display = "block"
    document.getElementById("word2").innerHTML ="这个世界的名字是 (没想好)  "
    document.getElementById("word4").innerHTML ="你发现面前有一只史莱姆，你想要：---未完待续"

    word2()

   }
