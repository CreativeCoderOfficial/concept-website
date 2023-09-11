export function createHeader(cartQuantity) {
  let headerHTML;

  if (cartQuantity === undefined) {
    headerHTML = `    
    <div><a class="header-logo" href="concept_site.html">Company Logo</a></div>
  
    <div class="header-right">
  
      <div><a href="all-cards.html">Our Cards</a></div>
      <div><a href="about.html">How it Works</a></div>
      <div><a class="log_in" href="checkout.html">Order Now!</a></div>
    </div>`;
  }
  else {
    headerHTML = `    
    <div><a class="header-logo" href="concept_site.html">Company Logo</a></div>
  
    <div class="header-right">
  
      <div><a href="all-cards.html">Our Cards</a></div>
      <div><a href="about.html">How it Works</a></div>

      <div class="cart-quantity-container">
      <a class="cart-link header-link" href="checkout.html">
      <img class="cart-icon" src="icons/cart-icon.jpg">
      <div class="cart-quantity js-cart-quantity">${cartQuantity}</div>
      </a></div>
      <div><a class="log_in" href="checkout.html">Order Now!</a></div>
    </div>`;
  }


  document.querySelector('.js-header').innerHTML = headerHTML;
}

createHeader()