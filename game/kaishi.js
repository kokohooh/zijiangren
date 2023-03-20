var first_npc_wenzhi = false
var first_npc_wenzhi_
function new_game (){//按下新游戏
    document.getElementById("ym1").style.display = "none"
    document.getElementById("ym2").style.display = "block"
    
}



var name0 = window.name//名字内容
    //血量
    var HP =100
    //蓝量
    var MP =100
    //钱
    var Morly = 0
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
//显示数值
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
           //如果字符八个内为空 
            document.getElementById("namejg").style.display = "block"
        }
        else{
            
            if (name.length > 8){//如果字符大于八个
                document.getElementById("namecdjg").style.display = "block"
            }else{//游戏开始
                document.getElementById("name0").innerHTML= localStorage.name
                document.getElementById("ym2").style.display = "none"
                document.getElementById("tou").style.display = "block"
                document.getElementById("ym3").style.display = "block"
                document.getElementById("word0").innerHTML= "你的名字是" + localStorage.name + "，欢迎来到这个sb游戏"
                document.onkeydown = keyDown; 
                word1()
                
            }
    
        }
    }
    function word1 () {//文本1
        var index=0;
       var word=document.getElementById("word0").innerHTML;
       function type(){
           document.getElementById("word1").innerText = word.substring(0,index++);//文本逐渐出现
           next()//判断是否结束
        }
       setInterval(type, 250);
       function next (){//判断结束
        if(document.getElementById("word1").innerHTML== document.getElementById("word0").innerHTML){
            document.getElementById("next1").style.display = "block"
        }
       }
   }
    function word2 () {//文本2
        var index=0;
       var word=document.getElementById("word2").innerHTML;
       function type(){
           document.getElementById("word3").innerText = word.substring(0,index++);//文本逐渐出现
           next()//判断是否结束
        }
       setInterval(type, 250);
       function next (){
        if(document.getElementById("word3").innerHTML== document.getElementById("word2").innerHTML){
            
        }
       }
    }
    function word3 () {
        
        if(first_npc_wenzhi){
            document.getElementById("word5").innerHTML = ""
            first_npc_wenzhi_ =false
        }
        else{
            var index=0;
            var word=document.getElementById("word4").innerHTML;
            function type(){
                document.getElementById("word5").innerText = word.substring(0,index++);
             }
            setInterval(type, 250);
            first_npc_wenzhi = true
            first_npc_wenzhi_ = true
            if(first_npc_wenzhi_ == false){
                first_npc_wenzhi = false
            }
                function next(){
                if (document.getElementById("word5").innerHTML == document.getElementById("word4").innerHTML) {
                    
                }
            }
        }
      
      /* function next (){
        if(document.getElementById("word5").innerHTML== "你的名字是" + localStorage.name + "，欢迎来到这个我还没想好叫什么名字的游戏"){
            document.getElementById("next1").style.display = "block"
        }
       }
    */}
   function next1 (){
    document.getElementById("ym3").style.display = "none"
    document.getElementById("ym4").style.display = "block"
    document.getElementById("word2").innerHTML = "这里是异世界，你要……"

    //

    word2()

   }
