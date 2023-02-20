let counterValue = 0
const decrement = document.querySelector('[data-action="decrement"]')
const value = document.querySelector("#value")
const increment = document.querySelector('[data-action="increment"]')
increment.addEventListener("click", btnIncrement);
decrement.addEventListener("click", btnDecrement);

function btnIncrement() {
    value.textContent = counterValue
    console.log(counterValue += 1);
}

function btnDecrement() {
    value.textContent = counterValue
    console.log(counterValue -=1)
}
