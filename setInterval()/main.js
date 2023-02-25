let si;

let input = document.getElementById("myinput").value;
let mytime = document.getElementById("mytime");
let button = document.getElementById("mybutton");
let num = parseInt(input);

function startInterval() {
    si = setInterval(printText, 1000);
}

function printText() {
    mytime.innerHTML = num;
    num = num - 1;
    if (num < 0) {
        clearInterval(si);
        mytime.innerHTML = "0";
    }
}


button.onclick = startInterval;




// document.querySelector('button').addEventListener("click", () => {
//     let val = document.querySelector('input').value;
//     let txt1 = document.querySelector('div');
//     let i = val;
//     let timerId = setInterval(() => { txt1.textContent = i; i--; }, 1000, i);
//     setTimeout(() => { clearInterval(timerId) }, 1000 * i + 1000);
// })