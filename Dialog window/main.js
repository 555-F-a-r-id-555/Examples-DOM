while (confirm("Готовы ли вы ввести команду")) {
    let res = prompt("Введите выражение");
    if (res != null) document.write(`${res} = ${eval(res)} <br>`);
    else break;
}
alert("Выполнение сценария завершино");