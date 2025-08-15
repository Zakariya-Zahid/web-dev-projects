document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, productName: "Lemon Chai", price: 3.29 },
    { id: 2, productName: "Laptop", price: 520.99 },
    { id: 3, productName: "Mouse", price: 5.99 },
  ];
  const cart = [];

  let productList = document.getElementById("product-list");
  let cartItems = document.getElementById("cart-items");
  let emptyCartMessage = document.getElementById("empty-cart");
  let cartTotalMessage = document.getElementById("cart-total");
  let totalPriceDisplay = document.getElementById("total-price");
  let checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.productName} - $${product.price.toFixed(2)}</span>
    <button data-id = "${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }
  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            ${item.productName} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      cartTotalMessage.classList.add("hidden");
    }
  }
  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Successfully!");
    emptyCartMessage.classList.remove("hidden");
    renderCart();
  });
});
