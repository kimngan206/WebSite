document.addEventListener('DOMContentLoaded', function () {
    // Get all necessary DOM elements
    const body = document.body;
    const cartIconButton = document.getElementById('cart-icon-button');
    const cartPanel = document.getElementById('cart-panel');
    const closeCartPanelButton = document.getElementById('close-cart-panel');
    const backdropOverlay = document.getElementById('backdrop-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartTotalSpan = document.getElementById('cart-total');
    const cartItemCountSpan = document.getElementById('cart-item-count');
    const notificationContainer = document.querySelector('.notification-container');

    // Product Detail Modal elements
    const productDetailPanel = document.getElementById('product-detail-panel');
    const closeDetailPanelButton = document.getElementById('close-product-detail-panel');
    const detailProductImage = document.getElementById('product-detail-image');
    const detailProductName = document.getElementById('product-detail-name');
    const detailProductPrice = document.getElementById('product-detail-price');
    const detailProductDescription = document.getElementById('product-detail-description');
    const detailColorOptions = document.getElementById('product-detail-colors');
    const detailQuantityInput = document.getElementById('product-detail-quantity');
    const addToCartFromModalButton = document.getElementById('add-to-cart-from-modal');

    // Cart state - Load from localStorage or initialize empty
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add item to cart
    function addItemToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        renderCart();
        showNotification(`Đã thêm ${product.name} vào giỏ hàng!`);
    }

    // Format currency
    function formatCurrency(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type === 'error' ? 'error' : ''}`;
        notification.textContent = message;
        notificationContainer.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        if (cart.length === 0) {
            emptyCartMessage.classList.remove('hidden');
            cartTotalSpan.textContent = '0 VNĐ';
            cartItemCountSpan.classList.add('hidden');
        } else {
            emptyCartMessage.classList.add('hidden');
            cartItemCountSpan.classList.remove('hidden');

            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                            <img src="${item.image}" alt="${item.name}">
                            <div class="cart-item-details">
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-price">${formatCurrency(item.price)} VNĐ</div>
                                <div class="cart-item-quantity">
                                    <button class="quantity-change-btn" data-index="${index}" data-change="-1">-</button>
                                    <span>${item.quantity}</span>
                                    <button class="quantity-change-btn" data-index="${index}" data-change="1">+</button>
                                </div>
                            </div>
                            <button class="cart-item-remove" data-index="${index}">
                                <i class="fas fa-trash"></i>
                            </button>
                        `;
                cartItemsContainer.appendChild(itemElement);
                total += item.price * item.quantity;
                itemCount += item.quantity;
            });

            cartTotalSpan.textContent = formatCurrency(total) + ' VNĐ';
            cartItemCountSpan.textContent = itemCount;
        }
    }

    // Handle quantity change and remove item from cart
    cartItemsContainer.addEventListener('click', (e) => {
        const quantityChangeBtn = e.target.closest('.quantity-change-btn');
        const removeItemBtn = e.target.closest('.cart-item-remove');

        if (quantityChangeBtn) {
            const index = parseInt(quantityChangeBtn.dataset.index);
            const change = parseInt(quantityChangeBtn.dataset.change);
            if (cart[index]) {
                cart[index].quantity += change;
                if (cart[index].quantity <= 0) {
                    const itemName = cart[index].name;
                    cart.splice(index, 1);
                    showNotification(`Đã xóa ${itemName} khỏi giỏ hàng.`);
                } else {
                    showNotification('Cập nhật số lượng thành công.');
                }
                saveCart();
                renderCart();
            }
        } else if (removeItemBtn) {
            const index = parseInt(removeItemBtn.dataset.index);
            const itemName = cart[index].name;
            cart.splice(index, 1);
            saveCart();
            renderCart();
            showNotification(`Đã xóa ${itemName} khỏi giỏ hàng.`);
        }
    });

    // Open/Close Cart Panel
    cartIconButton.addEventListener('click', () => {
        openCartPanel();
    });

    closeCartPanelButton.addEventListener('click', () => {
        closeCartPanel();
    });

    function openCartPanel() {
        cartPanel.classList.add('open');
        backdropOverlay.classList.add('active');
        body.style.overflow = 'hidden';
    }

    function closeCartPanel() {
        cartPanel.classList.remove('open');
        backdropOverlay.classList.remove('active');
        body.style.overflow = '';
    }

    // Event listener for products
    const productList = document.getElementById('product-list');
    productList.addEventListener('click', (e) => {
        const addToCartBtn = e.target.closest('.add-to-cart-btn');
        const productCard = e.target.closest('.product-card');

        if (addToCartBtn) {
            e.preventDefault();
            e.stopPropagation();

            const productId = addToCartBtn.dataset.productId;
            const product = {
                id: productId,
                name: productCard.dataset.productName,
                price: parseInt(productCard.dataset.productPrice),
                image: productCard.dataset.productImage,
            };
            addItemToCart(product);
            openCartPanel();
        } else if (productCard && !e.target.closest('button')) {
            openProductDetail(productCard);
        }
    });

    // Open product detail modal
    function openProductDetail(productCard) {
        detailProductImage.src = productCard.dataset.productImage;
        detailProductName.textContent = productCard.dataset.productName;
        detailProductPrice.textContent = `Giá: ${formatCurrency(parseInt(productCard.dataset.productPrice))} VNĐ`;
        detailProductDescription.textContent = productCard.dataset.productDescription;

        // Store product data for modal button
        addToCartFromModalButton.dataset.productId = productCard.dataset.productId;
        addToCartFromModalButton.dataset.productPrice = productCard.dataset.productPrice;
        addToCartFromModalButton.dataset.productName = productCard.dataset.productName;
        addToCartFromModalButton.dataset.productImage = productCard.dataset.productImage;

        // Handle color options
        detailColorOptions.innerHTML = '';
        productCard.querySelectorAll('.color-options span').forEach(dot => {
            const newDot = document.createElement('span');
            newDot.className = 'w-6 h-6 rounded-full border border-gray-300 cursor-pointer';
            newDot.style.backgroundColor = dot.style.backgroundColor;
            detailColorOptions.appendChild(newDot);
        });

        productDetailPanel.classList.add('open');
        backdropOverlay.classList.add('active');
        body.style.overflow = 'hidden';
    }

    // Close product detail modal
    function closeProductDetailPanel() {
        productDetailPanel.classList.remove('open');
        backdropOverlay.classList.remove('active');
        body.style.overflow = '';
    }

    // Close modal when clicking close button
    closeDetailPanelButton.addEventListener('click', () => {
        closeProductDetailPanel();
    });

    // Close modal when clicking backdrop
    backdropOverlay.addEventListener('click', (e) => {
        if (e.target === backdropOverlay) {
            if (cartPanel.classList.contains('open')) {
                closeCartPanel();
            } else if (productDetailPanel.classList.contains('open')) {
                closeProductDetailPanel();
            }
        }
    });

    // Handle add to cart from modal
    addToCartFromModalButton.addEventListener('click', () => {
        const quantity = parseInt(detailQuantityInput.value) || 1;
        const product = {
            id: addToCartFromModalButton.dataset.productId,
            name: addToCartFromModalButton.dataset.productName,
            price: parseInt(addToCartFromModalButton.dataset.productPrice),
            image: addToCartFromModalButton.dataset.productImage,
        };

        // Add the specified quantity
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity: quantity });
        }

        saveCart();
        renderCart();
        showNotification(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);

        closeProductDetailPanel();
        openCartPanel();
    });

    // Handle checkout button - Navigate to shopping cart page
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            // Cart data is already saved to localStorage
            // Navigate to shopping cart page
            window.location.href = 'shoppingcart.html';
        } else {
            showNotification('Giỏ hàng của bạn đang trống!', 'error');
        }
    });

    // Initialize cart on page load
    renderCart();
});
