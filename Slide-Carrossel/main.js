const i1 = document.getElementById('im1');
const i2 = document.getElementById('im2');
const i3 = document.getElementById('im3');
const i4 = document.getElementById('im4');
const i5 = document.getElementById('im5');
let contador = 0;

function slide(){
    if (contador === 0) {
        i5.style.marginLeft = '-350px';
        i3.style.zIndex = '3';
        i3.style.marginRight = '0';
        i2.style.marginRight = '-350px';
        i2.style.height = '300px';
        i2.style.width = '300px';
        i2.style.zIndex = '4';
        i1.style.zIndex = '5';
        i1.style.marginLeft = '0';
        i1.style.height = '450px';
        i1.style.width = '450px';
        contador++;
    } else if (contador === 1) {
        i4.style.marginLeft = '-350px';
        i4.style.zIndex = '3';
        i2.style.zIndex = '3'
        i2.style.marginRight = '0';
        i1.style.marginRight = '-350px';
        i1.style.height = '300px';
        i1.style.width = '300px';
        i1.style.zIndex = '4';
        i5.style.zIndex = '5';
        i5.style.marginLeft = '0';
        i5.style.height = '450px';
        i5.style.width = '450px';
        contador++;
    } else if (contador === 2) {
        i3.style.marginLeft = '-350px';
        i3.style.zIndex = '3';
        i3.style.zIndex = '3'
        i1.style.marginRight = '0';
        i5.style.marginRight = '-350px';
        i5.style.height = '300px';
        i5.style.width = '300px';
        i5.style.zIndex = '4';
        i4.style.zIndex = '5';
        i4.style.marginLeft = '0';
        i4.style.height = '450px';
        i4.style.width = '450px';
        contador++;
    } else if (contador === 3) {
        i2.style.marginLeft = '-350px';
        i2.style.zIndex = '3';
        i5.style.zIndex = '3'
        i5.style.marginRight = '0';
        i4.style.marginRight = '-350px';
        i4.style.height = '300px';
        i4.style.width = '300px';
        i4.style.zIndex = '4';
        i3.style.zIndex = '5';
        i3.style.marginLeft = '0';
        i3.style.height = '450px';
        i3.style.width = '450px';
        contador++;
    } else if (contador === 4) {
        i1.style.marginLeft = '-350px';
        i1.style.zIndex = '3';
        i4.style.zIndex = '3'
        i4.style.marginRight = '0';
        i3.style.marginRight = '-350px';
        i3.style.height = '300px';
        i3.style.width = '300px';
        i3.style.zIndex = '4';
        i2.style.zIndex = '5';
        i2.style.marginLeft = '0';
        i2.style.height = '450px';
        i2.style.width = '450px';
        contador = 0;
    }
}
setInterval(slide, 5000);


// if (window.matchMedia("(min-width:720px)").matches) {
//     /* a viewport tem pelo menos 720 pixels de largura */
//     console.log('a viewport tem pelo menos 720 pixels de largura')
// } else {
//     /* a viewport menos que 720 pixels de largura */
//     console.log('a viewport menos que 720 pixels de largura')
// }
