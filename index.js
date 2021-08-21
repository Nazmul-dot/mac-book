
// promu input
function setDefaultInput() {
    document.getElementById('promo-code').removeAttribute('disabled')
}
// to assign 0
function defaultSetting(id) {
    document.getElementById(id).innerText = 0;
    totalPrice();
    setDefaultInput();
}
//for 8gb-memory
document.getElementById('8gb-memory').addEventListener("click", function () {
    defaultSetting('extra-memory')
})
//for 256gb storage
document.getElementById('256gb storage').addEventListener("click", function () {
    defaultSetting('extra-storage')
})
//for free-delivery
document.getElementById('free-delivery').addEventListener("click", function () {
    defaultSetting('delivary-charge')
})


// a function assige to price 
function assignPrice(id, price) {
    document.getElementById(id).innerText = price
    totalPrice();
    setDefaultInput();
}

// total calculation
function totalPrice() {
    const memoryElement = document.getElementById('extra-memory').innerText;
    const memoryCost = parseInt(memoryElement);
    const storageElement = document.getElementById('extra-storage').innerText;
    const storagCost = parseInt(storageElement);
    const delivaryElement = document.getElementById('delivary-charge').innerText;
    const delivaryCost = parseInt(delivaryElement);
    const bestPrice = parseInt(document.getElementById('best-price').innerText)
    document.getElementById('total-price').innerText = bestPrice + memoryCost + storagCost + delivaryCost;
    document.getElementById('extra-total-price').innerText = bestPrice + memoryCost + storagCost + delivaryCost;
}

//for 16gb-memory
document.getElementById('16gb-memory').addEventListener("click", function () {
    assignPrice('extra-memory', 180)
})
//for 512gb storage
document.getElementById('512gb storage').addEventListener("click", function () {
    assignPrice('extra-storage', 100)
})
//for 1tb storage
document.getElementById('1tb storage').addEventListener("click", function () {
    assignPrice('extra-storage', 180)
})
//cost-delivery
document.getElementById('cost-delivery').addEventListener("click", function () {
    assignPrice('delivary-charge', 20)
})

//for promo code
document.getElementById('promo-apply').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value;
    if (promoCode == 'stevekaku') {
        const extratotal = parseInt(document.getElementById('extra-total-price').innerText)
        document.getElementById('extra-total-price').innerText = extratotal - extratotal * 0.2;
        promoInput.setAttribute('disabled', true)
    }
    promoInput.value = '';
})