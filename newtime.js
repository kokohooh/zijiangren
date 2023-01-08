function load(){
    window.setInterval('showRealTime(clock)',1000);
}



    function showRealTime(clock){
        var d = new Date();
        var hour = (d.getHours() < 10) ? ("0" + d.getHours()) : d.getHours();
        var min = (d.getMinutes() < 10) ? ("0" + d.getMinutes()) : d.getMinutes();
        var sec = (d.getSeconds() < 10) ? ("0" + d.getSeconds()) : d.getSeconds();
        var now =  hour + ":" + min 
        clock.innerHTML = now;
        if (5<hour && hour<18) {
            document.getElementById('sun').src='https://s2.loli.net/2022/11/01/8PvofQaUm34RsbC.png'
        } else {
            document.getElementById('sun').src='https://s2.loli.net/2023/01/08/XFc7fMDApUtVwsm.png'
          

        }
       
        if (5<hour && hour<20) {
            
            if (5<hour && hour<9) {
                document.getElementsByClassName('board-index')[0].style.background = "url('https://s2.loli.net/2022/11/03/XKoTQktRUMAYf4N.jpg')no-repeat center center fixed "
                document.getElementsByClassName("board-index")[0].style.backgroundSize = "cover";
            }
            if (15<hour && hour<18) {
                document.getElementsByClassName('board-index')[0].style.background = "url('https://s2.loli.net/2022/11/03/XKoTQktRUMAYf4N.jpg')no-repeat center center fixed "
                document.getElementsByClassName("board-index")[0].style.backgroundSize = "cover";
            }
            if (17<hour && hour<20) {
                document.getElementsByClassName('board-index')[0].style.background = "url('https://s2.loli.net/2022/11/05/K35NzWvbe6H8LY4.jpg')no-repeat center center fixed "
                document.getElementsByClassName("board-index")[0].style.backgroundSize = "cover";
            }
        }
        else{
            document.getElementsByClassName('board-index')[0].style.background = "url('https://s2.loli.net/2022/11/05/vBQzu6tKWm4XFxR.jpg')no-repeat center center fixed "
            document.getElementsByClassName("board-index")[0].style.backgroundSize = "cover";
        }

    }
