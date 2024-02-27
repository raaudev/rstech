//fechar e abrir menu
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});


// Adiciona um listener de evento de rolagem para controlar a visibilidade do botão "Voltar para o Topo"
window.addEventListener('scroll', () => {
    const btnTopo = document.getElementById('btn-topo');
    const secaoTopo = document.getElementById('inicio');

    if (window.scrollY > secaoTopo.offsetHeight) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});