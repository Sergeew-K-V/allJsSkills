const btnJsAdvanced = document.querySelector(".button__js-advanced");
const wrapper = document.querySelectorAll(".advanced");
let hided = true;
btnJsAdvanced.addEventListener("click", () => {
  if (hided) {
    removeClass();
    hided = false;
  } else {
    for (const part of wrapper) {
      part.classList.add("advanced");
    }
    hided = true;
  }
});

function removeClass() {
  wrapper.forEach((part) => {
    part.classList.remove("advanced");
  });
}
