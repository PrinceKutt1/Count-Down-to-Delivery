const countdown = () => {
  const endDate = new Date("August 10, 2026 10:00:00").getTime();
  const now = new Date().getTime();

  const difference = endDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  
  // For months, consider more accurate calculation
  const oneMonth = 2629800000; // Average month length in milliseconds (30.44 days)
  
  let timeMonths = Math.floor(difference / oneMonth);
  let timeDays = Math.floor((difference % oneMonth) / days);
  let timeHours = Math.floor((difference % days) / hours);
  let timeMinutes = Math.floor((difference % hours) / minutes);
  let timeSeconds = Math.floor((difference % minutes) / seconds);

  // Pad single digits with leading zeros
  timeMonths = timeMonths < 10 ? "0" + timeMonths : timeMonths;
  timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  // Update the DOM if elements exist
  if (document.getElementById("months")) {
    document.getElementById("months").innerHTML = timeMonths;
  }
  if (document.getElementById("days")) {
    document.getElementById("days").innerHTML = timeDays;
  }
  if (document.getElementById("hours")) {
    document.getElementById("hours").innerHTML = timeHours;
  }
  if (document.getElementById("minutes")) {
    document.getElementById("minutes").innerHTML = timeMinutes;
  }
  if (document.getElementById("seconds")) {
    document.getElementById("seconds").innerHTML = timeSeconds;
  }
};

setInterval(countdown, 1000);

const loadingSpinner = document.querySelector(".loading");
const countdownDiv = document.querySelector(".countdown");

countdownDiv.style.opacity = 0;

window.addEventListener("DOMContentLoaded", () => {
  loadingSpinner.style.opacity = 0;
  countdownDiv.style.transition = "opacity 1s";  // Add fade-in transition
  countdownDiv.style.opacity = 1;
});
