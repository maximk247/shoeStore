const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', (event) => {
    if(event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card')
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-item-in-box]').innerText,
            counter: card.querySelector('[data-counter]').innerText,
            price: card.querySelector('.price-currency').innerText,
            size: card.querySelector('.price-size').innerText
        }

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        if(itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]')
            counterEl.innerText = +counterEl.innerText + (+productInfo.counter)
        } else {
            const cartResult = `<div class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__weight">${productInfo.itemsInBox}</div>

                                            <!-- cart-item__details -->
                                            <div class="cart-item__details">

                                                <div class="items items--small counter-wrapper">
                                                    <div class="items-control" data-action="minus">-</div>
                                                    <div class="items-current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items-control" data-action="plus">+</div>
                                                </div>

                                                <div class="price small">
                                                    <div class="price-size">${productInfo.size}</div>
                                                    <div class="price-currency">${productInfo.price}</div>
                                                </div>

                                            </div>
                                            <!-- // cart-item__details -->

                                        </div>
                                    </div>
                                </div>`
            cartWrapper.insertAdjacentHTML('beforeend', cartResult)
            
        }
        toggleCartStatus()
        calcPriceAndDelivery()
        card.querySelector('[data-counter]').innerText = '1'
    }
})

toggleCartStatus()