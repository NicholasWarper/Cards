const holder = document.querySelector(".holder-name");
const holderInput = document.querySelector(".holder-input");

console.log(holder);
console.log(holderInput);

holderInput.addEventListener("input", () => {
    holder.textContent = holderInput.value;
});

const cred = document.querySelector(".credit");
const credin = document.querySelector(".credit-number");

console.log(cred);
console.log(credin);

cred.addEventListener("input", () => {
    credin.textContent = cred.value;
});