import {products} from '../data/products.js';

import {cart, addToCart} from '../data/cart.js';

import {createHeader} from '../scripts/header.js'

let productsHTML = '';

products.forEach((product) => {
productsHTML += `
<div class="product-preview">
  <div class="thumbnail-row">
    <img class="thumbnail" src=${product.image}>
  </div>

  <div class="product-info-grid">

<!--add the user pic back here-->

    <div class="product-info">
      <p class="product-title">
        ${product.name}</p>
      <p class="product-price">
        $${(product.priceCents / 100).toFixed(2)}</p>
      <p class="product-specs">
        ${product.specs}</p>

    </div>

    <div class="product-add-button">
      <button class="js-add-to-cart" data-product-id="${product.id}">Add</button>
    </div>
    
  </div>
</div>`;


})

document.querySelector('.js-product-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;

      addToCart(productId);

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      createHeader(cartQuantity);
    })
  });