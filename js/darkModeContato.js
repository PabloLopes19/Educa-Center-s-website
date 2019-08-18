var fundo = document.querySelector('body');
var btnClick = document.querySelector('#darkModeBtn');
var btnClickMobile = document.querySelector('#darkModeBtnMobile');

dark = () => {
    fundo.style.background = "#333";
    document.querySelector('#subtitulo1').style.color = "#fff";
    document.querySelector('#subtitulo2').style.color = "#fff";
    document.querySelector('#subtitulo3').style.color = "#fff";
    document.querySelector('#titulo').style.color = "#fff";
}
ligh = () => {
    fundo.style.background = "#ecf0f1";
    document.querySelector('#titulo').style.color = "#111";
    document.querySelector('#subtitulo1').style.color = "#111";
    document.querySelector('#subtitulo2').style.color = "#111";
    document.querySelector('#subtitulo3').style.color = "#111";
    document.querySelector('#titulo').style.color = "#111";
}

flag == 1;

btnClick.onclick = () => {
    if(flag == 1){
        dark();
        flag = 0;
    }else{
        ligh();
        flag = 1;
    }
}
btnClickMobile.onclick = () => {
    if(flag == 1){
        dark();
        flag = 0;
    }else{
        ligh();
        flag = 1;
    }
}