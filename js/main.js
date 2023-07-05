let numb = document.querySelectorAll(".numb");
for (let i = 0; i < numb.length; i++) {
  let counter = 0;
  setInterval(() => {
    if (counter == numb[i].title) {
      clearInterval();
    } else {
      counter += 1;
      numb[i].textContent = counter + "%";
    }
  }, 80);
}
console.log(numb[0]);
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  el.style.width = ` ${(scrollY / height) * 100}% `;
  console.log(scrollY);
  console.log(height);
  console.log(el.style.width);
});

