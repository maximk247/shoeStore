function calcPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartPrice = cartWrapper.querySelectorAll('.price-currency')
    const totalPrice = document.querySelector('.total-price')

    let resultPrice = 0

    cartPrice.forEach((item) => {
        const amount = parseInt(item.closest('.cart-item').querySelector('[data-counter]').innerText)
        const toPrice = item.innerText.replaceAll(' ','').split('')
        const resultChange = toPrice.map(
            item => item = +item
        ).filter(
            item => !isNaN(item)
            ).join('')
        const price = parseInt(resultChange);
        resultPrice += (price * amount)
    })

    totalPrice.innerText = resultPrice.toLocaleString('ru-RU');
}