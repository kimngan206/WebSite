// ========== SAMPLE PRODUCTS ==========
// Thêm thuộc tính colors và imageVariants
const products = [
    {
        id: 1, name: "PG-1", price: 30437000, desc: "Yamaha PG-1 là sự kết hợp từ sự vận hành dễ dàng của một chiếc xe đô thị cùng khả năng off-road của một mẫu xe việt dã", type: "xeso",
        image: "image/PG1-2024-Black-Mat-004-1-1024x860.png",
        colors: ["cyan", "yellow", "orange", "milky", "green", "black"],
        imageVariants: {
            cyan: "image/PG1-Cyan-004-1024x860.png",
            yellow: "image/PG1-yellow-004-1024x860.png",
            orange: "image/PG1-orange-004-1024x860.png",
            milky: "image/PG1-milky-004-1024x860.png",
            green: "image/PG1-Green-Pastel-004-1024x860.png",
            black: "image/PG1-Black-004-1024x860.png"
        }
    },
    {
        id: 2, name: "Sirius FI", price: 21208000, desc: "Nhờ trang bị hệ thống phun xăng điện tử FI, xe Sirius FI có mức tiêu thụ nhiên liệu cực kì tiết kiệm chỉ 1,65 lít/100km", type: "xeso",
        image: "image/Si-Fi-RC-Silver-Blue-Mat-004-1-1024x859.png",
        colors: ["whiteblue"]
    },
    {
        id: 3, name: "Sirius FI phanh cơ", price: 21306000, desc: "Cho đến nay, dòng xe này đã được cải tiến đáng kể về thiết kế và động cơ. Hiện xe có 3 phiên bản: phanh cơ, phanh đĩa và vành đúc.", type: "xeso",
        image: "image/SIRUS_FI_phanhco-removebg-preview.png",
        colors: ["whitemint"]
    },
    {
        id: 4, name: "Sirius", price: 21993000, desc: "Yamaha Sirius là mẫu xe số bền bỉ đã có mặt tại thị trường Việt Nam từ hơn 20 năm trước. Cho đến nay, dòng xe này đã được cải tiến đáng kể về thiết kế.", type: "xeso",
        image: "image/Sirius-RC-Mat-Red-004-1024x768.png",
        colors: ["maroon"]
    },
    {
        id: 5, name: "Sirius FI phanh đĩa", price: 21306000, desc: "Cho đến nay, dòng xe này đã được cải tiến đáng kể về thiết kế và động cơ. Hiện xe có 3 phiên bản: phanh cơ, phanh đĩa và vành đúc.", type: "xeso",
        image: "image/SIRUS_phanhdia-removebg-preview.png",
        colors: ["bluegray"]
    },
    {
        id: 6, name: "Exciter", price: 48200000, desc: "Yamaha Exciter là mẫu xe côn tay được ưa chuộng nhất tại thị trường Việt Nam. Bên cạnh phiên bản Exciter 150 rất được yêu thích.", type: "xeso",
        image: "image/Exciter-155-VVA-Black-Standard_004-1024x860.png",
        colors: ["darkred"]
    },
    {
        id: 7, name: "Exciter 155 VVA", price: 54200000, desc: "Thiết kế mạnh mẽ như xe phân khối lớn, Exciter vừa đảm bảo tính ổn định và linh hoạt khi vận hành hàng ngày của một chiếc xe thể thao phân khối nhỏ.", type: "xeso",
        image: "image/EXCITER_giohan-removebg-preview.png",
        colors: ["whitemint"]
    },
    {
        id: 8, name: "Exciter 150", price: 445800000, desc: "Dòng Exciter 150 với nhiều chi tiết mới dựa trên các công nghệ đang được áp dụng trên siêu xe thể thao YZF-R1. Vừa mạnh mẽ như xe phân khối lớn.", type: "xeso",
        image: "image/EXCITER_gioihanmoi-removebg-preview.png",
        colors: ["whiteblack"]
    },
    {
        id: 9, name: "Jupiter FINN", price: 28178000, desc: "Xe được trang bị hệ thống phanh xe kết hợp (UBS) giúp kiểm soát phanh tốt hơn trong các tình huống khẩn cấp, tạo sự yên tâm trên mọi cung đường.", type: "xeso",
        image: "image/JUPITER_caocap-removebg-preview.png",
        colors: ["lightgray"]
    },
    {
        id: 10, name: "Jupiter", price: 28768000, desc: "Với thông điệp “Khởi đầu mới cho hành trình yêu thương”, dòng xe Yamaha Jupiter Finn là người bạn đồng hành đáng tin cậy cho mọi hành trình.", type: "xeso",
        image: "image/Jupiter-Den-Nham-G4-1-1024x683-removebg-preview.png",
        colors: ["black"]
    },
    {
        id: 11, name: "Wave Alpha", price: 18742000, desc: "Wave Alpha được trang bị động cơ 110cc bền bỉ, hiệu suất vượt trội mà vẫn đảm bảo khả năng tiết kiệm nhiên liệu một cách tối ưu, từ đó đem lại cảm giác lái thoải mái và dễ chịu cho người sử dụng.", type: "xeso",
        image: "image/Wave-Alpha.png",
        colors: ["black"]
    },
    {
        id: 12, name: "Wave Alpha cổ điển", price: 18939000, desc: "Wave Alpha phiên bản cổ điển với phối màu và tem xe được thiết kế riêng đầy ấn tượng, là sự lựa chọn hoàn hảo cho các bạn trẻ yêu thích phong cách thời trang mang tính hoài cổ.", type: "xeso",
        image: "image/WAVE_xam-removebg-preview.png",
        colors: ["dimgray"]
    },
    // {
    //     id: 13, name: "Blande", price: 21943000, desc: "Phiên bản Thể thao (vành đúc phanh đĩa) sở hữu tem xe 'SPORT' thiết kế mới với màu sắc trẻ trung, nổi bật, tạo cảm giác hiện đại và năng động cho người lái.", type: "xeso",
    //     image: "image/Blande.png",
    //     colors: ["black"]
    // },
    {
        id: 14, name: "NVX", price: 69000000, desc: "Tái định nghĩa lại thị trường xe tay ga thể thao tại Việt Nam, NVX 155 Hoàn Toàn Mới ra mắt với khối động cơ đột phá YECVT", type: "xetayga",
        image: "image/Bac-Anh-Xanh-G8-1024x683.png",
        colors: ["anhbac", "xamden", "xanhduong"],
        imageVariants: {
            anhbac: "image/Bac-Anh-Xanh-G8-1024x683.png",
            xamden: "image/Xanh-Xam-Vien-Do-G8-1024x682.png",
            xanhduong: "image/Xanh-Duong-G8-1024x684.png",

        }
    },
    {
        id: 15, name: "NVX tiêu chuẩn", price: 56500000, desc: "Diện mạo thể thao đậm chất R-DNA cùng hàng loạt công nghệ tiên tiến: kết nối ứng dụng Y-connect, hệ thống chống bó cứng phanh ABS, khóa thông minh Smartkey.", type: "xetayga",
        image: "image/NVX_TIEUCHUAN-removebg-preview.png",
        colors: ["black"]
    },
    {
        id: 16, name: "Janus 125", price: 299151000, desc: "Xe máy Janus Yamaha 125 Hoàn toàn mới được nâng cấp toàn diện từ thiết kế đến tính năng. Thiết kế sắc nét thời thượng với thân xe vuốt gọn.", type: "xetayga",
        image: "image/Ja-Std-2024-Red-Metallic-004-1024x860.png",
        colors: ["winered"]
    },
    {
        id: 17, name: "Janus bản giới hạn", price: 32981000, desc: "Thiết kế phần đầu xe được lấy cảm hứng từ hình ảnh cô nàng Gen trong chiếc áo choàng thời thượng, Janus là sự kết hợp hoàn hảo giữa tính thời trang và nét trẻ trung năng động.", type: "xetayga",
        image: "image/janus_gioihan-removebg-preview.png",
        colors: ["pink"]
    },
    {
        id: 18, name: "Janus", price: 28696000, desc: "Xe máy Janus Yamaha có thiết kế trẻ trung cùng khả năng vận hành mượt mà với mức giá rất phải chăng cùng mức tiêu thụ chỉ 1,87 lít/100km.", type: "xetayga",
        image: "image/Janus-standard-White-Metallic_004-1024x860.png",
        colors: ["white"]
    },
    {
        id: 19, name: "Freego", price: 30340000, desc: "Xe máy Freego Yamaha là mẫu xe tay ga thể thao đời mới có mức giá rất hợp lý, được trang bị toàn diện các tính năng như: khóa thông minh Smart Key, phanh ABS, cốp xe rộng 25 lít, tích hợp cộng sạc điện thoại tiện lợi.", type: "xetayga",
        image: "image/FreeGo-Black-Red-SMK-004-768x645.png",
        colors: ["darkred"]
    },
    {
        id: 20, name: "Freego bản tiêu chuẩn", price: 30633000, desc: "Nổi bật bởi dấu ấn đường phố, kế thừa nét thiết kế thể thao mạnh mẽ - đậm chất DNA thể thao của Yamaha, Freego là sự kết hợp hài hoà giữa tính thực tế và sự tiện nghi.", type: "xetayga",
        image: "image/FREEGO_tieuchuan-removebg-preview.png",
        colors: ["darkred"]
    },
    {
        id: 21, name: "LEXI", price: 48900000, desc: "Xuất phát từ khái niệm 'kết hợp phong cách thể thao và sự tinh tế thời thượng', LEXi 2024 hoàn toàn mới mang lại sức hấp dẫn khó cưỡng với kiểu dáng hiện đại và sang trọng.", type: "xetayga",
        image: "image/Lexi-155_Mat-Black-4-768x645.png",
        colors: ["black"]
    },
    {
        id: 22, name: "LEXI bản tiêu chuẩn ", price: 48500000, desc: "Với khả năng kết nối điện thoại thông minh tiện lợi, sức mạnh khối động cơ 155cc cho công suất và hiệu suất vượt trội so với những khối động cơ cùng dung tích.", type: "xetayga",
        image: "image/LEXI_tieuchuan-removebg-preview.png",
        colors: ["winered"]
    },
    {
        id: 23, name: "Grande", price: 46047000, desc: "Với thiết kế thời trang, thanh lịch và thiết kế cốp xe siêu rộng 27  lít, Yamaha Grande còn là mẫu xe tay ga tiết kiệm xăng số 1 Việt Nam với mức tiêu thụ chỉ 1,66 lít/100km, đảm bảo khả năng tiết kiệm nhiên liệu một cách tối ưu.", type: "xetayga",
        image: "image/Grande-Pre-Dark-Red-Metallic-004-1024x860.png",
        colors: ["winered"]
    },
    {
        id: 24, name: "Grande bản giới hạn", price: 51251000, desc: "Yamaha Grande với thiết kế thanh lịch nhưng vẫn toát lên sự hiện đại với đường cong uyển chuyển mang đến vẻ đẹp vượt thời gian và thiết kế cốp xe siêu rộng.", type: "xetayga",
        image: "image/GRANDE_gioihan-removebg-preview.png",
        colors: ["gold"]
    },
    {
        id: 25, name: "Grande Core Hybrid", price: 49582000, desc: "Yamaha Grande với thiết kế thanh lịch nhưng vẫn toát lên sự hiện đại với đường cong uyển chuyển mang đến vẻ đẹp vượt thời gian.", type: "xetayga",
        image: "image/grande_hybid-removebg-preview.png",
        colors: ["metalicwhite"]
    },
    {
        id: 26, name: "Latte", price: 38095000, desc: "Yamaha Latte nổi bật với thiết kế sang trọng cùng động cơ Blue Core 125cc cho khả năng tiết kiệm nhiên liệu tối ưu với mức tiêu thụ chỉ 1,8 lít/100km.", type: "xetayga",
        image: "image/LATTE_tieuchuan-removebg-preview.png",
        colors: ["red"]
    },
    {
        id: 27, name: "Latte bản giới hạn", price: 38782000, desc: "Nằm trong Top đầu xe tay ga tiết kiệm xăng nhất Việt Nam. Đặc biệt, xe được trang bị hàng loạt tính năng tuyệt vời như SmartKey, cốp xe có thể tích lên đến 37l, nắp bình xăng tiện lợi.", type: "xetayga",
        image: "image/LATTE_gioihan-removebg-preview.png",
        colors: ["mossgray"]
    },
    {
        id: 46, name: "Vision", price: 36612000, desc: "Với kiểu dáng thời trang, trẻ trung và nhỏ gọn, khả năng tiết kiệm nhiên liệu vượt trội và vô cùng bền bỉ, Vision đích thực là mẫu xe tay ga quốc dân đặc biệt được giới trẻ yêu thích.", type: "xetayga",
        image: "image/vision.png",
        colors: ["mossgray"]
    },
    {
        id: 46, name: "AirBlade 160/125", price: 42012000, desc: "Air Blade sở hữu vẻ ngoài ấn tượng lấy cảm hứng từ 'tia sét', thiết kế tổng thể phản chiếu sự cứng cáp trong bề mặt hiện đại xen lẫn những đường nét gọn gàng, sắc nét.", type: "xetayga",
        image: "image/airblade.png",
        colors: ["mossgray"]
    },
    {
        id: 28, name: "NEO'S", price: 49091000, desc: "Yamaha NEO’s là dòng xe điện đang được xuất khẩu và bán ở thị trườn Châu Âu, nay đã chính thức có mặt tại Việt Nam.", type: "xedien",
        image: "image/Neos-Cyan-Metallic-Metallic-004-1-1024x860.png",
        colors: ["cyan"],
        imageVariants: {
            cyan: "image/Neos-Cyan-Metallic-Metallic-004-1-1024x860.png"
        }
    },
    {
        id: 29, name: "ICON e", price: 26803000, desc: "ICON e với thiết kế trẻ trung và mang tính biểu tượng, có thể khiến khách hàng dễ dàng nhận ra và nổi bật giữa đám đông.", type: "xedien",
        image: "image/ICON e.png",
        colors: ["celedon"]
    },
    {
        id: 30, name: "Vento NEO", price: 38782000, desc: "An toàn tối ưu, tự động chẩn đoán lỗi và cảnh báo lỗi giúp người cầm lái chủ động trên mọi hành trình.", type: "xedien",
        image: "image/YER.png",
        colors: ["yellow"]
    },
    {
        id: 31, name: "Klara NEO", price: 38782000, desc: "Tiêu chuẩn chống nước IP67. Động cơ có khả năng chống nước vượt trội ở mức nước ngập sâu 0,5m trong thời gian 30 phút.", type: "xedien",
        image: "image/img_klara_neo.png",
        colors: ["white"]
    },
    {
        id: 32, name: "Felix NEO", price: 38782000, desc: "Hệ thống phanh an toàn. Bộ giảm xóc trước/sau giúp xe vận hành êm ái. Động cơ điện được nâng cấp với công suất tối đa 2500 W.", type: "xedien",
        image: "image/img_feliz_neo.png",
        colors: ["slategray"]
    },
    {
        id: 33, name: "EvoGrand", price: 21000000, desc: "EvoGrand sử dụng Pin LFP với các ưu điểm vượt trội. Trải nghiệm hành trình di chuyển lên tới 262km trong một lần sạc.", type: "xedien",
        image: "image/img_evo_grand_lite.png",
        colors: ["lime"]
    },
    {
        id: 48, name: "Theon S", price: 56900000, desc: "Hệ thống phanh ABS tại cả bánh trước và sau, tăng khả năng chống trượt trong quá trình di chuyển, đảm bảo an toàn trên mọi địa hình.", type: "xedien",
        image: "image/theons.png",
        colors: ["white"]
    },
    {
        id: 47, name: "Motio", price: 12000000, desc: "Thiết kế nhỏ gọn, trẻ trung, năng động với các đường nét bo tròn phù hợp với vóc dáng người Việt.", type: "xedien",
        image: "image/motio-removebg-preview.png",
        colors: ["pink"]
    },
    {
        id: 34, name: "MT-15", price: 69000000, desc: "Tái định nghĩa lại thị trường xe tay ga thể thao tại Việt Nam, NVX 155 Hoàn Toàn Mới ra mắt với khối động cơ đột phá YECVT", type: "xepkl",
        image: "image/MT-15-Black-004-1024x860.png",
        colors: ["black", "blue", "bluegray"],
        imageVariants: {
            black: "image/MT-15-Black-004-1024x860.png",
            blue: "image/MT15_BLUE-004-1024x860.png",
            bluegray: "image/MT15-Xanh-XamGP-004-1-1024x860.png",

        }
    },
    {
        id: 35, name: "XS155R", price: 78000000, desc: "Yamaha XS155R được Yamaha Motor Việt Nam phân phối chính hãng từ đầu năm 2023. Đây là dòng xe rất đáng được mong chờ nhờ thiết kế cổ điển đẹp mắt.", type: "xepkl",
        image: "image/XSR-155-Black-Metallic-004-768x645.png",
        colors: ["black"]
    },
    {
        id: 36, name: "YZF-R15M", price: 87000000, desc: "Yamaha YZF-R15 là mẫu xe thể thao dung tích xy lanh 155cc, sở hữu những đường nét thừa hưởng DNA từ 'đàn anh' YZF-R1.", type: "xepkl",
        image: "image/R15M-Monster-004-1024x860.png",
        colors: ["darkblue"]
    },
    {
        id: 37, name: "MT-07", price: 239000000, desc: "Yamaha R7 được lấy cảm hứng từ phiên bản huyền thoại năm 1999, vốn được chế tạo để mô phỏng mẫu xe thi đấu Supersport của Yamaha với số lượng 500 chiếc.", type: "xepkl",
        image: "image/R7-Group-5821.png",
        colors: ["darkblue"]
    },
    {
        id: 38, name: "MT-10-SP", price: 569000000, desc: "Với 166 mã lực và 112 Nm mô-men xoắn, cùng hệ thống phuộc điện tử Ohlins Electronic Racing và nhiều công nghệ tiên tiến khác, MT-10 SP là sự lựa chọn không thể bỏ qua cho các tín đồ Yamaha.", type: "xepkl",
        image: "image/MT-10-SP.png",
        colors: ["black"]
    },
    {
        id: 39, name: "MT-03", price: 1290000000, desc: "Yamaha MT-03 là mẫu xe thể thao côn tay được cải tiến và phát triển dựa theo hình mẫu của “Kỵ sĩ bóng đêm”, với thiết kế bụi bặm đường phố, mạnh mẽ và cá tính.", type: "xepkl",
        image: "image/MT_03-removebg-preview.png",
        colors: ["cadetblue"]
    },
    {
        id: 40, name: "MT-09", price: 299000000, desc: "Mẫu xe MT-09 là một cỗ máy hoàn toàn mới từ Nhật Bản, mang lại sự phấn khích và đam mê cho cộng đồng mô tô toàn cầu. Được trang bị động cơ CP3 dung tích 890cc, mạnh mẽ và linh hoạt.", type: "xepkl",
        image: "image/MT_09-removebg-preview.png",
        colors: ["charcoal"]
    },
    {
        id: 41, name: "Ténére 700", price: 369000000, desc: "Ténéré 700 sẽ đưa bạn đến bất kỳ đâu, thử thách bất kỳ địa hình nào, mang đến cho bạn trải nghiệm hoàn toàn tự do.", type: "xepkl",
        image: "image/Tenere-removebg-preview.png",
        colors: ["dimgray"]
    },
    {
        id: 42, name: "TRACER 9", price: 369000000, desc: "Kể từ khi ra mắt vào năm 2014, Tracer 9 đã đánh dấu một bước tiến lớn trong phân khúc Sport Touring. Với động cơ mạnh mẽ, thiết kế thể thao và khả năng vận hành linh hoạt.", type: "xepkl",
        image: "image/TRACER_9-removebg-preview.png",
        colors: ["redorange"]
    },
    {
        id: 43, name: "YZF R3 2024", price: 13200000, desc: "Yamaha YZF R3 là mẫu xe phân khối lớn được thiết kế dựa trên cảm hứng từ huyền thoại YZR-M1 của giải đua MotoGP danh tiếng. Mẫu xe moto này được trang bị động cơ 4 thì, xi-lanh đôi.", type: "xepkl",
        image: "image/YZF_R3_2024png-removebg-preview.png",
        colors: ["whitemint"]
    },
    {
        id: 44, name: "WR155", price: 79000000, desc: "Được biết đến như một trong những mẫu xe đa dụng phổ biến tại Đông Nam Á, WR155 R với động cơ mạnh mẽ và khả năng vận hành linh hoạt sẽ mang lại trải nghiệm phiêu lưu.", type: "xepkl",
        image: "image/WR155R-removebg-preview.png",
        colors: ["charcoal"]
    },
    {
        id: 45, name: "CBR1000RR", price: 1051000000, desc: "Hệ thống ga điện tử TBW với hai mô-tơ cung cấp khả năng điều khiển bướm ga riêng biệt cho mỗi cặp xi-lanh, mang lại phản hồi ga mượt mà hơn và cải thiện hiệu suất phanh động cơ.", type: "xepkl",
        image: "image/cbr1000rr.png",
        colors: ["redorange"]
    },

];

