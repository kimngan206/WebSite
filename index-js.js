document.addEventListener('DOMContentLoaded', () => {
    // Dữ liệu mẫu về xe máy
    const motorcycles = [
        {
            id: 1,
            brand: 'Honda',
            model: 'Vision',
            type: 'Xe tay ga',
            color: 'Trắng',
            year: 2023,
            price: 36612000,
            description: 'Kiểu dáng thời trang và màu sắc cá tính. Thân xe nhỏ gọn kế thừa từ nét thiết kế của dòng xe SH, đường nét rõ ràng, liền mạch, càng nổi bật hơn là tông màu Đen và Xám Đen độc đáo.',
            image: 'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1732161471/7.png'
        },
        {
            id: 2,
            brand: 'Yamaha',
            model: 'NVX 155',
            type: 'Xe tay ga',
            color: 'Xanh',
            year: 2025,
            price: 69000000,
            description: 'Tái định nghĩa lại thị trường xe tay ga thể thao tại Việt Nam, NVX 155 Hoàn Toàn Mới ra mắt với khối động cơ đột phá YECVT và diện mạo thể thao đậm chất R-DNA.',
            image: 'https://yamaha-motor.com.vn/wp/wp-content/uploads/2024/02/NVX-Pearl-Blue-004-1024x860.png'
        },
        {
            id: 3,
            brand: 'Suzuki',
            model: 'V-STROM 250SX',
            type: 'Xe phân khối lớn',
            color: 'Xám',
            year: 2022,
            price: 132900000,
            description: 'Khung sườn mới, nhẹ nhưng chắc chắn, gia tăng độ ổn định và khả năng điều khiển vượt trội. Góc lái linh hoạt và hệ thống treo tối ưu giúp V-STROM vượt qua các khúc cua dễ dàng.',
            image: 'https://i1-vnexpress.vnecdn.net/2023/04/06/Xam360UpWeb45Traipng-1680749616.png?w=380&h=0&q=100&dpr=1&fit=crop&s=jAkuU8WOr3JwRPfjJ7VElA&t=image'
        },
        {
            id: 4,
            brand: 'Kawasaki',
            model: 'W800',
            type: 'Xe phân khối lớn',
            color: 'Đen',
            year: 2025,
            price: 352400000,
            description: 'W800 khá thân thiện kể cả với những người mới chơi xe Phân khối lớn, sử dụng động cơ đôi thẳng hàng SOHC 773cc làm mát bằng không khí.',
            image: 'https://premiumbikes.ph/wp-content/uploads/2023/02/Kawasaki-W800-Cafe.png'
        },
        {
            id: 5,
            brand: 'Honda',
            model: 'Super Cub C125',
            type: 'Xe số',
            color: 'Đen',
            year: 2024,
            price: 86292000,
            description: 'Thiết kế hình chữ S kế thừa kiểu dáng huyền thoại của xe Super Cub thập niên 50, mang đến sự hài hòa và mềm mại với lớp sơn nhũ ánh kim.',
            image: 'https://cdn.honda.com.vn/motorbike-versions/July2024/4mvfY4O7TXBSDullbfAZ.png'
        },
        {
            id: 6,
            brand: 'Yamaha',
            model: 'NEOs',
            type: 'Xe điện',
            color: 'Đen',
            year: 2024,
            price: 49091000,
            description: 'Những tính năng và công nghệ của NEOs giúp mẫu xe này trở thành phương tiện di chuyển xanh và thân thiện với môi trường.',
            image: 'https://yamaha-motor.com.vn/wp/wp-content/uploads/2022/12/Neos-Black-Metallic-004-1-1024x860.png'
        }
    ];

    const motorcycleListings = document.getElementById('motorcycleListings');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const yearFilter = document.getElementById('yearFilter');
    const typeFilter = document.getElementById('typeFilter');
    const colorFilter = document.getElementById('colorFilter');

    // Lấy các phần tử modal
    const motorcycleModal = document.getElementById('motorcycleModal');
    const closeButton = document.querySelector('.close-button');
    const modalBody = document.getElementById('modalBody');

    // Thêm các element cho trạng thái đăng nhập
    const userActionsContainer = document.getElementById('user-actions-container');

    // Mobile menu elements
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');

    // ===========================================
    // MOBILE MENU FUNCTIONALITY
    // ===========================================
    const openMobileMenu = () => {
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    mobileMenuToggle.addEventListener('click', openMobileMenu);
    mobileNavClose.addEventListener('click', closeMobileMenu);
    mobileNavOverlay.addEventListener('click', closeMobileMenu);

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
            // Handle smooth scroll for mobile nav links
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hàm định dạng tiền tệ
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    // Hàm hiển thị danh sách xe máy
    const displayMotorcycles = (bikes) => {
        motorcycleListings.innerHTML = '';
        if (bikes.length === 0) {
            motorcycleListings.innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                            <i class="fas fa-search" style="font-size: 3rem; color: var(--secondary-color); margin-bottom: 20px;"></i>
                            <p style="font-size: 1.2rem; color: var(--secondary-color); font-style: italic;">Không tìm thấy xe máy nào phù hợp với tiêu chí tìm kiếm.</p>
                        </div>
                    `;
            return;
        }

        bikes.forEach((motorcycle, index) => {
            const card = document.createElement('div');
            card.classList.add('motorcycle-card');
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                        <img src="${motorcycle.image}" alt="${motorcycle.brand} ${motorcycle.model}" loading="lazy">
                        <div class="card-content">
                            <h3>${motorcycle.brand} ${motorcycle.model}</h3>
                            <p class="price">${formatCurrency(motorcycle.price)}</p>
                            <p class="description">${motorcycle.description}</p>
                            <button class="view-details" data-id="${motorcycle.id}">
                                <i class="fas fa-eye"></i> Xem chi tiết
                            </button>
                        </div>
                    `;
            motorcycleListings.appendChild(card);
        });
    };

    // Hàm lọc và tìm kiếm xe máy
    const filterAndSearchMotorcycles = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedBrand = brandFilter.value;
        const selectedPriceRange = priceFilter.value;
        const selectedYear = yearFilter.value;
        const selectedType = typeFilter.value;
        const selectedColor = colorFilter.value;

        // Show loading animation
        searchButton.innerHTML = '<span class="loading"></span> Đang tìm...';

        setTimeout(() => {
            let filteredBikes = motorcycles.filter(bike => {
                const matchesSearch = bike.brand.toLowerCase().includes(searchTerm) ||
                    bike.model.toLowerCase().includes(searchTerm) ||
                    bike.description.toLowerCase().includes(searchTerm) ||
                    String(bike.year).includes(searchTerm);

                const matchesBrand = selectedBrand === '' || bike.brand === selectedBrand;

                const matchesYear = selectedYear === '' || bike.year === parseInt(selectedYear);

                const matchesType = selectedType === '' || bike.type === selectedType;

                const matchesColor = selectedColor === '' || bike.color === selectedColor;

                const matchesPrice = (() => {
                    if (selectedPriceRange === '') return true;

                    const [minStr, maxStr] = selectedPriceRange.split('-');
                    let minPrice = parseFloat(minStr) * 1000000;
                    let maxPrice = maxStr ? parseFloat(maxStr) * 1000000 : Infinity;

                    if (selectedPriceRange === '500+') {
                        minPrice = 500000000;
                        maxPrice = Infinity;
                    }

                    return bike.price >= minPrice && bike.price <= maxPrice;
                })();



                return matchesSearch && matchesBrand && matchesPrice && matchesYear && matchesType && matchesColor;
            });

            displayMotorcycles(filteredBikes);
            searchButton.innerHTML = '<i class="fas fa-search"></i> Tìm Kiếm';
        }, 500);
    };

    // Xử lý sự kiện tìm kiếm và lọc
    searchButton.addEventListener('click', filterAndSearchMotorcycles);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            filterAndSearchMotorcycles();
        }
    });
    brandFilter.addEventListener('change', filterAndSearchMotorcycles);
    priceFilter.addEventListener('change', filterAndSearchMotorcycles);
    yearFilter.addEventListener('change', filterAndSearchMotorcycles);
    typeFilter.addEventListener('change', filterAndSearchMotorcycles);
    colorFilter.addEventListener('change', filterAndSearchMotorcycles);

    // Xử lý nút "Xem chi tiết"
    motorcycleListings.addEventListener('click', (event) => {
        const clickedButton = event.target.closest('.view-details');
        if (clickedButton) {
            const bikeId = clickedButton.dataset.id;
            const selectedBike = motorcycles.find(bike => bike.id === parseInt(bikeId));
            if (selectedBike) {
                modalBody.innerHTML = `
                            <div class="modal-details-container">
                                <div class="modal-image-wrapper">
                                    <img src="${selectedBike.image}" alt="${selectedBike.brand} ${selectedBike.model}">
                                </div>
                                <div class="modal-text-content">
                                    <h3>${selectedBike.brand} ${selectedBike.model} (${selectedBike.year})</h3>
                                    <p class="modal-price">${formatCurrency(selectedBike.price)}</p>
                                    <div class="modal-details-item"><strong>Hãng xe:</strong> ${selectedBike.brand}</div>
                                    <div class="modal-details-item"><strong>Mẫu xe:</strong> ${selectedBike.model}</div>
                                    <div class="modal-details-item"><strong>Năm sản xuất:</strong> ${selectedBike.year}</div>
                                    <div class="modal-details-item"><strong>Tình trạng:</strong> Mới 100%</div>
                                    <div class="modal-details-item"><strong>Bảo hành:</strong> 3 năm chính hãng</div>
                                    <p class="modal-description"><strong>Mô tả:</strong><br>${selectedBike.description}</p>
                                    <div style="margin-top: 30px; display: flex; gap: 15px;">
                                        <button onclick="alert('Tính năng liên hệ sẽ được cập nhật!')" style="flex: 1; padding: 15px; background: var(--gradient-bg); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                                            <i class="fas fa-phone"></i> Liên hệ tư vấn
                                        </button>
                                        <button onclick="alert('Tính năng đặt xe sẽ được cập nhật!')" style="flex: 1; padding: 15px; background: #28a745; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                                            <i class="fas fa-shopping-cart"></i> Đặt xe ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                motorcycleModal.style.display = 'flex';
            }
        }
    });

    // Xử lý đóng modal
    closeButton.addEventListener('click', () => {
        motorcycleModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === motorcycleModal) {
            motorcycleModal.style.display = 'none';
        }
    });

    // ===========================================
    // LOGIC ĐĂNG NHẬP / ĐĂNG KÝ
    // ===========================================
    const updateHeaderForUser = () => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

        userActionsContainer.innerHTML = '';

        if (loggedInUser) {
            // Nếu người dùng đã đăng nhập, hiển thị tên và nút đăng xuất
            const userInfoDiv = document.createElement('div');
            userInfoDiv.classList.add('user-info');
            userInfoDiv.innerHTML = `
                <span>Xin chào, ${loggedInUser.username}!</span>
                <a href="#" id="logout-btn" class="logout-btn">Đăng xuất</a>
            `;
            userActionsContainer.appendChild(userInfoDiv);

            // Xử lý sự kiện đăng xuất
            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                sessionStorage.removeItem('loggedInUser');
                updateHeaderForUser();
                //alert('Bạn đã đăng xuất.');
            });

        } else {
            // Nếu chưa đăng nhập, hiển thị nút Đăng nhập và Đăng ký
            userActionsContainer.innerHTML = `
                <a href="login.html">Đăng Nhập</a>
                <a href="register.html">Đăng Ký</a>
            `;
        }
    };

    // Khởi tạo trạng thái header khi trang tải
    updateHeaderForUser();

    // Hiển thị tất cả xe máy khi tải trang lần đầu
    displayMotorcycles(motorcycles);


    // Khởi tạo trạng thái header khi trang tải
    updateHeaderForUser();

    // Hiển thị tất cả xe máy khi tải trang lần đầu
    displayMotorcycles(motorcycles);

    // ===========================================
    // SMOOTH SCROLLING CHO NAVIGATION
    // ===========================================
    document.querySelectorAll('a[href^="#"]:not(.login-btn):not(.register-btn)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================================
    // HEADER SCROLL EFFECT
    // ===========================================
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,235,234,0.9))';
            header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
        } else {
            header.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,235,234,0.95))';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    });

    // ===========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('.brands-section, .listings-section, .about-section').forEach(section => {
        observer.observe(section);
    });

    // ===========================================
    // BRANDS CAROUSEL FUNCTIONALITY
    // ===========================================
    const initBrandsCarousel = () => {
        const carousel = document.querySelector('.brands-carousel');
        const dots = document.querySelectorAll('.dot');

        if (!carousel || !dots.length) return;

        let currentSlide = 0;
        const totalSlides = 4; // Số slide thực tế (không tính duplicate)
        const slideWidth = 300; // Width của mỗi slide
        let autoSlideInterval;

        // Function to move to specific slide
        const goToSlide = (slideIndex) => {
            currentSlide = slideIndex;
            const translateX = -(slideIndex * slideWidth);
            carousel.style.transform = `translateX(${translateX}px)`;

            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === slideIndex);
            });
        };

        // Function for next slide
        const nextSlide = () => {
            if (currentSlide >= totalSlides - 1) {
                // Jump to first duplicate (index 4) instantly
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(${-(totalSlides * slideWidth)}px)`;

                // After a brief delay, animate to actual first slide
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease-in-out';
                    goToSlide(0);
                }, 50);
            } else {
                goToSlide(currentSlide + 1);
            }
        };

        // Auto slide functionality
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        };

        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        };

        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                goToSlide(index);
                startAutoSlide();
            });
        });

        // Pause on hover
        const carouselContainer = document.querySelector('.brands-carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoSlide);
            carouselContainer.addEventListener('mouseleave', startAutoSlide);
        }

        // Initialize
        goToSlide(0);
        startAutoSlide();

        // Handle responsive slide width
        const updateSlideWidth = () => {
            const containerWidth = carouselContainer.offsetWidth;
            const slideElement = document.querySelector('.brand-slide');
            if (slideElement) {
                const computedStyle = window.getComputedStyle(slideElement);
                const newSlideWidth = slideElement.offsetWidth;

                // Update carousel width and position
                if (newSlideWidth !== slideWidth) {
                    const translateX = -(currentSlide * newSlideWidth);
                    carousel.style.transform = `translateX(${translateX}px)`;
                }
            }
        };

        // Update on window resize
        window.addEventListener('resize', updateSlideWidth);
    };

    // Initialize brands carousel
    initBrandsCarousel();

});

