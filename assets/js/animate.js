/*
var animacionMas = anime({
    targets:'div.box',
    duration: 2000,
    height: '250px',
    loop: true,
    autoplay: false,
});

const btnMas = document.querySelector(".box #verMas");

btnMas.addEventListener('click',()=>{
    animacionMas.play();
    setTimeout(()=>{
        animacionMas.pause();
    },1500);
});
*/

const btnMas = document.querySelector(".box");

const verMas = document.querySelector("#verMas");
verMas.addEventListener('click',()=>{

    btnMas.animate([
        // keyframes
        { height: '30px' },
        { height: '400px' }
      ], {
        // timing options
        duration: 1000,
      });
});