document.addEventListener('DOMContentLoaded', () => {
    // Dữ liệu mẫu về xe máy
    const motorcycles = [
        {
            id: 1,
            brand: 'Honda',
            model: 'Vision',
            year: 2023,
            price: 36612000,
            description: 'Kiểu dáng thời trang và màu sắc cá tính. Thân xe nhỏ gọn kế thừa từ nét thiết kế của dòng xe SH, đường nét rõ ràng, liền mạch, càng nổi bật hơn là tông màu Đen và Xám Đen độc đáo trên phiên bản Thể thao, chắc chắn sẽ là sự lựa chọn tuyệt vời cho chủ sở hữu có cá tính mạnh. Ngoài ra, các điểm phối màu mới tinh tế được thể hiện trên nhiều chi tiết thiết kế giúp đem lại hình ảnh thời trang cho mẫu xe mới.',
            image: 'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1732161471/7.png'

        },
        {
            id: 2,
            brand: 'Yamaha',
            model: 'NVX 155',
            year: 2025,
            price: 69000000,
            description: 'Tái định nghĩa lại thị trường xe tay ga thể thao tại Việt Nam, NVX 155 Hoàn Toàn Mới ra mắt với khối động cơ đột phá YECVT và diện mạo thể thao đậm chất R-DNA. Hàng loạt tính năng công nghệ tiên tiến nhất đang chờ được khám phá: Shift Button thay đổi tỷ số truyền động theo ý muốn, hai chế độ tùy chỉnh, hệ thống kiểm soát lực kéo TCS, màn hình TFT, hệ thống chống bó cứng phanh ABS, Smartkey,...',
            image: 'https://yamaha-motor.com.vn/wp/wp-content/uploads/2025/06/Xanh-Duong-G8-1024x684.png'
        },
        {
            id: 3,
            brand: 'Suzuki',
            model: 'V-STROM 250SX',
            year: 2022,
            price: 132900000,
            description: 'Khung sườn mới, nhẹ nhưng chắc chắn, gia tăng độ ổn định và khả năng điều khiển vượt trội. Góc lái linh hoạt và hệ thống treo tối ưu giúp V- STROM vượt qua các khúc cua và địa hình khó khăn một cách dễ dàng. Động cơ 250cc, SOHC, làm mát bằng dung dịch, phun xăng điện tử, kết hợp cùng hệ thống SEP giúp V - STROM 250SX vận hành mạnh mẽ, bền bỉ và tiết kiệm nhiên liệu, mang đến những trải nghiệm lái xe tuyệt vời.',
            image: 'https://suzuki-world.com.vn/Vstrom250SX/Vstrom_360_Image_PC_2.png'
        },
        {
            id: 4,
            brand: 'Kawasaki',
            model: 'W800',
            year: 2025,
            price: 352400000,
            description: 'W800 khá thân thiện kể cả với những người mới chơi xe Phân khối lớn, sử dụng động cơ đôi thẳng hàng SOHC 773cc làm mát bằng không khí. Bộ động cơ này sản sinh ra công suất cực đại 48 PS ở 6.000 rpm, mô-men xoắn cực đại đạt 62.9 N.m tại 4.800 rpm.',
            image: 'https://content2.kawasaki.com/ContentStorage/KMV/Products/4938/0af24e09-b25a-4dd1-9437-69ede32e40db.jpg?w=675'
        },
        {
            id: 5,
            brand: 'Honda',
            model: 'Super Cub C125',
            year: 2024,
            price: 86292000,
            description: 'Thiết kế hình chữ S kế thừa kiểu dáng huyền thoại của xe Super Cub thập niên 50, mang đến sự hài hòa và mềm mại. Lớp sơn nhũ ánh kim kết hợp với các chi tiết mạ crôm tinh tế gợi lên nét đẹp cổ điển, pha lẫn sự sang trọng, cao cấp, đặc trưng của dòng xe Super Cub.',
            image: 'https://cdn.honda.com.vn/motorbike-versions/July2024/4mvfY4O7TXBSDullbfAZ.png'
        },
        {
            id: 6,
            brand: 'Yamaha',
            model: 'NEOs',
            year: 2024,
            price: 49091000,
            description: 'Những tính năng và công nghệ của NEOs giúp mẫu xe này trở thành phương tiện di chuyển xanh và thân thiện với môi trường.Yamaha NEOs hứa hẹn sẽ là chiếc xe thông minh dành cho các bạn trẻ năng động, thời thượng, hiện đại và hướng tới tương lai.',
            image: 'https://yamaha-motor.com.vn/wp/wp-content/uploads/2022/12/Neos-Black-Metallic-004-1-1024x860.png'
        },
        //{
        //    id: 7,
        //    brand: 'Ducati',
        //    model: 'Panigale V4',
        //    year: 2024,
        //    price: 770000000,
        //    description: 'Ducati Panigale V4 là biểu tượng của tốc độ và hiệu suất, được trang bị động cơ Desmosedici Stradale V4 mạnh mẽ. Thiết kế khí động học tiên tiến, hệ thống điện tử hỗ trợ lái xe hiện đại, mang đến trải nghiệm lái xe trên đường đua đỉnh cao.',
        //    image: 'https://www.ducati.com/content/dam/ducati/bikes/Panigale/Panigale_V4_2025/360/color-1/01-Bike.png/_jcr_content/renditions/cq5dam.web.1280.1280.png'
        //},
        //{
        //    id: 8,
        //    brand: 'Kawasaki',
        //    model: 'Ninja H2R',
        //    year: 2023,
        //    price: 1500000000,
        //    description: 'Ninja H2R là siêu môtô đường đua mạnh nhất của Kawasaki, được trang bị động cơ siêu nạp (supercharged) độc quyền. Chiếc xe này không dành cho đường phố, chỉ dùng để trải nghiệm tốc độ và sức mạnh tối đa trên đường đua.',
        //    image: 'https://www.kawasaki.com/ContentStorage/KMV/Products/8051/e09e3794-0985-45a8-b63e-324d47c40498.png'
        //}
    ];

    const motorcycleListings = document.getElementById('motorcycleListings');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');

    // Lấy các phần tử modal
    const motorcycleModal = document.getElementById('motorcycleModal');
    const closeButton = document.querySelector('.close-button');
    const modalBody = document.getElementById('modalBody');

    // Thêm các element cho trạng thái đăng nhập
    const userActionsContainer = document.getElementById('user-actions-container');

    // Hàm định dạng tiền tệ
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    // Hàm hiển thị danh sách xe máy
    const displayMotorcycles = (bikes) => {
        motorcycleListings.innerHTML = '';
        if (bikes.length === 0) {
            motorcycleListings.innerHTML = '<p style="text-align: center; width: 100%; font-style: italic; color: var(--secondary-color);">Không tìm thấy xe máy nào phù hợp.</p>';
            return;
        }

        bikes.forEach(motorcycle => {
            const card = document.createElement('div');
            card.classList.add('motorcycle-card');
            card.innerHTML = `
                <img src="${motorcycle.image}" alt="${motorcycle.brand} ${motorcycle.model}">
                <h3>${motorcycle.brand} ${motorcycle.model}</h3>
                <p class="price">${formatCurrency(motorcycle.price)}</p>
                <p class="description">${motorcycle.description}</p>
                <button class="view-details" data-id="${motorcycle.id}">Xem chi tiết</button>
            `;
            motorcycleListings.appendChild(card);
        });
    };

    // Hàm lọc và tìm kiếm xe máy
    const filterAndSearchMotorcycles = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedBrand = brandFilter.value;
        const selectedPriceRange = priceFilter.value;

        let filteredBikes = motorcycles.filter(bike => {
            const matchesSearch = bike.brand.toLowerCase().includes(searchTerm) ||
                bike.model.toLowerCase().includes(searchTerm) ||
                bike.description.toLowerCase().includes(searchTerm) ||
                String(bike.year).includes(searchTerm);

            const matchesBrand = selectedBrand === '' || bike.brand === selectedBrand;

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

            return matchesSearch && matchesBrand && matchesPrice;
        });

        displayMotorcycles(filteredBikes);
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
                            <p class="modal-details-item"><strong>Hãng:</strong> ${selectedBike.brand}</p>
                            <p class="modal-details-item"><strong>Mẫu:</strong> ${selectedBike.model}</p>
                            <p class="modal-details-item"><strong>Năm sản xuất:</strong> ${selectedBike.year}</p>
                            <p class="modal-description">${selectedBike.description}</p>
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
});