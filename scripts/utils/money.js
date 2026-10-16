export function formatedPrice(priceCents) {
    return `$${(priceCents / 100).toFixed(2)}`;
}