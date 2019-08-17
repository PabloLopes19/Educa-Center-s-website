// Página 'sobre'

var background = document.querySelector('body');
var btnDarkMode = document.querySelector('#darkModeBtn');
var btnDarkModeMobile = document.querySelector('#darkModeBtnMobile');

darkMode = () => {
    document.querySelector('body').style.background = "#333";
    document.querySelector('.pageTitle h1').style.color = "#fff";
    document.querySelector('#cargo1').style.color = "#fff";
    document.querySelector('#cargo2').style.color = "#fff";
    document.querySelector('#cargo3').style.color = "#fff";
}
lightMode = () => {
    document.querySelector('body').style.background = "#ecf0f1";
    document.querySelector('.pageTitle h1').style.color = "#111";
    document.querySelector('#cargo1').style.color = "#111";
    document.querySelector('#cargo2').style.color = "#111";
    document.querySelector('#cargo3').style.color = "#111";
}

var flag = 1;

btnDarkMode.onclick = () => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
}
btnDarkModeMobile.onclick = () => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
}