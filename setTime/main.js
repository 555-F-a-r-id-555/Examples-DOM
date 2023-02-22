function setTime() {
    let time = new Date();
    document.getElementById("myblock").innerHTML = time.toLocaleTimeString();
}

document.querySelector("body").onload = setInterval(setTime, 1000);

