function show_Parameters() {
    let text = `Внутрение ширина и высота: ${window.innerWidth} и ${window.innerHeight}<br> 
                Внешние ширина и высота: ${window.outerWidth} и ${window.outerHeight} <br>`;
    document.getElementById('mytext').innerHTML = text;
}

function alert_Runner() {
    alert(`Координаты: ${window.screenX} и ${window.screenY}`)
}

let body1 = document.getElementById('bodyid');
body1.onload = show_Parameters;
body1.onresize = show_Parameters;
// document.getElementById('buttonid').onclick = alert_Runner;

// body1.addEventListener('load', show_Parameters, false);
// body1.addEventListener('resize', show_Parameters, false);
let button1 = document.getElementById('buttonid');
button1.addEventListener('click', alert_Runner, false);