function programming(){
    window.location.href = "programacao.html";
}
function webDesign(){
    window.location.href = "photoshop.html";
}
tecFundament = () => {
    window.location.href = "tecnolo.html";
}
projDesenhos = () => {
    window.location.href = "projDesenhos.html";
}
melhorIdade = () => {
    window.location.href = "melhorIdade.html";
}
vendaTecni = () => {
    window.location.href = "tecnicaVendas.html";
}
credECobr = () => {
    window.location.href = "crediECobr.html";
}
contabeis = () => {
    window.location.href = "contabeis.html";
}
veterinario = () => {
    window.location.href = "veterinario.html";
}
hardware = () => {
    window.location.href = "hardware.html";
}
robotica = () => {
    window.location.href = "robotica.html";
}
ingles = () => {
    window.location.href = "ingles.html";
}
farmacia = () => {
    window.location.href = "farmacia.html";
}
jogos = () => {
    window.location.href = "jogos.html";
}

// algoritmo do modo escuro

darkMode = () => {
    document.querySelector('body').style.background = "#333";
    document.querySelector('.titleContainer').style.color = "#111";
}
lightMode = () => {
    document.querySelector('body').style.background = "#ecf0f1";
    document.querySelector('.titleContainer').style.color = "#fff";
}

var flag = 1;

$('#darkModeBtn').click(() => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
});
$('#darkModeBtnMobile').click(() => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
});