// ========== RENDER PRODUCTS ==========
// ========== RENDER PRODUCTS ==========
// ========== RENDER PRODUCTS ==========
function renderProducts(list) {
    const sections = {
        xeso: "Xe số",
        xetayga: "Xe tay ga",
        xedien: "Xe điện",
        xepkl: "Xe phân khối lớn",
    };

    const container = document.getElementById("product-sections");
    container.innerHTML = "";

    Object.keys(sections).forEach(type => {
        const filtered = list.filter(p => p.type === type);
        if (filtered.length > 0) {
            const section = document.createElement("div");
            section.innerHTML = `
                <h3 class="section-title">${sections[type]}</h3>
                <div id="carousel-${type}" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner" id="section-${type}"></div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${type}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carousel-${type}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            `;
            container.appendChild(section);

            const inner = section.querySelector(`#section-${type}`);

            // Chia sản phẩm thành nhóm 4
            for (let i = 0; i < filtered.length; i += 4) {
                const chunk = filtered.slice(i, i + 4);
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("carousel-item");
                if (i === 0) itemDiv.classList.add("active");

                const row = document.createElement("div");
                row.classList.add("row", "g-4");

                chunk.forEach(p => {
                    row.innerHTML += `
                      <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="product-card product-card-link" data-id="${p.id}">
                          <img src="${p.image}" alt="${p.name}">
                          <h5>${p.name}</h5>
                          <p class="price">${formatCurrency(p.price)}</p>
                          <p class="desc">${p.desc}</p>
                          <button class="add-to-cart" 
                            data-id="${p.id}" 
                            data-name="${p.name}" 
                            data-price="${p.price}" 
                            data-image="${p.image}">
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    `;
                });

                itemDiv.appendChild(row);
                inner.appendChild(itemDiv);
            }
        }
    });

    // Di chuyển hai hàm này ra ngoài vòng lặp forEach
    bindAddToCartButtons();
    bindProductDetailButtons();
}


