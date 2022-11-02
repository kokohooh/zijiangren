var txt = document.getElementById('txt');
var s = localStorage.getItem('da') || '';
txt.value = s;
var id = document.getElementById('id');
var i = localStorage.getItem('name') || '';
id.value = i;
var ys = document.getElementById('ys');
var q = localStorage.getItem('color') || '';
ys.value = q;
var qtys = document.getElementById('qtys');
var e = localStorage.getItem('qtcolor') || '';
qtys.value = e;
var lsp = document.getElementById('lsp');
var w = localStorage.getItem('sp') || '';
lsp.value = w;
document.querySelector('#submit').onclick = function () {
    localStorage.setItem('sp', lsp.value);  
    localStorage.setItem('name', id.value);
    localStorage.setItem('da', txt.value);
    localStorage.setItem('color', ys.value);
    localStorage.setItem('qtcolor', qtys.value);
    window.location.href="index.html"
    return false;
}


