
const useTotal = (cart) => {
    const amountProduct = {};
    cart.forEach(function (x) { amountProduct[x.product_id] = (amountProduct[x.product_id] || 0) + 1; });
   

    return {amountProduct};
}

export default useTotal;