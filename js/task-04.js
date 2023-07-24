const butt = {
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    valueContent: document.querySelector('#value'),
}

let counterValue = 0;

butt.incrementBtn.addEventListener('click', () => {
    counterValue +=1;
    butt.valueContent.innerHTML = counterValue;
});

butt.decrementBtn.addEventListener('click', () => {
    counterValue -=1;
    butt.valueContent.innerHTML = counterValue;
});

