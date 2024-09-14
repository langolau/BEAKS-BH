document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsSection = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    let totalPrice = 0;

    cartItemsSection.innerHTML = cart.map(item => {
        totalPrice += item.price;
        return `
            <div class="cart-item">
                <p>${item.name} - R$ ${item.price.toFixed(2)}</p>
            </div>
        `;
    }).join('');

    cartTotalPrice.innerText = totalPrice.toFixed(2);
});
