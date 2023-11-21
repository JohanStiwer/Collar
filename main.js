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
