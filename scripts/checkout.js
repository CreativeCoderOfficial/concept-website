import {cart, removeFromCart, addToCart} from "../data/cart.js"
import {products} from "../data/products.js"


function generateHTML() {
  let cartSummaryHTML = `<h2>Cart Summary</h2>`
cart.forEach((cartItem) => {
  const productId = cartItem.productId

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });


  cartSummaryHTML += `     
  <div class="product js-product-${matchingProduct.id}">
    <img class="product-image" src="${matchingProduct.image}" alt="preview of this product not loaded">
    <div class="product-details">
      <div class="product-title">${matchingProduct.name}</div>
      <div class="product-price">$${(matchingProduct.priceCents / 100).toFixed(2)}</div>

      <div class="product-quantity">Quantity: <b>${cartItem.quantity}</b></div>

      <div class="item-button-container">
      <div><button class="item-button js-add-button" data-product-id="${matchingProduct.id}">
        <img src="images/plus-icon.jpg">
      </button></div>
      
      <div><button class="item-button js-delete-button"
      data-product-id="${matchingProduct.id}">
        <img src="images/bin-icon.png">
      </button></div>
    </div>

    </div>
  </div>`;

});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
}

generateHTML()

document.querySelectorAll('.js-add-button')
  .forEach((addButton) => {
    addButton.addEventListener('click', () => {
      const productId = addButton.dataset.productId;
      addToCart(productId)
    })

  });

document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton) => {
    deleteButton.addEventListener('click', () => {
      const productId = deleteButton.dataset.productId;
       
      // const deleteHTML = removeFromCart(productId);

      const container = document.querySelector(`.js-product-${productId}`) 
        
      container.remove()

    });
  });
