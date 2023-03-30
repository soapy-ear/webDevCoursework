document.addEventListener("DOMContentLoaded", function () {
  const cart = document.querySelector(".cart");
  const cartButton = document.getElementById("cart-icon");
  const closeCartButton = document.getElementById("close-cart");
  const addToCartButtons = document.querySelectorAll(".add-cart");
  const cartContent = document.querySelector(".cart-content");

  cartButton.addEventListener("click", toggleCart);
  closeCartButton.addEventListener("click", toggleCart);

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  function toggleCart() {
    cart.classList.toggle("open");
  }

  function addToCart(event) {
    const addButton = event.target;
    const productBox = addButton.closest(".product-box");
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;
    const productImgSrc = productBox.querySelector(".product-img").getAttribute("src");

    const cartItemHTML = `
      <div class="cart-box">
          <img src="${productImgSrc}" alt="" class="cart-img">
          <div class="detail-box">
              <div class="cart-product-title">${productTitle}</div>
              <div class="cart-price">${productPrice}</div>
              <input type="number" value="1" class="cart-quantity">
          </div>
          <i class="bx bxs-trash-alt cart-remove"></i>
      </div>
    `;

    cartContent.insertAdjacentHTML("beforeend", cartItemHTML);

    updateRemoveCartButtons();
  }

  function updateRemoveCartButtons() {
    const removeCartButtons = document.querySelectorAll(".cart-remove");
    removeCartButtons.forEach((button) => {
      button.removeEventListener("click", removeCartItem);
      button.addEventListener("click", removeCartItem);
    });
  }
    const cartItems = document.querySelectorAll(".cart-box");
    let totalPrice = 0;
    
    cartItems.forEach((item) => {
      const price = item.querySelector(".cart-price").textContent;
      const quantity = item.querySelector(".cart-quantity").value;
      totalPrice += parseFloat(price.replace("£", "")) * quantity;
    });
    
    const totalPriceElement = document.querySelector(".total-price");
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  

  function removeCartItem(event) {
    const removeButton = event.target;
    const cartBox = removeButton.closest(".cart-box");
    cartBox.remove();
  }
});