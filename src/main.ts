const keyValPairButton = document.querySelector(".key-value-example")
const keyValResponse = document.querySelector(".key-value-response")

keyValPairButton.addEventListener("click", () => {
  keyValResponse.innerHTML = "This is a hardcoded response";
})