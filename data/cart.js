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

  saveToStorage()
}


export function removeFromCart(productId) {
  let deleteHTML = false;
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {

      if (cartItem.quantity === 1) {
        cart.splice(cartItem);
        console.log('removed')
        deleteHTML = true;
      } 
      
      else {
        cartItem.quantity -= 1;
        console.log(`new quantity is ${cartItem.quantity}`);
        newCart.push({
          productId: productId,
          quantity: cartItem.quantity
        });
      };
    } else {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage()

  return deleteHTML;
}

export function removeFromHTML(productId) {
  const container = document.querySelector(`.js-product-${productId}`) 
        
  container.remove()
  console.log('removed')
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}