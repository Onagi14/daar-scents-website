
/* =================================
   DA'AR SCENTS STORE
================================= */

const STORE = {
  prices: {
    50: 309,
    100: 589
  },
  defaultSize: 50,
  facebookURL: "https://m.me/daarscent"
};

/* =================================
   PRODUCTS
================================= */

const products = [
  {
    name: "Bare Vanilla",
    category: "women",
    image: "images/bare-vanilla.jpg",
    description: "Warm, sweet and comforting."
  },
  {
    name: "Dior Sauvage",
    category: "men",
    image: "images/dior-sauvage.jpg",
    description: "Fresh, bold and confident."
  },
  {
    name: "Versace Eros",
    category: "men",
    image: "images/versace-eros.jpg",
    description: "Bold, vibrant and captivating."
  },
  {
    name: "Selena Gomez",
    category: "women",
    image: "images/selena-gomez.jpg",
    description: "Sweet and playful."
  },
  {
    name: "Neroli Portofino",
    category: "unisex",
    image: "images/neroli-portofino.jpg",
    description: "Bright, fresh and citrusy."
  },
  {
    name: "Polo Sport Men",
    category: "men",
    image: "images/polo-sport-men.jpg",
    description: "Sporty, clean and refreshing."
  },
  {
    name: "Bombshell",
    category: "women",
    image: "images/bombshell.jpg",
    description: "Fruity, radiant and feminine."
  },
  {
    name: "Cloud Ariana Grande",
    category: "women",
    image: "images/cloud-ariana-grande.jpg",
    description: "Sweet, airy and dreamy."
  },
  {
    name: "Eclat Women",
    category: "women",
    image: "images/eclat-women.jpg",
    description: "Soft, elegant and floral."
  },
  {
    name: "Meow",
    category: "women",
    image: "images/meow.jpg",
    description: "Sweet, soft and playful."
  },
  {
    name: "Paris Hilton",
    category: "women",
    image: "images/paris-hilton.jpg",
    description: "Charming and glamorous."
  },
  {
    name: "English Pear",
    category: "unisex",
    image: "images/english-pear.jpg",
    description: "Fresh pear with a refined finish."
  },
  {
    name: "Bulgari Extreme",
    category: "men",
    image: "images/bulgari-extreme.jpg",
    description: "Fresh, woody and sophisticated."
  },
  {
    name: "Cheirosa",
    category: "women",
    image: "images/cheirosa.jpg",
    description: "Warm, sweet and tropical."
  },
  {
    name: "Stronger With You Intensely",
    category: "men",
    image: "images/stronger-with-you-intensely.jpg",
    description: "Rich, warm and intense."
  },
  {
    name: "Stronger With You Armani",
    category: "men",
    image: "images/stronger-with-you-armani.jpg",
    description: "Warm, modern and confident."
  },
  {
    name: "Chloé",
    category: "women",
    image: "images/chloe.jpg",
    description: "Elegant, delicate and floral."
  },
  {
    name: "Nectarine",
    category: "unisex",
    image: "images/nectarine.jpg",
    description: "Fruity, fresh and uplifting."
  },
  {
    name: "Acqua di Giò",
    category: "men",
    image: "images/acqua-di-gio.jpg",
    description: "Aquatic, fresh and clean."
  },
  {
    name: "Valaya",
    category: "women",
    image: "images/valaya.jpg",
    description: "Soft, airy and elegant."
  },
  {
    name: "Incanto Shine",
    category: "women",
    image: "images/incanto-shine.jpg",
    description: "Fruity, bright and cheerful."
  },
  {
    name: "A Thousand Wishes",
    category: "women",
    image: "images/a-thousand-wishes.jpg",
    description: "Sweet, sparkling and festive."
  },
  {
    name: "Flama de Mango",
    category: "unisex",
    image: "images/flama-de-mango.jpg",
    description: "Juicy, tropical mango inspiration."
  },
  {
    name: "Baccarat Rouge",
    category: "unisex",
    image: "images/baccarat-rouge.jpg",
    description: "Warm, amber-like and sophisticated."
  },
  {
    name: "Prada Paradoxe",
    category: "women",
    image: "images/prada-paradoxe.jpg",
    description: "Modern, floral and distinctive."
  }
].map((product, index) => ({
  ...product,
  id: index + 1
}));

/* =================================
   STATE AND ELEMENTS
================================= */

let cart = [];

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const resultsCount = document.getElementById("results-count");

const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

const openCartButton = document.getElementById("open-cart");
const closeCartButton = document.getElementById("close-cart");
const cartBackdrop = document.getElementById("cart-backdrop");
const checkoutButton = document.getElementById("checkout-button");

const contactLink = document.getElementById("contact-link");

/* Image popup elements */
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-perfume-image");
const modalName = document.getElementById("modal-perfume-name");
const modalPrice = document.getElementById("modal-perfume-price");
const modalClose = document.getElementById("image-modal-close");
const modalBackdrop = document.getElementById("image-modal-backdrop");

let previouslyFocusedElement = null;

/* Current year */
document.getElementById("year").textContent =
  new Date().getFullYear();

