function setText(i) {
    let input = document.getElementById("myinput").value;
    let text = document.getElementById("myb");
    let i =parseInt(input);
    if(i!=0){
        text.innerHTML =i;
        i--;
    }
    else i = 0;
}

document.getElementById("mybutton").onclick = setInterval(setText,1000,i);




// document.querySelector('button').addEventListener("click", () => {
//     let val = document.querySelector('input').value;
//     let txt1 = document.querySelector('div');
//     let i = val;
//     let timerId = setInterval(() => { txt1.textContent = i; i--; }, 1000, i);
//     setTimeout(() => { clearInterval(timerId) }, 1000 * i + 1000);
// })