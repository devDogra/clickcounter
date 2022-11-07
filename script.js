const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  div.innerText = parseInt(div.innerText) + 1;
});
