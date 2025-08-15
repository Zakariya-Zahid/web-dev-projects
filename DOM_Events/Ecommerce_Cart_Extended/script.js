document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Lemon Tea", price: 3.29, imageUrl: "images/lemon_tea.jpg" },
    {
      id: 2,
      name: "Macbook Air M4",
      price: 999.99,
      imageUrl: "images/macbook_air_m4.jpeg",
    },
    { id: 3, name: "Mouse", price: 5.99, imageUrl: "images/mouse.jpeg" },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 45.5,
      imageUrl: "images/keyboard.webp",
    },
    {
      id: 5,
      name: "Gaming Headset",
      price: 35.0,
      imageUrl: "images/headset.jpeg",
    },
    { id: 6, name: "Coffee Mug", price: 7.49, imageUrl: "images/mug.jpg" },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: 25.99,
      imageUrl: "images/speaker.jpg",
    },
    { id: 8, name: "Desk Lamp", price: 14.99, imageUrl: "images/lamp.webp" },
    { id: 9, name: "Notebook", price: 2.99, imageUrl: "images/notebook.webp" },
    {
      id: 10,
      name: "Smartphone Stand",
      price: 6.75,
      imageUrl: "images/phone_stand.webp",
    },
  ];

  let cart = JSON.parse(localStorage.getItem("cartData")) || [];

  const productList = document.getElementById("product_card");
  const showCart = document.getElementById("showCart");
  const cartItems = document.getElementById("cart-items");
  const cartTotalPrice = document.getElementById("total-price");
  const cartCheckoutBtn = document.getElementById("checkout-btn");
  const closeCartBtn = document.getElementById("close-cart");

  closeCartBtn.addEventListener("click", () => {
    showCart.classList.add("hidden");
  });

  // Render product cards
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product_card_wrapper";
    productCard.innerHTML = `
      <div id="product_item">
        <div id="pr_img"><img src="${product.imageUrl}" alt="${
      product.name
    }" /></div>
        <div id="product-title"><h2>${product.name}</h2></div>
        <div id="pr_price"><p>$${product.price.toFixed(2)}</p></div>
        <div id="add_to_cart"><button class="btn" data-id="${
          product.id
        }">Add to Cart</button></div>
      </div>
    `;
    productList.appendChild(productCard);
  });

  // Add to cart logic
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.dataset.id) {
      const productId = parseInt(e.target.dataset.id);
      const product = products.find((p) => p.id === productId);
      if (product) {
        addToCart(product);
      }
    }
  });

  function addToCart(product) {
    cart.push(product);
    saveCart();
    renderCart();
  }

  function renderCart() {
    showCart.classList.remove("hidden");
    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {
      totalPrice += item.price;
      const cartItem = document.createElement("div");
      cartItem.className = "cartItems";
      cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button class="delete" data-index="${index}">Delete</button>
      `;
      cartItems.appendChild(cartItem);
    });

    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;

    // Add delete button listeners
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index);
        cart.splice(index, 1);
        saveCart();
        renderCart();
      });
    });
  }

  cartCheckoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      cartItems.textContent = "You should add products in Cart to proceed!";
      return;
    }
    alert("Checkout Successfully!");
    cart = [];
    saveCart();
    renderCart();
  });

  function saveCart() {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }

  // On load, render cart from localStorage
  renderCart();
});
