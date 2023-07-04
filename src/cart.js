window.addEventListener("DOMContentLoaded", function() {
    var triggerElement = document.querySelector(".trigger");
    var minusButton = document.querySelector(".minus");
    var plusButton = document.querySelector(".plus");
  
    minusButton.addEventListener("click", function() {
      var currentValue = parseInt(triggerElement.textContent);
      if (currentValue > 1) {
        triggerElement.textContent = currentValue - 1;
      }
    });
  
    plusButton.addEventListener("click", function() {
      var currentValue = parseInt(triggerElement.textContent);
      triggerElement.textContent = currentValue + 1;
    });

  });

  const viewCart = document.getElementById('view-cart');
  const wishListEl = document.querySelector('.wish-list');
  
  let isWishListOpen = false;
  
  viewCart.addEventListener('click', (event) => {
    event.stopPropagation();
    isWishListOpen = !isWishListOpen;
    if (isWishListOpen) {
      wishListEl.classList.add('viewCart');
    } else {
      wishListEl.classList.remove('viewCart');
    }
  });
  
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.wish-list') && !event.target.matches('#view-cart')) {
      wishListEl.classList.remove('viewCart');
      isWishListOpen = false;
    }
  });
  

  



  function addToCart() {
    var quantity = parseInt(document.getElementById("trigger").innerText);
    var price = JSON.parse(document.querySelector('#currentPrice').innerText); // Original price of the item
    var totalPrice = quantity * price;
    // Create the cart item HTML
    var item = document.createElement("div");
    item.className = "product-delete";
    item.innerHTML = `
      <div class="thumbnail"></div>
      <div class="name">
        <h5>Fall Limited Edition Sneakers</h5>
        <p class="total">$${price} x ${quantity} <strong class="total-price">$${totalPrice}</strong></p>
      </div>
      <div class="delete-btn selectDisable">
        <img src="./images/icon-delete.svg" alt="Delete Btn">
      </div>`;
  
    // Add delete button functionality
    var deleteBtn = item.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
      deleteCartItem(item);
    //   updateTotalPrice(-totalPrice);
    updateQuantityCount(quantity);
    updateCheckoutButtonVisibility();
    updateCartMessageVisibility();

      
      // Check if cart is empty and display message
      var cartItems = document.querySelector(".cartList");
      var cartMessage = document.querySelector(".cart-message");
      if (cartItems.childElementCount === 0) {
        cartMessage.textContent = "Your cart is empty";
      } else {
        cartMessage.textContent = "";
      }
    });
  
    // Replace the previous cart item with the new one
    var cartItems = document.querySelector(".cartList");
    cartItems.innerHTML = '';
    cartItems.appendChild(item);
  
    // updateTotalPrice(totalPrice);
    updateQuantityCount(quantity);
    updateCheckoutButtonVisibility();
    updateCartMessageVisibility();
  
    // Hide or show the cart message initially
    var cartMessage = document.querySelector(".cart-message");
    if (cartItems.childElementCount === 0) {
      cartMessage.textContent = "Your cart is empty";
    } else {
      cartMessage.textContent = "";
    }
  }
  
  function deleteCartItem(item) {
    item.remove();
  }
  

  
function updateQuantityCount(quantity) {
    var cartItems = document.querySelector(".cartList");
    var quantityCount = document.querySelector(".quantity-count");
    var countEl = document.getElementById('count');
    if (cartItems.childElementCount === 0) {
      quantityCount.style.display = "none";
    } else {
      quantityCount.style.display = "inline";
      countEl.innerText = quantity;
    }
  }
  function updateCheckoutButtonVisibility() {
    var cartItems = document.querySelector(".cartList");
    var checkoutButton = document.querySelector(".checkout");
    
    if (cartItems.childElementCount === 0) {
      checkoutButton.style.display = "none";
    } else {
      checkoutButton.style.display = "flex";
    }
  }

  function updateCartMessageVisibility() {
    var cartItems = document.querySelector(".cartList");
    var cartMessage = document.querySelector(".cart-message");
    
    if (cartItems.childElementCount === 0) {
      cartMessage.style.display = "grid";
    } else {
      cartMessage.style.display = "none";
    }
  }


  