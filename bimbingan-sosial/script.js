// Misalnya, jika ingin menambah interaksi lebih lanjut di website
document.querySelector('button').addEventListener('click', function() {
    alert('Terima kasih telah menghubungi kami!');
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Pesan Anda berhasil dikirim!");
        contactForm.reset();
    });
});