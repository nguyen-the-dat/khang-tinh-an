import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import { useRef } from 'react';

function ProductSlider() {
	const swiperRef = useRef<SwiperClass | null>(null); // Reference to the swiper instance

	return (
		<div className="rounded-2xl relative mb-0 lg:mb-60">
			{/* Custom left arrow */}
			<button
				className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-3xl z-50"
				onClick={() => swiperRef.current?.slidePrev()}
			>
				<img src="./arrow.png" alt="" />
			</button>

			{/* Custom right arrow */}
			<button
				className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-3xl z-50 rotate-180"
				onClick={() => swiperRef.current?.slideNext()}
			>
				<img src="./arrow.png" alt="" />
			</button>

			<Swiper
				onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
				spaceBetween={50} // Space between slides
				slidesPerView={1} // Number of slides visible at once
				loop={true} // Infinite loop mode
				pagination={{
					clickable: true, // Enable pagination buttons
				}}
				navigation={false} // Disable the default navigation (as we're using custom buttons)
			>
				<SwiperSlide>
					<div className="w-full flex flex-col lg:flex-row items-center justify-center py-20">
						<div className="relative w-full md:w-2/3 lg:w-1/2 flex items-center justify-center">
							<img
								src="./P2/P.png"
								alt="Product 1"
								className="w-full h-full object-contain"
							/>
							<img
								src="./P2/I1.png"
								alt=""
								className="absolute -bottom-10 -right-10 lg:right-0 animate-bounce w-52 lg:w-60"
							/>
							<img
								src="./P2/I2.png"
								alt=""
								className="absolute -bottom-10 left-10 lg:left-20 animate-bounce w-20 lg:w-28"
							/>
							<img
								src="./P2/I3.png"
								alt=""
								className="absolute top-10 left-60 animate-bounce w-20 lg:w-32"
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 mt-4 w-full lg:w-1/2 px-10 ">
							<div className="flex items-center">
								<img
									src="./quality1.webp"
									alt=""
									className="w-28 aspect-square object-cover"
								/>
								<p className="text-sm">
									<p className="font-bold">
										Hỗ trợ cải thiện viêm đại tràng
									</p>
									Giảm cảm giác đầy bụng, đau âm ỉ vùng bụng
									dưới, đi ngoài nhiều lần trong ngày, giúp
									làm dịu và phục hồi niêm mạc đại tràng
								</p>
							</div>
							<div className="flex items-center">
								<img
									src="./quality3.webp"
									alt=""
									className="w-28 aspect-square object-cover"
								/>
								<p className="text-sm">
									<p className="font-bold">
										Giúp giảm táo bón, thúc đẩy nhu động
										ruột tự nhiên
									</p>
									Hỗ trợ tăng lượng phân, làm mềm phân, kích
									thích nhu động ruột, giúp đi ngoài đều đặn,
									giảm cảm giác khó chịu khi đại tiện
								</p>
							</div>
							<div className="flex items-center">
								<div className="ml-4 mr-4 w-28 aspect-square overflow-hidden bg-white">
									<img
										src="./quality6.png"
										alt=""
										className="w-full h-full object-cover"
									/>
								</div>
								<p className="text-sm">
									<p className="font-bold">
										Cân bằng hệ vi sinh đường ruột, hỗ trợ
										rối loạn tiêu hóa
									</p>
									Nuôi dưỡng lợi khuẩn, ức chế hại khuẩn, cải
									thiện tình trạng chướng bụng, khó tiêu, đi
									ngoài lúc lỏng lúc táo.
								</p>
							</div>
							<div className="flex items-center">
								<img
									src="./quality4.webp"
									alt=""
									className="w-28 aspect-square object-cover"
								/>

								<p className="text-sm">
									<p className="font-bold">
										Giảm triệu chứng hội chứng ruột kích
										thích (IBS)
									</p>
									Giúp ổn định hệ tiêu hóa, giảm đau bụng, đầy
									hơi, tiêu chảy hoặc táo bón thất thường do
									ruột nhạy cảm.
								</p>
							</div>
							<div className="flex items-center">
								<img
									src="./quality2.webp"
									alt=""
									className="w-28 aspect-square object-cover"
								/>
								<p className="text-sm">
									<p className="font-bold">
										Hỗ trợ điều hòa hoạt động đại tràng co
										thắt
									</p>
									Làm dịu phản ứng co bóp bất thường của ruột
									già, giảm cảm giác quặn bụng, mót rặn nhưng
									không đi ngoài được.
								</p>
							</div>
							<div className="flex items-center">
								<img
									src="./quality5.webp"
									alt=""
									className="w-28 aspect-square object-cover"
								/>
								<p className="text-sm">
									<p className="font-bold">
										Hỗ trợ ổn định đường huyết cho người
										tiểu đường type 2
									</p>
									Làm chậm quá trình hấp thu đường, tăng độ
									nhạy insulin, giúp duy trì đường huyết ổn
									định sau ăn.
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-full flex flex-col lg:flex-row items-center justify-center py-20 px-5 lg:px-0">
						<div className="relative w-full md:w-2/3 lg:w-1/2 flex items-center justify-center">
							<img
								src="./P1/P.png"
								alt="Product 1"
								className="w-full h-full object-contain"
							/>
							<img
								src="./P1/I1.png"
								alt=""
								className="absolute -bottom-10 left-0 animate-bounce w-28 lg:w-40"
							/>
							<img
								src="./P1/I2.png"
								alt=""
								className="absolute -bottom-10 right-0 animate-bounce w-28 lg:w-40"
							/>
							<img
								src="./P1/I3.png"
								alt=""
								className="absolute top-14 lg:top-20 right-28 animate-bounce w-24 lg:w-32"
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 mt-4 w-full lg:w-1/2 px-10">
							<div className="flex items-center">
								<img
									src="./P1/D1.png"
									alt=""
									className="w-28 aspect-square object-cover"
								/>
								<p className="text-sm">
									Hỗ trợ giảm cân, kiểm soát vóc dáng → Hàm
									lượng calo thấp, không chứa chất béo, giúp
									tạo cảm giác no và hỗ trợ quá trình trao đổi
									chất, phù hợp với người đang ăn kiêng.
								</p>
							</div>
							<div className="flex items-center">
								<img
									src="./P1/D2.png"
									alt=""
									className="w-28 aspect-square object-cover"
								/>
								<p className="text-sm">
									Hỗ trợ tiêu hóa → Nhẹ nhàng với hệ tiêu hóa,
									giúp giảm cảm giác đầy bụng, khó tiêu, làm
									dịu ruột và dạ dày.
								</p>
							</div>
							<div className="flex items-center">
								<img
									src="./P1/D3.png"
									alt=""
									className="w-28 aspect-square object-cover"
								/>
								<p className="text-sm">
									Giúp làm đẹp da, giảm mụn → Thành phần tự
									nhiên giàu nước và chất chống oxy hóa giúp
									cấp nước, thanh lọc máu, hỗ trợ làm dịu da
									và cải thiện tình trạng mụn do nóng gan.
								</p>
							</div>
							<div className="flex items-center">
								<img
									src="./P1/D4.png"
									alt=""
									className="w-28 aspect-square object-cover"
								/>
								<p className="text-sm">
									Thanh nhiệt, giải độc cơ thể → Giúp làm mát
									gan, giảm nóng trong, hỗ trợ thanh lọc cơ
									thể tự nhiên, đặc biệt hiệu quả trong những
									ngày nắng nóng hoặc khi ăn nhiều đồ cay, dầu
									mỡ.
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default ProductSlider;

const QualityItem = () => {
	return (
		<div className="flex items-center">
			<img
				src="/logo.png"
				alt="Quality Item"
				className="w-1/3 h-40 mb-4"
			/>
			<div>
				<h3 className="text-lg font-semibold">Quality Item</h3>
				<p className="text-gray-600">
					Description of the quality item.
				</p>
			</div>
		</div>
	);
};
