export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {productId: "id_1",
    quantity: 1,},
    {productId: "id_4",
    quantity: 3,}
  ];
}

export function addToCart(productId) {
  let alreadyInCart = false;

  cart.forEach((item) => {
    if (item.productId === productId) {
      item.quantity += 1;
      alreadyInCart = true
    }
  });

  if (alreadyInCart === false) {
    cart.push({
      productId,
      quantity: 1
    })
  };

  CartSaveToStorage()
}


export function removeFromCart(productId) {
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push({
        productId: cartItem.productId,
        quantity: cartItem.quantity
      });
    } 
  });

  cart = newCart;
  CartSaveToStorage()
}

export function CartSaveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


