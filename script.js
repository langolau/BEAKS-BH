let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
    alert(`Produto "${productName}" adicionado ao carrinho!`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', () => {
    // Atualizar a contagem do carrinho na página inicial
    updateCartCount();
});
