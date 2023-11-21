document.addEventListener("DOMContentLoaded", function () {
    const contactoBtn = document.getElementById("contactoBtn");
    const mascotaBtn = document.getElementById("mascotaBtn");
    const contactoPopup = document.getElementById("contactoPopup");
    const mascotaPopup = document.getElementById("mascotaPopup");

    contactoBtn.addEventListener("click", function () {
        contactoPopup.style.display = "block";
        mascotaPopup.style.display = "none";
    });

    mascotaBtn.addEventListener("click", function () {
        mascotaPopup.style.display = "block";
        contactoPopup.style.display = "none";
    });
});

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.animation = 'fadeOutUp 0.5s ease-in-out'; // Aplica la animación de salida
    setTimeout(() => {
        popup.style.display = 'none';
        popup.style.animation = ''; // Restaura la animación
    }, 500); // Tiempo de espera igual al tiempo de la animación
}
