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
                document.getElementById("ym3").style.display = "block"
                word1()
                
            }
    
        }
    }
    function word1 () {
        var index=0;
       var word=document.getElementById("word0").innerHTML;
       function type(){
           document.getElementById("word1").innerText = word.substring(0,index++);
       }
       setInterval(type, 100);}