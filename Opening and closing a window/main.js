function open_Window() {
    if (window.mywindow && !mywindow.closed) alert("Документ уже открыт");
    else window.mywindow = open("myhello.html");
}
function close_Window() {
    if (window.mywindow && !mywindow.closed) {
        mywindow.close();
        window.mywindow = null;
    }
    else alert("Окно уже закрыто");
}