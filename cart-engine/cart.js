function calculateCart({
    items,
    discountrate = 0,
    taxrate = 0
}) {
    const subtotal = items.reduce((sum, items) =>{
        return sum + item.price * item.quantity;
    }, 0);

    const discountAmount = subtotal * discountrate;
    const discountSubtotal = subtotal - discountAmount;
}