/* Messenger contact link */
if (contactLink) {
  contactLink.href = STORE.facebookURL;
}

/* =================================
   CART ICON
   Replaces the old Bag label
================================= */

if (openCartButton) {
  openCartButton.setAttribute("aria-label", "Open shopping cart");
  openCartButton.innerHTML = `
    <svg
      class="cart-icon"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="19" cy="21" r="1"></circle>
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"></path>
    </svg>
    <span id="cart-count">0</span>
  `;
}

const updatedCartCount = document.getElementById("cart-count");

const cartTitle = document.getElementById("cart-title");
if (cartTitle) {
  cartTitle.textContent = "Your Shopping Cart";
}

if (closeCartButton) {
  closeCartButton.setAttribute("aria-label", "Close shopping cart");
}

/* =================================
   HELPER FUNCTIONS
================================= */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function getPrice(size) {
  return STORE.prices[Number(size)] ?? STORE.prices[50];
}

function getProduct(productId) {
  return products.find(product => product.id === Number(productId));
}

/* Unique cart key for a perfume and its selected size. */
function getCartKey(productId, size) {
  return `${productId}-${size}`;
}

/* =================================
   PRODUCT DISPLAY
================================= */

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  resultsCount.textContent =
    `${filteredProducts.length} perfume${filteredProducts.length === 1 ? "" : "s"} available`;

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `
      <p class="empty">
        No perfumes found. Try another search.
      </p>
    `;
    return;
  }

  productsContainer.innerHTML = filteredProducts.map(product => `
    <article class="product-card" data-product-id="${product.id}">

      <div
        class="product-image"
        data-image-id="${product.id}"
        role="button"
        tabindex="0"
        aria-label="View larger image of ${escapeHTML(product.name)}"
      >
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)} perfume"
          loading="lazy"
        >

        <span class="tag">50 ml · ${formatPrice(getPrice(50))}</span>
      </div>

      <h3>${escapeHTML(product.name)}</h3>

      <p class="description">
        ${escapeHTML(product.description)}
      </p>

      <div class="product-size-selector">
        <label for="size-${product.id}">Choose size:</label>

        <select
          id="size-${product.id}"
          class="size-select"
          data-size-select="${product.id}"
          aria-label="Choose size for ${escapeHTML(product.name)}"
        >
          <option value="50">50 ml — ${formatPrice(getPrice(50))}</option>
          <option value="100">100 ml — ${formatPrice(getPrice(100))}</option>
        </select>
      </div>

      <div class="product-bottom">
        <span class="price" data-price-display="${product.id}">
          ${formatPrice(getPrice(50))}
        </span>

        <button
          class="add-button"
          data-add="${product.id}"
          type="button"
        >
          Add to Cart
        </button>
      </div>

    </article>
  `).join("");

  /* Product image fallback */
  productsContainer.querySelectorAll(".product-image img").forEach(img => {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackShown === "true") return;

      img.dataset.fallbackShown = "true";

      const productName = img.alt.replace(/ perfume$/, "");

      img.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
            <rect width="100%" height="100%" fill="#f3f3f3"/>
            <text x="50%" y="47%" text-anchor="middle"
              font-family="Arial" font-size="20" fill="#666">
              Add your photo
            </text>
            <text x="50%" y="55%" text-anchor="middle"
              font-family="Arial" font-size="15" fill="#666">
              ${escapeHTML(productName)}
            </text>
          </svg>
        `);
    }, { once: true });
  });
}

/* =================================
   SIZE SELECTION AND LIVE PRICING
================================= */

productsContainer.addEventListener("change", event => {
  const selector = event.target.closest("[data-size-select]");
  if (!selector) return;

  const productId = Number(selector.dataset.sizeSelect);
  const size = Number(selector.value);
  const price = getPrice(size);

  const card = selector.closest(".product-card");
  if (!card) return;

  const priceDisplay = card.querySelector(
    `[data-price-display="${productId}"]`
  );

  const tag = card.querySelector(".product-image .tag");

  if (priceDisplay) {
    priceDisplay.textContent = formatPrice(price);
  }

  if (tag) {
    tag.textContent = `${size} ml · ${formatPrice(price)}`;
  }
});

/* =================================
   CATEGORY BUTTONS AND SEARCH
================================= */

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    categoryFilter.value = button.dataset.category;
    renderProducts();

    document.getElementById("shop").scrollIntoView({
      behavior: "smooth"
    });
  });
});

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

/* =================================
   CLICK-TO-ENLARGE PERFUME IMAGE
================================= */

function openPerfumeImage(product) {
  if (!product) return;

  previouslyFocusedElement = document.activeElement;

  modalImage.src = product.image;
  modalImage.alt = `${product.name} perfume`;
  modalName.textContent = product.name;
  modalPrice.textContent =
    `50 ml — ${formatPrice(getPrice(50))} | 100 ml — ${formatPrice(getPrice(100))}`;

  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closePerfumeImage() {
  if (!imageModal.classList.contains("open")) return;

  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  modalImage.removeAttribute("src");
  modalImage.alt = "";

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
}

/* Click product image to enlarge it. */
productsContainer.addEventListener("click", event => {
  if (event.target.closest("[data-add]")) return;
  if (event.target.closest("[data-size-select]")) return;

  const imageContainer = event.target.closest("[data-image-id]");
  if (!imageContainer) return;

  openPerfumeImage(getProduct(imageContainer.dataset.imageId));
});

/* Keyboard support for product images. */
productsContainer.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const imageContainer = event.target.closest("[data-image-id]");
  if (!imageContainer) return;

  event.preventDefault();

  openPerfumeImage(getProduct(imageContainer.dataset.imageId));
});

/* Close image popup. */
modalClose.addEventListener("click", closePerfumeImage);
modalBackdrop.addEventListener("click", closePerfumeImage);

/* =================================
   SHOPPING CART
================================= */

function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const card = productsContainer.querySelector(
    `[data-product-id="${product.id}"]`
  );

  const selector = card?.querySelector("[data-size-select]");
  const size = Number(selector?.value || STORE.defaultSize);
  const price = getPrice(size);
  const key = getCartKey(product.id, size);

  const existingItem = cart.find(item => item.key === key);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      image: product.image,
      price,
      size: `${size} ml`,
      quantity: 1
    });
  }

  renderCart();
}

function changeQuantity(cartKey, amount) {
  const item = cart.find(product => product.key === cartKey);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.key !== cartKey);
  }

  renderCart();
}

function removeFromCart(cartKey) {
  cart = cart.filter(item => item.key !== cartKey);
  renderCart();
}

function renderCart() {
  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  updatedCartCount.textContent = totalQuantity;
  cartTotal.textContent = formatPrice(totalPrice);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty">Your shopping cart is empty.</p>
    `;

    checkoutButton.disabled = true;
    checkoutButton.style.opacity = "0.5";
    checkoutButton.setAttribute("aria-disabled", "true");
    return;
  }

  checkoutButton.disabled = false;
  checkoutButton.style.opacity = "1";
  checkoutButton.setAttribute("aria-disabled", "false");

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">

      <div class="cart-item-info">
        <strong>${escapeHTML(item.name)}</strong>

        <small>
          ${escapeHTML(item.size)} · ${formatPrice(item.price)} each
        </small>

        <small>
          Subtotal: ${formatPrice(item.price * item.quantity)}
        </small>
      </div>

      <div class="quantity-controls">
        <button
          type="button"
          data-minus="${escapeHTML(item.key)}"
          aria-label="Decrease quantity of ${escapeHTML(item.name)}, ${escapeHTML(item.size)}"
        >−</button>

        <span>${item.quantity}</span>

        <button
          type="button"
          data-plus="${escapeHTML(item.key)}"
          aria-label="Increase quantity of ${escapeHTML(item.name)}, ${escapeHTML(item.size)}"
        >+</button>
      </div>

      <button
        type="button"
        class="remove-button"
        data-remove="${escapeHTML(item.key)}"
        aria-label="Remove ${escapeHTML(item.name)}, ${escapeHTML(item.size)}"
      >×</button>

    </div>
  `).join("");
}

/* =================================
   CART EVENT LISTENERS
================================= */

productsContainer.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(Number(button.dataset.add));
});

cartItems.addEventListener("click", event => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  const remove = event.target.closest("[data-remove]");

  if (minus) {
    changeQuantity(minus.dataset.minus, -1);
  } else if (plus) {
    changeQuantity(plus.dataset.plus, 1);
  } else if (remove) {
    removeFromCart(remove.dataset.remove);
  }
});

/* =================================
   OPEN AND CLOSE CART
================================= */

function openCart() {
  if (imageModal.classList.contains("open")) {
    closePerfumeImage();
  }

  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
  closeCartButton.focus();
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
  openCartButton.focus();
}

openCartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

/* =================================
   MESSENGER ORDER CHECKOUT
================================= */

checkoutButton.addEventListener("click", async () => {
  if (cart.length === 0) return;

  const orderLines = cart.map(item =>
    `${item.name} (${item.size}) — ${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}`
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const message = [
    "Hello DA'AR SCENTS! I would like to place an order:",
    "",
    ...orderLines,
    "",
    `Total quantity: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`,
    `Total: ${formatPrice(total)}`,
    "",
    "Please confirm availability and delivery details. Thank you!"
  ].join("\n");

  try {
    await navigator.clipboard.writeText(message);

    alert(
      "Your order details have been copied. Paste the message into your Messenger conversation with DA'AR SCENTS."
    );
  } catch (error) {
    /* Clipboard access may be blocked by browser settings. */
    alert(
      "Messenger will open. If the order message was not copied, please send your selected perfumes, sizes, quantities, and total manually."
    );
  }

  window.open(
    STORE.facebookURL,
    "_blank",
    "noopener,noreferrer"
  );
});

/* =================================
   KEYBOARD ESCAPE SUPPORT
================================= */

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  if (imageModal.classList.contains("open")) {
    closePerfumeImage();
  } else if (cartPanel.classList.contains("open")) {
    closeCart();
  }
});

/* =================================
   INITIALIZE STORE
================================= */

renderProducts();
renderCart();
