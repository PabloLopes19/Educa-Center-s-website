function redirectPrincipal(){
    window.location.href = "principal.html";
}
function redirectCursos(){
    window.location.href = "cursos.html";
}
function redirectSobre(){
    window.location.href = "sobre.html";
}
function redirectContato(){
    window.location.href = "contatos.html";
}
function easterEgg(){
    window.location.href = "credits.html";
}
function loop(){
    alert("Você já está nessa aba");
}

function facebook(){
    window.open('https://www.facebook.com/grupoeducacenter', '_blank');
}
function insta(){
    window.open('https://www.instagram.com/grupoeducacenter/', '_blank');
}
function gitPablo(){
    window.open('https://github.com/PabloLopes19', '_blank');
}
function gitCarlos(){
    window.open('https://www.instagram.com/grupoeducacenter/', '_blank');
}
testeMarlon = () => {
    window.location.href = "programacao.html";
}

// Algoritmo para implementar o mode noturno

var btnDarkMode = document.querySelector('#darkModeBtn'); // Pega o componente de ícone

DarkMode = () => { // Função para mudar o tema do sistema
    document.querySelector('body').style.background = "#333"; // Muda a cor do background
    document.querySelector('.titleEC').style.color = "#fff"; // Muda a cor do título
    document.querySelector('.nossosCursos h1').style.color = "#fff"; // Muda a cor do segundo título
}
LightMode = () => { // Função para mudar o tema para o padrão
    document.querySelector('body').style.background = "#ecf0f1"; // Muda a cor do background
    document.querySelector('.titleEC').style.color = "#111"; // Muda a cor do Título
    document.querySelector('.nossosCursos h1').style.color = "#111"; // Muda a cor do segundo título
}

// Algoritmo para mudar o tema 

var flag = 1; // Variável debugadora

btnDarkMode.onclick = () => { 
    if (flag == 1){
        DarkMode();
        flag = 0;
    }else{
        LightMode();
        flag = 1;
    }
}