let si;

let input = document.getElementById("myinput").value;
let mytime = document.getElementById("mytime");
let button = document.getElementById("mybutton");
let num = parseInt(input);

function elements() {
    si = setInterval(printText, 1000);
}

function printText() {
    num--;
    mytime.innerHTML = num;
    if (num == 0) clearInterval(si);
}


button.onclick = elements;




// document.querySelector('button').addEventListener("click", () => {
//     let val = document.querySelector('input').value;
//     let txt1 = document.querySelector('div');
//     let i = val;
//     let timerId = setInterval(() => { txt1.textContent = i; i--; }, 1000, i);
//     setTimeout(() => { clearInterval(timerId) }, 1000 * i + 1000);
// })