// ── NAVBAR ──
const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu');
const fechaBtn = document.querySelector('.menu > li > a');
const submenu = document.querySelector('.submenu');

hamburguesa.addEventListener('click', () => menu.classList.toggle('abierto'));
fechaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.classList.toggle('abierto');
});
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        menu.classList.remove('abierto');
        submenu.classList.remove('abierto');
    }
});

// ── SOBRE ──
const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") ||
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {

        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre");

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");
                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envoltura-sobre *")) {
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");

                setTimeout(() => {
                    envoltura.classList.remove("abierto");
                    envoltura.classList.remove("desactivar-sobre");
                }, 500);
            }, 500);
        }
    }
});