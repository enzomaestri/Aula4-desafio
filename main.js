const lista = document.querySelector(`[data-type="lista"]`);

function mostraTintas() {
    lista.removeAttribute("data-view");
}

function hideTintas() {
    lista.setAttribute("data-view", "hidden");
}