import React,{ useState,useEffect } from 'react';
import { FiUser,FiSearch } from 'react-icons/fi'
import {BsFillCartFill,BsDash} from 'react-icons/bs';
import {AiOutlineDown,AiFillStar} from 'react-icons/ai'
import {GiFruitBowl} from 'react-icons/gi'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
let api
export default api = {
    apiProducts: 'http://127.0.0.1/cleverfood/api/products.php',
    apiCart: 'http://127.0.0.1/cleverfood/api/cart.php',
    apiLogin: 'http://127.0.0.1/cleverfood/api/login.php',
    apiInsertCart: 'http://127.0.0.1/cleverfood/api/insertCart.php',
    apiAmountProduct: 'http://127.0.0.1/cleverfood/api/amountProduct.php',
    apiDeleteProduct: 'http://127.0.0.1/cleverfood/api/deleteProduct.php',
    apiInsertComment: 'http://127.0.0.1/cleverfood/api/insertComment.php',
    apiComments: 'http://127.0.0.1/cleverfood/api/comments.php',
    apiSignUp: 'http://127.0.0.1/cleverfood/api/signUp.php',
    apiCheckUser: 'http://127.0.0.1/cleverfood/api/checkUser.php',
    apiCatalog: 'http://127.0.0.1/cleverfood/api/getCatalog.php',
    apiProduct: 'http://127.0.0.1/cleverfood/api/product.php',
    apiUpdateCart: 'http://127.0.0.1/cleverfood/api/updateCart.php',
    apiAccount: 'http://127.0.0.1/cleverfood/api/account.php',
    apiInsertBill: 'http://127.0.0.1/cleverfood/api/insertBill.php',
    apiGetBill: 'http://127.0.0.1/cleverfood/api/getBill.php',
};




export const homeMenu = [
    {
        id: 1,
        title: 'TRANG CHỦ',
        link: '/cleverfood',
    },
    {
        id: 2,
        title: 'GIỚI THIỆU',
        link: '',
    },
    {
        id: 3,
        title: 'CỬA HÀNG',
        listStore: {
            icon: <AiOutlineDown/>,
            subList: [
                {
                    id: 1,
                    title: 'RAU CỦ',
                    link: ''
                },
                {
                    id: 2,
                    title: 'TRÁI CÂY',
                    link: ''
                },
                {
                    id: 3,
                    title: 'ĐỒ UỐNG',
                    link: ''
                },
                {
                    id: 4,
                    title: 'ĐỒ KHÔ',
                    link: ''
                },
            ] 
        },
        link: '',
    },
    {
        id: 4,
        title: 'KIẾN THỨC',
        link: '',
    },
    {
        id: 5,
        title: 'LIÊN HỆ',
        link: '',
    }
]
export const miniMenu = [
    {
        id: 1,
        icon: <FiSearch />,
        link: '',
    },
    {
        id: 2,
        icon: <FiUser />,
        link: '',
    },
    {
        id: 3,
        icon: <BsFillCartFill />,
        products: false,
        contentProducts: {
            totalText: 'Tổng phụ:',
            buttons: [
                {   
                    btnStyle: 'success',
                    text: 'XEM GIỎ HÀNG',
                    link: "/cleverfood/gio-hang"
                },
                {   
                    btnStyle: 'checkout',
                    text: 'THANH TOÁN',
                    link: "/cleverfood/thanh-toan"
                },
            ],
            contentEmpty: 'Chưa có sản phẩm trong giỏ hàng.'
        },
        link: '',
    },
    {
        id: 4,
        language: 'TIẾNG VIỆT',
        icon: 'https://mauweb.monamedia.net/cleverfood/wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png',
        subIcon: <AiOutlineDown/>,
        languages: [
            {
                id: 1,
                language: 'TIẾNG VIỆT',
                icon: 'https://mauweb.monamedia.net/cleverfood/wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png',
                link: '',
            },
            {
                id: 2,
                language: 'ENGLISH',
                icon: 'https://mauweb.monamedia.net/cleverfood/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png',
                link: '',
            }
        ],
        link: ''
    }
]

export const banners = [
    {   
        id: 1,
        img: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/slider26.jpg',
        mini_img: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/imgslide22.png',
        brand:'Apple Juice',
        heading: '100% tự nhiênn',
        content: 'Giảm giá khi đặt mua ngay hôm nay',
        btnText: 'MUA NGAY',
        btnType: 'primary-green',
        btnWidth: '168px',
        btnShape: 'soft',
    },
    {
        id: 2,
        img: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/slider28.jpg',
        mini_img: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/imgslide13.png',
        brand:'Walnuts',
        heading: '100% tự nhiênn',
        content: 'Giảm giá khi đặt mua ngay hôm nay',
        btnText: 'MUA NGAY',
        btnType: 'primary-green',
        btnWidth: '168px',
        btnShape: 'soft',
    }
]

export const categoryList = [
    {
        id: 1,
        categoryImg: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner36.jpg'
    },
    {
        id: 2,
        categoryImg: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner35.jpg'
    },
    {
        id: 3,
        categoryImg: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner34.jpg'
    },
    {
        id: 4,
        categoryImg: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner28.jpg'
    }
]

