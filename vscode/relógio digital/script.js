const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const data = document.getElementById('data')

const relogio = setInterval(function time() {
 let dt = new Date();
 let hr = dt.getHours()
 let min = dt.getMinutes()
 let seg = dt.getSeconds()



if (hr < 10) hr = '0' + hr
if (min < 10) min = '0' + min
if (seg < 10) seg = '0' + seg

 horas.textContent = hr;
 minutos.textContent = min;
 segundos.textContent = seg;


})