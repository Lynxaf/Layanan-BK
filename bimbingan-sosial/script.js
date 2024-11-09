  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Pesan Anda berhasil dikirim!");
        contactForm.reset();
    });
});