// Banner Popup JavaScript

// Hiển thị banner khi trang load
window.addEventListener('load', function () {
    // Delay nhỏ để trang load hoàn toàn
    setTimeout(showBanner, 500);
});

// Function hiển thị banner
function showBanner() {
    const banner = document.getElementById('bannerOverlay');
    if (banner) {
        banner.classList.add('show');
        // Ngăn cuộn trang khi banner hiển thị
        document.body.style.overflow = 'hidden';
    }
}

// Function đóng banner
function closeBanner() {
    const banner = document.getElementById('bannerOverlay');
    if (banner) {
        banner.classList.remove('show');
        // Cho phép cuộn trang trở lại
        document.body.style.overflow = 'auto';
    }
}

// Đóng banner khi click vào overlay (bên ngoài banner)
document.getElementById('bannerOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closeBanner();
    }
});

// Đóng banner khi nhấn phím ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeBanner();
    }
});

// Tự động đóng banner sau 30 giây (tùy chọn)
setTimeout(function () {
    const banner = document.getElementById('bannerOverlay');
    if (banner && banner.classList.contains('show')) {
        closeBanner();
    }
}, 30000); // 30 giây

// Thêm hiệu ứng khi hover vào CTA button
document.querySelector('.cta-button')?.addEventListener('click', function () {
    // Thêm hiệu ứng khi click
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);

    // Đóng banner sau khi click (hoặc chuyển hướng đến trang khác)
    setTimeout(closeBanner, 1000);

    // Ở đây bạn có thể thêm code để chuyển hướng đến trang khuyến mãi
    // window.location.href = '/khuyen-mai';
});

// Thêm hiệu ứng shake cho banner khi load
function addShakeEffect() {
    const container = document.querySelector('.banner-container');
    if (container) {
        container.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            container.style.animation = '';
        }, 500);
    }
}

// CSS cho hiệu ứng shake (thêm vào đầu trang)
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyle);

// Gọi hiệu ứng shake sau khi banner hiển thị
setTimeout(addShakeEffect, 1000);

// Theo dõi thời gian người dùng xem banner
let bannerStartTime;
document.getElementById('bannerOverlay').addEventListener('transitionend', function (e) {
    if (e.propertyName === 'opacity' && this.classList.contains('show')) {
        bannerStartTime = Date.now();
        console.log('Banner đã hiển thị');
    }
});

// Ghi log khi đóng banner
function logBannerClose() {
    if (bannerStartTime) {
        const viewTime = (Date.now() - bannerStartTime) / 1000;
        console.log(`Banner được xem trong ${viewTime.toFixed(1)} giây`);
    }
}

// Gọi log khi đóng banner
const originalCloseBanner = closeBanner;
closeBanner = function () {
    logBannerClose();
    originalCloseBanner();
};s
