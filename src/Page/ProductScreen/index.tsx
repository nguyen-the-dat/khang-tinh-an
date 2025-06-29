import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
function ProductScreen() {
	const products = [
		{
			id: 1,
			name: ' Trà Bí Thơm',
			weight: 'Hộp 500',
			price: ' 200.000đ',
			image: '/P1.png',
			link: '/products/id',
		},
		{
			id: 2,
			name: 'Tinh Bột Kháng',
			weight: 'Hộp 500g',
			price: ' 265.000đ',
			image: '/p2.png',
			link: '/products/id1',
		},
	];

	const benefits = [
		{
			title: 'Người có nguy cơ bị táo bón, bệnh trĩ',
			description:
				'Hỗ trợ nước trong phân, làm mềm phân, giúp đi ngoài dễ dàng và cải thiện lòi - hại khuẩn cho đường ruột khỏe mạnh.',
			image: './quality5.webp',
		},
		{
			title: 'Người có nguy cơ bệnh lý mạn tính',
			description:
				'Giúp đường ruột khỏe mạnh trong điều kiện thường xuyên hấp thụ các loại thuốc điều trị.',
			image: './quality4.webp',
		},
		{
			title: 'Người có nguy cơ loạn khuẩn đường ruột',
			description:
				'Giúp nuôi dưỡng lợi khuẩn, cân bằng hệ vi sinh đường ruột.',
			image: './quality6.png',
		},
		{
			title: 'Người có nguy cơ bị rối loạn tiêu hóa',
			description:
				'Tạo khuẩn cho phân, ổn định đường ruột, cân bằng lợi - hại khuẩn đường ruột.',
			image: './quality2.webp',
		},
		{
			title: 'Người muốn nâng cao sức khỏe',
			description:
				'Đường ruột là bộ não thứ 2 của cơ thể cần thường xuyên chăm sóc và nuôi dưỡng.',
			image: './quality3.webp',
		},
		{
			title: 'Người có nguy cơ hội chứng ruột kích thích',
			description:
				'Tình trạng khăng lên men sinh ra các axit béo chuỗi ngắn giúp ức chế sự phát triển của hại khuẩn. Từ đó cải thiện vấn đề đường ruột.',
			image: './quality1.webp',
		},
	];

	const customerReviews = [
		{
			review: `Cảm giác nhẹ bụng, dễ tiêu hơn hẳn sau vài ngày dùng đều đặn. Trước đây tôi hay bị đầy hơi, chậm tiêu sau mỗi bữa ăn, nhưng từ khi bổ sung tinh bột kháng vào bữa sáng, tôi thấy bụng nhẹ hơn, không còn cảm giác nặng nề hay ậm ạch.`,
		},
		{
			review: `Giúp kiểm soát đường huyết tốt hơn. Tôi là người tiền tiểu đường nên rất quan tâm đến chỉ số đường huyết. Sau khoảng 2 tuần sử dụng đều đặn 1 muỗng tinh bột kháng pha nước mỗi sáng, chỉ số đường huyết ổn định hơn, không dao động thất thường như trước.`,
		},
		{
			review: `Vị thanh mát, dễ chịu, và rất thơm. Trà có vị ngọt hậu nhẹ nhàng từ bí và thơm tự nhiên của các thành phần dược liệu, không gắt, không chát như nhiều loại trà thảo mộc khác. Dễ uống cả nóng lẫn lạnh.`,
		},
	];

	return (
		<div className="min-h-screen bg-[##FEFAF5] pt-20">
			{/* Breadcrumb */}
			<div className="mt-20">
				<div className="max-w-7xl mx-auto px-4 py-3">
					<nav className="text-xl text-gray-600">
						<span className="font-semibold">Trang chủ</span>
						<span className="mx-2">/</span>
						<span className="font-bold">
							Sản phẩm của chúng tôi
						</span>
					</nav>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Products Section */}
				<div className="mb-20">
					<h1 className="text-3xl font-bold text-green-700 mb-8">
						SẢN PHẨM
					</h1>

					<div className="grid md:grid-cols-2 gap-32 max-w-screen-xl mx-auto">
						{products.map((product) => (
							<div
								key={product.id}
								className="bg-orange-50 rounded-lg shadow-lg overflow-hidden"
							>
								<div className="p-6 text-center">
									<div className="mb-6">
										<img
											src={product.image}
											alt={product.name}
											className="w-full rounded-lg mb-20"
										/>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-8">
										{product.name}
									</h3>
									<p className="text-gray-600 mb-8">
										{product.weight}
									</p>
									<p className="text-xl font-bold text-gray-800 mb-8">
										{product.price}
									</p>

									<Link
										to={product.link}
										className="bg-[#5A9F51] hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
									>
										Xem thêm
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Benefits Section */}
				<div className="mt-40 mb-40">
					<h2 className="text-3xl font-bold text-green-700 text-center mb-12">
						ĐỐI TƯỢNG SỬ DỤNG SẢN PHẨM KHÁNG TINH AN
					</h2>

					<div className="grid grid-cols-2 gap-8">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="flex items-start space-x-4 p-4"
							>
								<img
									src={benefit.image}
									alt="quality"
									className="w-14 aspect-square"
								/>
								<div>
									<h3 className="font-bold text-gray-800 mb-2 text-lg">
										{benefit.title}
									</h3>
									<p className="text-sm text-gray-600 leading-relaxed">
										{benefit.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-40 mb-40">
					<h2 className="text-3xl font-bold text-green-700 text-center mb-12">
						KHÁCH HÀNG NÓI GÌ VỀ KHÁNG TINH AN
					</h2>
					<div className="bg-[#F2E7D6]">
						<Swiper
							spaceBetween={50} // Space between slides
							slidesPerView={1} // Number of slides visible at once
							loop={true} // Infinite loop mode
							pagination={{
								clickable: true, // Enable pagination buttons
							}}
							navigation={false} // Disable the default navigation (as we're using custom buttons)
						>
							{customerReviews.map((review, index) => (
								<SwiperSlide key={index}>
									<div className="w-full h-[600px] flex items-center justify-center px-20 space-x-20">
										<img
											src="./avt.png"
											alt="Product 1"
											className="w-1/3 rounded-full"
										/>
										<p className="w-2/3 text-2xl font-semibold">
											{review.review}
										</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductScreen;
