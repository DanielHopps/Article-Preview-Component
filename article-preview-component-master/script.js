const btn = document.querySelector(".social-btn");
const btnDark = document.querySelector(".social-btn-dark");
const hide = document.querySelector(".profile-share");

btn.addEventListener("click", () => {
  hide.classList.toggle("hidden");
});

btnDark.addEventListener("click", () => {
  hide.classList.toggle("hidden");
});
