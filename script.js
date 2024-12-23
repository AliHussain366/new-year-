// Countdown Timer
const countdownDate = new Date("Jan 1, 2024 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-timer").innerHTML = "Happy New Year!";
  }
}, 1000);

// Dark Mode Toggle
const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Send Wishes Feature
const sendWishesButton = document.getElementById("send-wishes");
const wishesWall = document.getElementById("wishes-wall");

sendWishesButton.addEventListener("click", () => {
  const wish = prompt("Enter your New Year wish:");
  if (wish) {
    const wishElement = document.createElement("div");
    wishElement.textContent = wish;
    wishesWall.appendChild(wishElement);
  }
});
function revealGift() {
    const giftBox = document.querySelector(".gift-box");
    giftBox.classList.toggle("open");
  
    const gifts = ["E-Card", "Online Voucher", "Custom Message"];
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    document.getElementById("gift-reveal").innerText = `You received: ${randomGift}`;
  }
  