
   var fx = "left";//创建方向值 默认左
   var zhengfu = "+";//方向正负值 
  var box = document.getElementById("box");  // 获取页面元素的引用指针
   box.style.position = "absolute";  // 色块绝对定位
   box.style.width = "20px";  // 色块宽度
   box.style.height = "20px";  // 色块高度
   box.style.backgroundColor = "red";  // 色块背景
  var npc = document.getElementById("npc");  // 获取页面元素的引用指针
   npc.style.position = "absolute";  // 色块绝对定位
   npc.style.width = "20px";  // 色块宽度
   npc.style.height = "20px";  // 色块高度
   npc.style.backgroundColor = "green";  // 色块背景
   npc.style.left = "780px";
   npc.style.top = "0px";
//--------------------------------获取页面元素的引用指针放到了kaishi.js的输入名字后了，不然输入名字有bug
    
   //在Document对象中注册keyDown事件处理函数
   function keyDown(event){  // 方向键控制元素移动函数
       var event = event || window.event;  // 标准化事件对象
       switch(event.keyCode){  // 获取当前按下键盘键的编码        
           case 65 :  // 按下 A 键
               box.style.left = box.offsetLeft - 10  + "px";//向左移动10个像素
               fx = "left";//方向左右
               zhengfu = "-";//方向负
               if(box.offsetLeft<0){//边界限制
                 box.style.left = box.offsetLeft + 10  + "px";
                }
                leftchufa()
               break;
           case 68 :  // 按下 D 键
               box.style.left = box.offsetLeft + 10 + "px";//向右移动5个像素
               fx = "left";//方向左右
               zhengfu = "+";//方向正
               if(box.offsetLeft>780){//边界限制
                 box.style.left = 780 + "px"
                }
                rightchufa()
               break;
           case 87 :  // 按下 W 键
               box.style.top = box.offsetTop  - 10 + "px";//向上移动5个像素
               fx = "top";//方向上下
               zhengfu = "-";//方向负
               if(box.offsetTop<0){//边界设置
                 box.style.top = 0 + "px"
                }
                topchufa()
               break;
           case 83 :  //按下 S键
               box.style.top = box.offsetTop  + 10 + "px";//向下移动5个像素
               fx = "top";//方向为上下
               zhengfu = "+";//方向正
               if(box.offsetTop > 480){//边界设置
                 box.style.top = 480 + "px";
                }
                bottomchufa()
                
                
               break;                
           
          
       } 
       return false
   }
   //按键触发
   function rightchufa(){//按右键触发
if(box.offsetLeft == npc.offsetLeft-10 && box.offsetTop == npc.offsetTop){//如果box在npc的左侧贴着
   npc1()//npc对话内容
   word3()//触发对话
}
if(box.offsetLeft == npc.offsetLeft-10&&box.offsetTop <= npc.offsetTop+10){//如果贴着npc左侧按右键
  box.style.left = npc.offsetLeft -20 + "px"//回去
}
function npc1(){
  document.getElementById("word4").innerHTML ="这是npc"//文本内容
}
}
function bottomchufa(){//下键触发

}
function topchufa(){//上键触发
  if(box.offsetLeft >= npc.offsetLeft-10&&box.offsetTop == npc.offsetTop+10){
    box.style.top = npc.offsetTop +20 + "px"
  }
}
function leftchufa(){//左键触发

}
