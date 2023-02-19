let n = 1;
for (let prop in window) {
    document.write(`<b>${n}</b> = ${prop}<br>`);
    n++;
}
document.write(`n = ${n}`)
document.querySelector('b').innerHTML = `У объекта <code>window</code> ${n - 1} свойст и методов`;