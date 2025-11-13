document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".btn");
  btns.forEach(btn => {
    btn.addEventListener("mouseover", () => btn.classList.add("hover"));
    btn.addEventListener("mouseout", () => btn.classList.remove("hover"));
  });
});