// ======== definir elementos ======== //
const modal = document.getElementById("paymentModal");
const buyButton = document.querySelector(".buy-btn");
const closeBtn = document.querySelector(".close");
const paymentForm = document.getElementById("paymentForm");

buyButton.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

paymentForm.onsubmit = function (e) {
  e.preventDefault();
  alert("¡Compra realizada con éxito! Gracias por tu compra.");
  modal.style.display = "none";
};

//============= TEMPORIZADOR HASTA 2 DE NOVIEMBRE =====================//

const countdownElement = document.getElementById("countdown");
const eventDate = new Date("2024-11-02T14:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  //===== si ya acabó =======//
  if (distance < 0) {
    const timePassed = Math.abs(distance);
    const days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
    countdownElement.innerHTML = `El evento ocurrió hace ${days} día${
      days !== 1 ? "s" : ""
    }.`;
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Faltan: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay
