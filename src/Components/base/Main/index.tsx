import { Link } from 'react-router-dom';
import GreenNutriGrid from '../../GreenNutriGrid';
import ProductSlider from '../ProductSlider';

const Main = () => {
	return (
		<>
			<div className="px-4 sm:px-6 lg:px-28 max-w-screen-2xl mx-auto">
				{/* Banner */}
				<div className="my-10 md:my-20 lg:my-40 relative">
					<img
						src="/home2.png"
						className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover rounded-lg"
						alt="Banner"
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#4b642b] px-3 sm:px-5">
						<div className="bg-white/90 w-full sm:w-auto max-w-screen-lg p-4 sm:p-6 lg:p-8 pb-10 rounded-lg shadow-lg">
							<h2 className="font-bold dancing-font text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 sm:mb-5">
								Gặp gỡ người làm nên sản phẩm
							</h2>
							<p className="text-sm sm:text-base md:text-lg pb-6 sm:pb-8 md:pb-10 px-1 sm:px-4 lg:px-10">
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
							<Link to="/nguoi-tao-nen-san-pham">
								<button className="px-4 sm:px-6 py-2 lg:px-10 lg:py-2 bg-[#5D9A4A] rounded-lg text-sm sm:text-base lg:text-xl font-semibold animate-bounce text-white">
									Xem thêm
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Slider sản phẩm */}
				<ProductSlider />

				{/* Chứng chỉ sản phẩm */}
				<div className="text-center pb-20 sm:pb-32 lg:pb-40 px-3 sm:px-5">
					<h1 className="uppercase text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold mb-10 sm:mb-16 text-[#3E790A]">
						Chứng chỉ sản phẩm
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
						{/* Item 1 */}
						<div className="flex flex-col items-center justify-between p-4 sm:p-6 hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 rounded-lg bg-white h-full">
							<img
								src="./CE3.png"
								alt="Logo 1"
								className="w-40 sm:w-48 md:w-40 xl:w-44 aspect-square object-contain mb-6"
							/>
							<p className="text-gray-800 font-bold text-lg sm:text-xl text-center">
								Vietnam Journal of Food Control
							</p>
							<p className="text-gray-600 font-semibold text-center mt-2 text-sm sm:text-base">
								Viện Kiểm nghiệm an toàn vệ sinh thực phẩm quốc
								gia
							</p>
							<p className="text-gray-500 text-center mt-4 text-xs sm:text-sm md:text-base px-2">
								Đơn vị kiểm nghiệm thực phẩm tuyến cao nhất của
								ngành y tế; chịu sự quản lý nhà nước về hoạt
								động chuyên môn y tế của Bộ Y tế.
							</p>
						</div>

						{/* Item 2 */}
						<div className="flex flex-col items-center justify-between p-4 sm:p-6 hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 rounded-lg bg-white h-full">
							<img
								src="./CE1.png"
								alt="Logo 2"
								className="w-28 sm:w-32 md:w-36 xl:w-40 aspect-square object-contain mb-6"
							/>
							<p className="text-gray-800 font-bold text-lg sm:text-xl text-center">
								NewAge Cert
							</p>
							<p className="text-gray-600 font-semibold text-center mt-2 text-sm sm:text-base">
								Chứng nhận ISO22000
							</p>
							<p className="text-gray-500 text-center mt-4 text-xs sm:text-sm md:text-base px-2">
								Là đơn vị thuộc Big 4 Ngành chứng nhận tại Việt
								Nam, TQC cung cấp dịch vụ chứng nhận ISO
								22000:2018 – Tiêu chuẩn quốc tế về Hệ thống quản
								lý an toàn thực phẩm.
							</p>
						</div>
					</div>
				</div>
			</div>

			<GreenNutriGrid />
		</>
	);
};

export default Main;
