const imageEl = document.querySelector(".code-image");
const generateEl = document.querySelector(".generate-code");
const clearEl = document.querySelector(".clear-code");
const inputEl = document.querySelector(".input-box");

generateEl.addEventListener("click", () => {
  const val = inputEl.value;

  if (val === "") {
    inputEl.classList.add('border-red')
  } else {
    inputEl.classList.remove('border-red')
    const baseURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`;
    imageEl.classList.add("active");
    imageEl.src = baseURL;
}
});

clearEl.addEventListener("click", () => {
  if (inputEl.value) {
      inputEl.value = "";
      imageEl.classList.remove('active')
    }else{
        inputEl.classList.add('border-red')
    }
});