var button = document.querySelector('#darkModeBtn');
var buttonMobile = document.querySelector('#darkModeBtnMobile');
var title = document.querySelector('.titleProgramacao');

darkMode = () => {
    document.querySelector('body').style.background = "#333";
    title.style.color = "#fff";
}
lightMode = () => {
    document.querySelector('body').style.background = "#ecf0f1";
    title.style.color = "#111";
}

var flag = 1;

button.onclick = () => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
}
buttonMobile.onclick = () => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
}