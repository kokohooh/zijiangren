var baodi = 0
var zibaodi = 0
localStorage.baodi = baodi
var gailitisheng = 0
function yichou() {
    if(Jochan<1){
        document.getElementById("win2").innerHTML = "jo缠之⚪不足"
        if(xiaoqianqian<160){
            document.getElementById("win2").innerHTML = "jo缠之⚪不足。余额也不足，点击左上角+增加余额"
        }
    }else{
        baodi = baodi + 1
        zibaodi = zibaodi + 1
        Jochan = Jochan - 1
        
        document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
        console.log(baodi);
        var canvas = document.getElementById('mc');
    
        // 获取在canvas上绘图的CanvasRenderingContext2D对象
        var ctx = canvas.getContext('2d');
    
        // 设置填充颜色
        ctx.fillStyle = "dodgerblue";
        // 填充一个矩形
        donghua1()
    }
   
    function donghua1() {
        document.getElementById("chou").style.display = "none"
        document.getElementById("shichou").style.display = "none"
        setTimeout(function () { ctx.fillRect(20, 20, 40, 40) }, 1000)
        setTimeout(function () { ctx.fillRect(40, 20, 40, 40) }, 1250)
        setTimeout(function () { ctx.fillRect(60, 20, 40, 40) }, 1500)
        setTimeout(function () { ctx.fillRect(80, 20, 40, 40) }, 1750)
        setTimeout(function () { ctx.fillRect(100, 20, 40, 40) }, 2000)
        setTimeout(function () { ctx.fillRect(120, 20, 40, 40) }, 2250)
        setTimeout(function () { ctx.fillRect(140, 20, 40, 40) }, 2500)
        setTimeout(function () { ctx.fillRect(160, 20, 40, 40) }, 2750)
        setTimeout(function () { ctx.fillRect(180, 20, 40, 40) }, 3000)
        setTimeout(function () { ctx.fillRect(200, 20, 40, 40) }, 3250)
        setTimeout(function () { ctx.fillRect(220, 20, 40, 40) }, 3500)
        setTimeout(function () { ctx.fillRect(240, 20, 40, 40) }, 3750)
        setTimeout(function () { ctx.fillRect(260, 20, 20, 40) }, 4000)
        setTimeout(function () { ctx.fillRect(280, 20, 20, 40) }, 4250)
        setTimeout(function () { ctx.fillRect(300, 20, 40, 40) }, 4500)
        setTimeout(function () { gailv() }, 4500)

        function gailv() {
            var Probability
            if(baodi > 70){
                gailitisheng =baodi- 70 
            }
            Probability = Math.round(Math.random() * 1000);
            console.log(Probability);
           
            if (Probability > 950) {
                ctx.fillStyle = "Purple";
                //出紫
            }
            if (Probability > gailitisheng*16 && Probability < 950) {
                ctx.fillStyle = "blue";
                //出蓝
            }
            if (Probability < gailitisheng*47+16//1.6%概率
            ) {
                ctx.fillStyle = "yellow";
                baodi = baodi - 90
                gailitisheng = 0
                //出金
            }
            if (zibaodi > 9)
            {
                ctx.fillStyle = "Purple";
                zibaodi = zibaodi - 10
                //紫保底
            }
            if (baodi > 89)
            {
                ctx.fillStyle = "yellow";
                baodi = baodi - 90;
                gailitisheng = 0;
                //金保底
            }
           
            setTimeout(function () { ctx.fillRect(330, 20, 20, 40) }, 250)
            setTimeout(function () { ctx.fillRect(330, 20, 40, 40) }, 500)
            
           

            setTimeout(function () { document.getElementById("guo") }, 1000)
            setTimeout(function () { document.getElementById("guo").style.display = "block"}, 500)
           



            function clear() {
                canvas.width = canvas.width
            }
        }

    }

}
function shilian() {
    if(Jochan<10){
        document.getElementById("win2").innerHTML = "jo缠之⚪不足"
        if(xiaoqianqian<160){
            document.getElementById("win2").innerHTML = "jo缠之⚪不足。余额也不足，点击左上角+增加余额"
        }
    }else{

    
    Jochan = Jochan -10
    document.getElementById("JO").innerHTML ="Jo缠之⚪："+ Jochan
    
    var canvas = document.getElementById('mc');
    var canva = document.getElementById('c');

    // 获取在canvas上绘图的CanvasRenderingContext2D对象
    var ctx = canvas.getContext('2d');
    var budaochu = canva.getContext('2d');

    // 设置填充颜色
    ctx.fillStyle = "dodgerblue";
    // 填充一个矩形
    donghua1()
    function donghua1() {
        document.getElementById("chou").style.display = "none"
        document.getElementById("shichou").style.display = "none"
        setTimeout(function () {
            gailv();
            localStorage.s1 = localStorage.jieguo
        }, 0)
        setTimeout(function () {
            gailv();
            localStorage.s2 = localStorage.jieguo
        }, 100)
        setTimeout(function () {
            gailv();
            localStorage.s3 = localStorage.jieguo
        }, 200)
        setTimeout(function () {
            gailv();
            localStorage.s4 = localStorage.jieguo
        }, 300)
        setTimeout(function () {
            gailv();
            localStorage.s5 = localStorage.jieguo
        }, 400)
        setTimeout(function () {
            gailv();
            localStorage.s6 = localStorage.jieguo
        }, 500)
        setTimeout(function () {
            gailv();
            localStorage.s7 = localStorage.jieguo
        }, 600)
        setTimeout(function () {
            gailv();
            localStorage.s8 = localStorage.jieguo
        }, 700)
        setTimeout(function () {
            gailv();
            localStorage.s9 = localStorage.jieguo
        }, 800)
        setTimeout(function () {
            gailv();
            localStorage.s10 = localStorage.jieguo
        }, 900)
        setTimeout(function () { ctx.fillRect(20, 20, 40, 40) }, 1000)
        setTimeout(function () { ctx.fillRect(40, 20, 40, 40) }, 1250)
        setTimeout(function () { ctx.fillRect(60, 20, 40, 40) }, 1500)
        setTimeout(function () { ctx.fillRect(80, 20, 40, 40) }, 1750)
        setTimeout(function () { ctx.fillRect(100, 20, 40, 40) }, 2000)
        setTimeout(function () { ctx.fillRect(120, 20, 40, 40) }, 2250)
        setTimeout(function () { ctx.fillRect(140, 20, 40, 40) }, 2500)
        setTimeout(function () { ctx.fillRect(160, 20, 40, 40) }, 2750)
        setTimeout(function () { ctx.fillRect(180, 20, 40, 40) }, 3000)
        setTimeout(function () { ctx.fillRect(200, 20, 40, 40) }, 3250)
        setTimeout(function () { ctx.fillRect(220, 20, 40, 40) }, 3500)
        setTimeout(function () { ctx.fillRect(240, 20, 40, 40) }, 3750)
        setTimeout(function () { ctx.fillRect(260, 20, 20, 40) }, 4000)
        setTimeout(function () { ctx.fillRect(280, 20, 20, 40) }, 4250)
        setTimeout(function () { ctx.fillRect(300, 20, 40, 40) }, 4500)
        setTimeout(function () { shilianpanduan() }, 4500)
    }
        
        function gailv() {
            var Probability
            Probability = Math.round(Math.random() * 1000);
            gailitisheng = baodi-70
           
            if (Probability > 950) {
               budaochu.fillStyle = "Purple";
               baodi = baodi +1
               zibaodi = 0
                //出紫
            }
            if (Probability > gailitisheng*16 && Probability < 950) {
               budaochu.fillStyle = "blue";
               baodi = baodi +1
               zibaodi = zibaodi +1
            }
            if (Probability < gailitisheng*47 + 16//1.6%概率
            ) {
               budaochu.fillStyle = "yellow";
               baodi = 0 
               gailitisheng = 0
               zibaodi = zibaodi +1
                //出金
            }
            if (zibaodi > 9)
            {
                budaochu.fillStyle = "Purple";
                zibaodi = zibaodi - 10
                
                //紫色保底
            }
            if (baodi > 89)
            {
                budaochu.fillStyle = "yellow";
                gailitisheng = 0
                baodi = baodi - 90
                zibaodi = zibaodi +1
                //金保底
            }
            localStorage.jieguo =budaochu.fillStyle
            console.log(Probability);
        }
        function shilianpanduan(){
            var zisi
            var jin
            if(    localStorage.s1 == "#800080"
                 ||localStorage.s2 == "#800080"
                 ||localStorage.s3 == "#800080"
                 ||localStorage.s4 == "#800080"
                 ||localStorage.s5 == "#800080"
                 ||localStorage.s6 == "#800080"
                 ||localStorage.s7 == "#800080"
                 ||localStorage.s8 == "#800080"
                 ||localStorage.s9 == "#800080"
                 ||localStorage.s10== "#800080")
            {
                zisi = true
            }
            else{
                zisi =false
            }
            if(    localStorage.s1 == "#ffff00"
                 ||localStorage.s2 == "#ffff00"
                 ||localStorage.s3 == "#ffff00"
                 ||localStorage.s4 == "#ffff00"
                 ||localStorage.s5 == "#ffff00"
                 ||localStorage.s6 == "#ffff00"
                 ||localStorage.s7 == "#ffff00"
                 ||localStorage.s8 == "#ffff00"
                 ||localStorage.s9 == "#ffff00"
                 ||localStorage.s10== "#ffff00")
            {
                jin = true
            }
            else{
                jin =false
            }
            if(jin == true){
                ctx.fillStyle = "yellow";
                document.getElementById("win2").innerHTML = "出金了"
                baodi = 0
            }
            if(zisi == true){
                ctx.fillStyle = "purple";
                document.getElementById("win2").innerHTML = "出紫了"
            }
            if(jin == true && zisi == true){
                ctx.fillStyle = "yellow";
                document.getElementById("win2").innerHTML = "出金了"
                baodi = 0
            }
            if(jin == false && zisi == false){
                ctx.fillStyle = "blue";
            }
            setTimeout(function () { ctx.fillRect(330, 20, 20, 40) }, 250)
            setTimeout(function () { ctx.fillRect(330, 20, 40, 40) }, 500)
            setTimeout(function () { document.getElementById("tiaoshi").innerHTML = baodi}, 500)
            setTimeout(function () { document.getElementById("guo").style.display = "block"}, 500)
            
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s1
                ctx.fillRect(30, 100, 30, 40) 
            }, 600)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s2
                ctx.fillRect(110, 100, 30, 40) 
            }, 700)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s3
                ctx.fillRect(180, 100, 30, 40) 
            }, 800)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s4
                ctx.fillRect(250, 100, 30, 40) 
            }, 900)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s5
                ctx.fillRect(320, 100, 30, 40) 
            }, 1000)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s6
                ctx.fillRect(30, 220, 30, 40) 
            }, 1100)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s7
                ctx.fillRect(110, 220, 30, 40) 
            }, 1200)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s8
                ctx.fillRect(180, 220, 30, 40) 
            }, 1300)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s9
                ctx.fillRect(250, 220, 30, 40) 
            }, 1400)
            setTimeout(function () { 
                ctx.fillStyle = localStorage.s10
                ctx.fillRect(320, 220, 30, 40) 
            }, 1500)


           
           
         
        }
        
        
    }
}
function gu(){
    
    setTimeout(function () { clear() }, 0)
    setTimeout(function () { document.getElementById("guo").style.display = "none"}, 0)
    
    setTimeout(function () { document.getElementById("chou").style.display = "block" }, 0)
    setTimeout(function () { document.getElementById("shichou").style.display = "block" }, 0)
    setTimeout(function () { document.getElementById("kuangjia").style.display = "flex" }, 0)
    function clear() {
        var canvas = document.getElementById('mc');
    var ctx = canvas.getContext('2d');
    
    canvas.width = canvas.width
    }
}
