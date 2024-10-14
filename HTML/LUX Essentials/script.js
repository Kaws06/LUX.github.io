function getSelectedSize() {
    const selectedSize = document.querySelector('input[name="talla"]:checked');
    if (selectedSize) {
        return selectedSize.value;
    }
    return null;
}

document.getElementById('addToCart').addEventListener('click', function() {
    const size = getSelectedSize();
    if (size) {
        alert('Has agregado al carrito la talla ' + size);
    } else {
        alert('Por favor, selecciona una talla.');
    }
});

document.getElementById('buyNow').addEventListener('click', function() {
    const size = getSelectedSize();
    if (size) {
        alert('Vas a comprar la talla ' + size);
    } else {
        alert('Por favor, selecciona una talla.');
    }
});  