export const tabItems = [
    {
        id: 1,
        tabContent: 'MỚI NHẤT',
        tabType: 'newest',
        tabLink: '',
    },
    {
        id: 2,
        tabContent: 'GIẢM GIÁ',
        tabType: 'discount',
        tabLink: '',
    },
    {
        id: 3,
        tabContent: 'BÁN CHẠY',
        tabType: 'hottest',
        tabLink: '',
    },
]


export const promoteBanner = {
    header: 'Khuyến mãi trong tuần',
    fraction: <><BsDash style={{fontSize: '8rem'}}/>&nbsp;<GiFruitBowl style={{fontSize: '4rem'}}/>&nbsp;<BsDash style={{fontSize: '8rem'}}/></>,
    information: 'Cơ hội để gia đình bạn sở hữu những sản phẩm ưu đãi',
    img: 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner25.jpg',
}


export const moveTopIcon = {
    icon: <MdOutlineKeyboardArrowUp/>
}

export const footerMenuList = [
    {
        id: 1,
        footerLogo : "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/logo-new.png",
        p: [
            "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
        ],
        a: [
            "076 922 0162",
            "demonhunterg@gmail.com",
            "mon@mona.media",
            "demonhunterp"
        ]
    },
    {
        id: 2,
        main: true,
        header : "MENU",
        a: [
            "Trang chủ",
            "Giới thiệu",
            "Cửa hàng",
            "Kiến thức",
            "Liên hệ",
        ]
    },
    {
        id: 3,
        header : "SẢN PHẨM",
        a: [
            "Rau củ",
            "Trái cây",
            "Cửa hàng",
            "Đồ uống",
            "Đồ khô",
        ]
    },
    {
        id: 4,
        header : "INSTAGRAM",
        span: [
            "Instagram did not return a 200."
        ]
    }
]

export const shipBanner = [
    {
        id: 1,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-ghn.jpg"
    },
    {
        id: 2,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-ghtk.jpg"
    },
    {
        id: 3,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-ninja-van.jpg"
    },
    {
        id: 4,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-acb.jpg"
    },
    {
        id: 5,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-techcombank.jpg"
    },
    {
        id: 6,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-vib.jpg"
    },
    {
        id: 7,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-shipchung.jpg"
    },
    {
        id: 8,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-viettle-post.jpg"
    },
    {
        id: 9,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-vn-post.jpg"
    },
    {
        id: 10,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-vcb.jpg"
    },
    {
        id: 11,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-paypal.jpg"
    },
    {
        id: 12,
        logo: "https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/10/logo-mastercard.jpg"
    },

]

export const typeList= [
    {
        id: 1,
        item: "Đồ khô",
        link: "/cleverfood/danh-muc/do-kho"
    },
    {
        id: 2,
        item: "Đồ uống",
        link: "/cleverfood/danh-muc/do-uong"
    },
    {
        id: 3,
        item: "Rau củ",
        link: "/cleverfood/danh-muc/rau-cu"
    },
    {
        id: 4,
        item: "Trái cây",
        link: "/cleverfood/danh-muc/trai-cay"
    }
]

export const describeButtons = [
    {
        id: 1,
        text: "MÔ TẢ"
    },
    {
        id: 2,
        text: "ĐÁNH GIÁ"
    }
]

export const detailsDescription = [
    {
        id: 1,
        header: "Lorem Ipsum là gì?",
        detail: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker."
    },
    {
        id: 2,
        header: "Tại sao lại sử dụng nó?",
        detail: "Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu “Nội dung, nội dung, nội dung” là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục)."
    },
    {
        id: 3,
        header: "Nó đến từ đâu?",
        detail: "Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư của trường Hampden-Sydney College (bang Virginia – Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất, “consectetur”, trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của “De Finibus Bonorum et Malorum” (Đỉnh tối thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng."
    }
]


export const rateStars = [
    {
        id: 1,
        icon: <AiFillStar/>
    },
    {
        id: 2,
        icon: <><AiFillStar/><AiFillStar/></>
    },
    {
        id: 3,
        icon: <><AiFillStar/><AiFillStar/><AiFillStar/></>
    },
    {
        id: 4,
        icon: <><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></>
    },
    {
        id: 5,
        icon: <><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></>
    },
]

export const selection = [
    {
        id: 1,
        name: "Thứ tự mặc định",
        usecase: "default"
    },
    {
        id: 2,
        name: "Mức độ phổ biến",
        usecase: "popular"
    },
    {
        id: 3,
        name: "Mới nhất",
        usecase: "newest"
    },
    {
        id: 4,
        name: "Giá giảm dần",
        usecase: "DESC"
    },
    {
        id: 5,
        name: "Giá tăng dần",
        usecase: "ASC"
    },
]

export const shipperSelection = [
    {
        id: 1,
        text: "Trả tiền mặt khi nhận hàng",
        name: "money"
    },
    {
        id: 2,
        text: "Chuyển khoản ngân hàng",
        name: "atm"
    }
]