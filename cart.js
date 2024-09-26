const cart = {};

function addProductToCart(productId) {
    return function () {
        cart[productId] ? cart[productId]++ : cart[productId] = 1;
        updateCart();
    };
}

function updateCart() {
    const cartItemsDiv = document.querySelector('.cart-items');
    cartItemsDiv.innerHTML = '';

    for (const [productId, quantity] of Object.entries(cart)) {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `Product ${productId}: ${quantity}`;
        cartItemsDiv.appendChild(cartItemDiv);
    }
}

const products = document.querySelectorAll('.product');
products.forEach(product => {
    const productId = product.getAttribute('data-id');
    const addButton = product.querySelector('button');
    addButton.addEventListener('click', addProductToCart(productId));
});