let p = document.getElementById('myp');
let b = document.getElementById('myb');

let back_color = prompt("Введите цвет фона, например:green,red,blue....");
let txt_color = prompt("Введите цвет текста");
alert("Нажмите клавишу С для смены цвета");


function key_down() {
    if (event.code == "KeyC") {
        if (back_color == null) back_color = "purple";
        if (txt_color == null) txt_color = "aqua"
        document.body.style.backgroundColor = back_color;
        p.style.color = txt_color;
        b.style.color = 'blue';
        p.innerHTML = `<b>Нажата клавиша: ${txt_color} текст на ${back_color} фоне</b>`;
        b.innerHTML = `<b>Цвет текста и фона был изминен</b>`
    }
    else alert("Нажмите клавишу С - в англ. раскладке, чтобы сменить цвет");
}
window.onkeydown = key_down;


function key_up() {
    document.body.style.backgroundColor = "black";
    p.style.color = "white";
    b.style.color = 'pink';
    p.innerHTML = `<b>Клавиша не нажата</b>`;
    b.innerHTML = `<b>Цвет текста снова изменился</b>`
}

window.onkeyup = key_up;