function addToCart() {
  const quantity = parseInt(document.getElementById('quantity').value);
  const originalPrice = 50; // Original price of the product
  const totalPrice = originalPrice * quantity;

  // Update cart content
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Clear previous cart items
  cartItems.innerHTML = '';

  // Create a new list item for the cart
  const listItem = document.createElement('li');
  listItem.textContent = `Quantity: ${quantity} - Total Price: $${totalPrice}`;
  cartItems.appendChild(listItem);

  // Update total price
  totalPriceElement.textContent = `Total Price: $${totalPrice}`;

  // Reset quantity input
  document.getElementById('quantity').value = 1;
}