// ========== FORMAT ==========
function formatCurrency(num) {
    return num.toLocaleString("vi-VN") + " VNĐ";
}

// ========== FILTER & SORT ==========
function applyFilters() {
    let filtered = [...products];
    // ...
    renderProducts(filtered);
    // loại xe
    const checkedTypes = Array.from(document.querySelectorAll(".filter-type:checked")).map(c => c.value);
    if (checkedTypes.length > 0) {
        filtered = filtered.filter(p => checkedTypes.includes(p.type));
    }

    // giá
    const min = parseInt(document.getElementById("min-price").value) || 0;
    const max = parseInt(document.getElementById("max-price").value) || Infinity;
    filtered = filtered.filter(p => p.price >= min && p.price <= max);

    // sort
    const sort = document.getElementById("sort-price").value;
    if (sort === "asc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "desc") filtered.sort((a, b) => b.price - a.price);

    renderProducts(filtered);
}

// ========== CART ==========
class ShoppingCart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem("cart")) || [];
        this.cartCount = document.querySelector(".cart-count");
        this.cartDropdown = document.querySelector(".cart-dropdown");
        this.cartItems = document.querySelector(".cart-items");
        this.totalAmount = document.querySelector(".total-amount");
        this.updateCartUI();
        this.bindEvents();
    }

    bindEvents() {
        document.querySelector(".cart-icon").addEventListener("click", (e) => {
            e.stopPropagation();
            this.showCartModal();
        });

        document.addEventListener("click", () => {
            this.cartDropdown.classList.remove("show");
        });

        document.querySelector(".view-cart").addEventListener("click", () => {
            this.showCartModal();
        });

        document.querySelector(".close-cart-modal").addEventListener("click", () => {
            this.hideCartModal();
        });

        document.querySelector(".btn-continue-shopping").addEventListener("click", () => {
            this.hideCartModal();
        });
    }

    add(id, name, price, image) {
        const item = this.cart.find(i => i.id == id);
        if (item) item.quantity++;
        else this.cart.push({ id, name, price, image, quantity: 1 });
        this.save();
    }

    remove(id) {
        this.cart = this.cart.filter(i => i.id != id);
        this.save();
        // Thêm dòng này để cập nhật modal ngay lập tức
        this.updateFullCart();
    }

    updateQuantity(id, qty) {
        const item = this.cart.find(i => i.id == id);
        if (item) {
            item.quantity = qty;
            if (item.quantity <= 0) {
                this.remove(id);
            } else {
                this.save();
                this.updateFullCart(); // ⬅ thêm dòng này để modal cập nhật ngay
            }
        }
    }


    save() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.updateCartUI();
    }

    updateCartUI() {
        this.cartItems.innerHTML = "";
        let total = 0, count = 0;
        this.cart.forEach(i => {
            total += i.price * i.quantity;
            count += i.quantity;
            this.cartItems.innerHTML += `
        <div class="cart-item">
          <img src="${i.image}">
          <div>
            <div>${i.name}</div>
            <div>${formatCurrency(i.price)} x ${i.quantity}</div>
          </div>
        </div>
      `;
        });
        this.cartCount.textContent = count;
        this.totalAmount.textContent = formatCurrency(total);
    }

    showCartModal() {
        this.updateFullCart();
        document.getElementById("cart-modal").classList.add("show");
        this.cartDropdown.classList.remove("show");
    }

    hideCartModal() {
        document.getElementById("cart-modal").classList.remove("show");
    }
    // ... (các hàm khác giữ nguyên)

    // ... (các hàm khác giữ nguyên)

    updateFullCart() {
        const container = document.getElementById("full-cart-items");
        let total = 0;

        // Luôn luôn làm trống container trước khi cập nhật
        container.innerHTML = "";

        // Kiểm tra nếu giỏ hàng trống
        if (this.cart.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; color: #888; padding: 20px;">
                    <p><i class="fas fa-shopping-cart fa-3x"></i></p>
                    <p>Giỏ hàng của bạn đang trống.</p>
                </div>
            `;
            document.getElementById("modal-total-amount").textContent = formatCurrency(0);
            return;
        }

        // Hiển thị các sản phẩm nếu giỏ hàng không trống
        this.cart.forEach(i => {
            total += i.price * i.quantity;
            container.innerHTML += `
                <div class="full-cart-item">
                    <img src="${i.image}">
                    <div style="flex:1">
                        <div><b>${i.name}</b></div>
                        <div>${formatCurrency(i.price)} x ${i.quantity}</div>
                        <div class="cart-item-controls">
                            <button class="btn-qty" onclick="cart.updateQuantity(${i.id},${i.quantity - 1})">-</button>
                            <span>${i.quantity}</span>
                            <button class="btn-qty" onclick="cart.updateQuantity(${i.id},${i.quantity + 1})">+</button>
                            <button class="btn-remove" onclick="cart.remove(${i.id})">Xóa</button>
                        </div>
                    </div>
                    <div style="font-weight:bold">${formatCurrency(i.price * i.quantity)}</div>
                </div>
            `;
        });
        document.getElementById("modal-total-amount").textContent = formatCurrency(total);
    }
}

function bindAddToCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = btn.dataset.id, name = btn.dataset.name, price = parseInt(btn.dataset.price), image = btn.dataset.image;
            cart.add(id, name, price, image);
        });
    });
}

// ========== INIT ==========

// Lắng nghe thay đổi lọc ngay lập tức
document.querySelectorAll(".filter-type").forEach(cb => {
    cb.addEventListener("change", applyFilters);
});

document.getElementById("min-price").addEventListener("input", applyFilters);
document.getElementById("max-price").addEventListener("input", applyFilters);

document.getElementById("sort-price").addEventListener("change", applyFilters);

// Khởi tạo giỏ hàng & render sản phẩm ban đầu
const cart = new ShoppingCart();
renderProducts(products);


// ============ PRODUCT DETAIL MODAL ============
// ============ PRODUCT DETAIL MODAL ============
function showProductDetail(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    const modal = document.getElementById("product-detail-modal");
    document.getElementById("detail-image").src = product.image;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-price").textContent = formatCurrency(product.price);
    document.getElementById("detail-desc").textContent = product.desc;

    // Sửa đổi logic để sử dụng một đối tượng mã màu
    const colorMap = {
        "black": "#000",
        "red": "#FF0000",
        "blue": "#0000FF",
        "cyan": "#ADD8E6",
        "yellow": "#FFD700",
        "orange": "#f49a1d",
        "milky": "#b17c64",
        "green": "#2f562c",
        "xamden": "#696969",
        "xanhduong": "blue",
        "anhbac": "#6699CC",
        "whiteblue": "#F0F8FF",
        "whitemint": "#F5FFFA",
        "maroon": "#800000",
        "bluegray": "#6699CC",
        "darkred": "#3D0C02",
        "whiteblack": "#eee",
        "lightgray": "#D3D3D3",
        "dimgray": "#696969",
        "winered": "#722F37",
        "pink": "#FFF0F5",
        "gold": "#D4AF37",
        "metalicwhite": "#E5E4E2",
        "mossgray": "#8A9A5B",
        "celedon": "#ACE1AF",
        "slategray": "#708090",
        "lime": "#C7EA46",
        "darkblue": "darkblue",
        "cadet": "#5F9EA0",
        "charcoal": "#1F3A3D",
        "white": "#FFFFFF",
        "redorange": "#FF4500"
    };

    // Hiển thị các tùy chọn màu sắc nếu có
    const colorOptionsContainer = modal.querySelector(".color-options");
    const colorDotsHtml = product.colors ? product.colors.map(color => {
        const activeClass = color === "black" ? " active" : "";
        const colorCode = colorMap[color] || "#000"; // Lấy mã màu từ đối tượng
        return `<span class="color-dot${activeClass}" style="background-color: ${colorCode};" data-color="${color}"></span>`;
    }).join('') : '';

    colorOptionsContainer.innerHTML = `Màu sắc: ${colorDotsHtml}`;

    // ... (Phần còn lại của hàm giữ nguyên)

    // Gắn sự kiện cho các chấm màu
    colorOptionsContainer.querySelectorAll(".color-dot").forEach(dot => {
        dot.addEventListener("click", () => {
            colorOptionsContainer.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
            dot.classList.add("active");
            const newColor = dot.dataset.color;
            if (product.imageVariants && product.imageVariants[newColor]) {
                document.getElementById("detail-image").src = product.imageVariants[newColor];
            }
        });
    });

    // Gắn sự kiện thêm vào giỏ hàng
    const addToCartBtn = document.getElementById("add-to-cart-from-detail");
    addToCartBtn.onclick = () => {
        cart.add(product.id, product.name, product.price, product.image);
        modal.classList.remove("show"); // Đóng modal sau khi thêm
    };

    modal.classList.add("show");
}

function hideProductDetail() {
    document.getElementById("product-detail-modal").classList.remove("show");
}

// ... (các hàm khác giữ nguyên)

// Gắn sự kiện click cho các nút đóng modal
document.querySelector(".close-detail-modal").addEventListener("click", hideProductDetail);

// Gắn sự kiện click vào các thẻ sản phẩm để mở modal
function bindProductDetailButtons() {
    document.querySelectorAll(".product-card-link").forEach(card => {
        card.addEventListener("click", (e) => {
            // Ngăn chặn sự kiện click lan truyền đến nút "Thêm vào giỏ"
            if (!e.target.closest('.add-to-cart')) {
                const productId = card.dataset.id;
                showProductDetail(productId);
            }
        });
    });
}

// Gọi hàm này sau khi render sản phẩm ban đầu
renderProducts(products);
bindProductDetailButtons();


