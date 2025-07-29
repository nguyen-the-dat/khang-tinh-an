import GreenNutriGrid from '../../GreenNutriGrid';
import ProductSlider from '../ProductSlider';

const Main = () => {
	return (
		<>
			<div className="lg:px-28 max-w-screen-2xl mx-auto">
				<div className="my-10 md:my-20 lg:my-40 relative">
					<img
						src="/home2.png"
						className="w-full h-[500px] md:h-[600px] lg:h-auto object-cover"
						alt="Banner"
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#4b642b]">
						<div className="bg-white/90 max-w-screen-lg p-5 pb-10 rounded-lg">
							<h2 className="font-bold dancing-font text-4xl md:text-5xl lg:text-6xl mb-5">
								Gặp gỡ người làm nên sản phẩm
							</h2>
							<p className="text-base md:text-lg pb-10 px-3 md:px-5 lg:px-6 xl:px-20">
								Trên hành trình kiến tạo một lối sống lành mạnh,
								người làm nên sản phầm không đơn thuần là nhà
								nghiên cứu - họ là những người lặng thầm gieo
								trồng niềm tin vào thiên nhiên và sức khỏe bền
								vững. Từ việc lựa chọn từng trái chuối tiêu xanh
								sạch, ứng dụng công nghệ chiết xuất tinh bột
								kháng, đến sự kết hợp tinh tế cùng đậu xanh, yến
								mạch, mật ong, tất cả được tạo nên bằng tâm
								huyết, sự tận tường và tình yêu dành cho con
								người.
							</p>
							<button className="px-5 md:px-7 md:py-2 py-2 lg:px-10 lg:py-2 bg-[#5D9A4A] rounded-lg text-base lg:text-xl font-semibold animate-bounce text-white">
								Xem thêm
							</button>
						</div>
					</div>
				</div>
				<ProductSlider />
				<div className="text-center pb-40 px-5">
					<h1 className="uppercase text-2xl font-bold mb-16 text-[#3E790A]">
						Chứng chỉ sản phẩm
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./CE1.png"
								alt="Logo 1"
								className="w-40 aspect-square mx-auto"
							/>
							<p className="text-gray-600 font-bold text-lg mt-10">
								NewAge Cert
							</p>
							<p className="text-gray-600 font-bold">
								Chứng nhận ISO22000
							</p>
							<p className="px-5">
								Là đơn vị thuộc Big 4 Ngành chứng nhận tại Việt
								Nam, TQC cung cấp dịch vụ chứng nhận ISO
								22000:2018 – Tiêu chuẩn quốc tế về Hệ thống quản
								lý an toàn thực phẩm.
							</p>
						</div>
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./CE2.png"
								alt="Logo 1"
								className="w-40 aspect-square mx-auto"
							/>
							<p className="text-gray-600 font-bold text-lg mt-10">
								National Institute of Nutrition
							</p>
							<p className="text-gray-600 font-bold">
								Viện Dinh dưỡng Quốc gia
							</p>
							<p className="px-5">
								Chứng nhận này là một hình thức công nhận sản
								phẩm đã được đánh giá về thành phần dinh dưỡng,
								độ an toàn và hiệu quả bởi Viện Dinh dưỡng Quốc
								gia Việt Nam
							</p>
						</div>
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./CE3.png"
								alt="Logo 1"
								className="w-40 aspect-square mx-auto"
							/>
							<p className="text-gray-600 font-bold text-lg mt-10">
								Vietnam Journal of Food Control
							</p>
							<p className="text-gray-600 font-bold">
								Viện Kiểm nghiệm an toàn vệ sinh thực phẩm quốc
								gia
							</p>
							<p className="px-5">
								Đơn vị kiểm nghiệm thực phẩm tuyến cao nhất của
								ngành y tế; chịu sự quản lý nhà nước về hoạt
								động chuyên môn y tế của Bộ Y tế.
							</p>
						</div>
						<div className="col-span-1 flex flex-col items-center">
							<img
								src="./CE4.png"
								alt="Logo 1"
								className="w-40 aspect-square mx-auto"
							/>
							<p className="text-gray-600 font-bold text-lg mt-10">
								AVATEK SCIENCE TECHNOLOGY JSC
							</p>
							<p className="text-gray-600 font-bold">
								Trung tâm Kiểm nghiệm và Tư vấn UKDH AVATEK
							</p>
							<p className="px-5">
								Đơn vị hoạt động trong lĩnh vực kiểm nghiệm chất
								lượng sản phẩm và tư vấn công bố tiêu chuẩn
							</p>
						</div>
					</div>
				</div>
			</div>

			<GreenNutriGrid/>
		</>
	);
};

export default Main;
