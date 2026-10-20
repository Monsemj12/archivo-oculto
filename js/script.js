
const formulario = document.querySelector(".formulario form");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    mensaje.textContent = "";
    mensaje.style.color = "red";

    if (!formulario.checkValidity()) {
        mensaje.textContent =
            "Completa los campos y revisa que tu correo sea valido.";
        return;
    }

    mensaje.textContent =
        "Gracias por enviar tu sugerencia";
    mensaje.style.color = "white";

    formulario.reset();
});

