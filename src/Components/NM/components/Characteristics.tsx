import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useVisibleOnScroll } from '../hooks/useVisibleOnScroll';

function Characteristics() {
	const { ref, visible } = useVisibleOnScroll();
	return (
		<div className="flex flex-col items-center relative overflow-hidden">
			<div ref={ref}>
				<img
					alt="hanh-fuck"
					src="/lam-voi-dam-me.png"
					className={`transition-opacity duration-700 animation-move-left w-52 ${
						visible ? 'animation-move-left' : 'opacity-0'
					}`}
				/>
			</div>

			<Feature />
		</div>
	);
}
export default Characteristics;

const Content = ({
	title,
	description,
	featureTitle,
}: {
	title: string;
	description: string | JSX.Element;
	featureTitle?: string;
}) => {
	return (
		<div className="montserrat-font">
			{/* <span className="text-4xl font-bold">{title}</span>
			<div className="font-semibold flex gap-2 items-center">
				<span className="py-2">Tìm hiểu thêm</span>
				<FontAwesomeIcon
					icon={faArrowRight}
					size="xs"
					className="text-red-800"
				/>
			</div> */}
			<div className="-mt-10">
				<img
					alt="hanh-fuck"
					src="/content-green.webp"
					className="md:w-[500px] md:h-[400px] w-[380px] h-[360px]"
				/>
				<div className="font-medium w-[300px] md:w-[380px] translate-y-[-21em] md:translate-y-[-23em] translate-x-[3em] md:-translate-x-[-4em]">
					<span className="dancing-font text-3xl">{featureTitle || "Bạn có biết ?"}</span>
					<div className="md:text-[14px] text-xs mt-2">
						{description}
					</div>
				</div>
			</div>
		</div>
	);
};

const Feature = () => {
	return (
		<div className="flex flex-col translate-x-[-4em]">
			<Feature1 />
			<Feature2 />
			<Feature3 />
			<Feature4 />
			<Feature5 />
		</div>
	);
};

const Feature1 = () => {
	const { ref, visible } = useVisibleOnScroll();
	return (
		<div ref={ref} data-feature="feature1">
			<div className="absolute mt-4 translate-x-[15em] md:translate-x-0">
				<div className="md:block hidden translate-x-20">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-1 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="173"
						height="83"
						viewBox="0 0 173 83"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="animation-move-right"
					>
						<path
							d="M171.617 1.48242C137.635 76.7144 66 44.999 36 55.9993C6 66.9995 1.64822 82.146 1.64822 82.146"
							stroke="#3d780a"
							strokeWidth="3"
							fill="none"
						/>
					</svg>
				</div>
				<div className="translate-x-[-4em] md:hidden block">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-1-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="74"
						height="119"
						viewBox="0 0 74 119"
						fill="none"
					>
						<path
							d="M4.99982 1C-6.5004 37 16.5001 96 73 117.5"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative top-2">
					<picture>
						<div className="-rotate-[10deg]">
							<img
								alt="hanh-fuck"
								className={`transition-opacity duration-700 absolute z-1 scale-115 -top-8 left-36 w-12 ${
									visible
										? 'animation-move-right'
										: 'opacity-0'
								}`}
								src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/zGbszVP.svg"
								loading="lazy"
							/>
						</div>

						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute right-[8em] top-72 z-0 w-36 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/1.png"
							loading="lazy"
						/>
						<img
							alt="hanh-fuck"
							className="absolute left-[-2em] top-14 z-[-1] -rotate-3 scale-150 h-64 w-44 border-4 border-white shadow-lg"
							src="/anh-3.jpg"
							loading="lazy"
						/>
					</picture>
					<div className="w-[360px]">
						<img
							alt="hanh-fuck"
							className={`transition-opacity duration-700 absolute z-[-4] top-28 left-[-12em] scale-150 ${
								visible ? 'animation-move-left' : 'opacity-0'
							}`}
							src="/bg-nong-dan.png"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div
				className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[280px] md:top-[120px] top-[620px] left-[90px] ${
					visible ? 'animation-move-right' : 'opacity-0'
				}`}
			>
				<Content
					title="Nông Dân"
					featureTitle="Người nông dân"
					description="Người nông dân ở Bắc Kạn chăm sóc vườn chuối tiêu xanh bắt đầu từ việc chọn giống khỏe, trồng đúng khoảng cách và bón phân chuồng hoai mục để cây phát triển tốt. Trong quá trình sinh trưởng, họ thường xuyên tưới nước, làm cỏ, vun gốc, tỉa mầm và chống đổ cho cây, đặc biệt trong mùa mưa bão. Để phòng sâu bệnh, họ ưu tiên biện pháp tự nhiên hoặc dùng thuốc sinh học. Khi cây ra hoa và buồng, người dân sẽ buộc buồng chuối, che nắng bằng lá hoặc bao để trái phát triển đều. Đến thời điểm chín, họ thu hoạch đúng kỹ thuật để giữ chất lượng chuối, phục vụ tiêu thụ trong nước hoặc xuất khẩu. Công việc đòi hỏi sự tỉ mỉ, kiên trì và gắn bó với đất đai quanh năm."
				/>
			</div>
		</div>
	);
};

const Feature2 = () => {
	const { ref, visible } = useVisibleOnScroll();

	return (
		<div ref={ref} data-feature="feature2">
			<div className="-translate-y-32 md:mt-16 mt-0">
				<div className="translate-x-24 -translate-y-3 md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="314"
						height="84"
						viewBox="0 0 314 84"
						fill="none"
						className="animation-move-left"
					>
						<path
							d="M1.29688 1.69336C53.1774 93.6787 248.733 -14.6328 312.221 82.2264"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="translate-x-[-16em] -translate-y-8 md:hidden block -scale-x-100">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="59"
						height="582"
						viewBox="0 0 59 582"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 1C77.187 131.917 66.7736 437.565 21.5918 581"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative translate-x-[-14em] md:translate-x-16 -z-20">
					<picture>
						<div className="rotate-3 relative z-30">
							<img
								className={`transition-opacity duration-700 absolute scale-110 top-24 right-2 md:right-32 w-10 ${
									visible
										? 'animation-move-right'
										: 'opacity-0'
								}`}
								src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
								loading="lazy"
							/>
						</div>

						<img
							className={`transition-opacity duration-700 absolute left-[32em] z-20 w-44 bottom-0 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/2.png"
							loading="lazy"
						/>
						<img
							className="absolute left-[23em] top-[1em] rotate-3 h-80 w-56 border-4 border-white shadow-lg scale-125 z-10"
							src="/anh-2.jpg"
							loading="lazy"
						/>
					</picture>
					<div className="scale-75">
						<img
							className={`transition-opacity duration-700 absolute top-[-2em] left-[24em]  ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/bg-nha-nong-hoc.webp"
							loading="lazy"
						/>
					</div>
				</div>
				<div
					className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[-10em] md:top-[-2em] top-[26em] left-[4em] ${
						visible ? 'animation-move-left' : 'opacity-0'
					}`}
				>
					{/* <Content
						title="Nhà Nông Học"
						description="Người làm công việc sơ chế chuối chịu trách nhiệm xử lý chuối sau thu hoạch để chuẩn bị cho việc đóng gói, bảo quản hoặc chế biến. Họ bắt đầu bằng việc phân loại chuối theo kích cỡ, độ chín và chất lượng. Tiếp đó, chuối được cắt tỉa cuống, rửa sạch bằng nước hoặc dung dịch sát khuẩn nhẹ để loại bỏ bụi bẩn và mủ.
Sau khi làm sạch, người sơ chế để chuối ráo nước, lau khô và sắp xếp vào khay hoặc thùng theo tiêu chuẩn. Một số công đoạn có thể bao gồm ngâm chuối trong dung dịch bảo quản tự nhiên, làm nguội nhanh hoặc đóng gói hút chân không tùy mục đích sử dụng. Công việc này đòi hỏi sự tỉ mỉ, sạch sẽ và tuân thủ quy trình vệ sinh an toàn thực phẩm nghiêm ngặt."
					/> */}
					<Content
						title="Nhà Nông Học"
						featureTitle="Sơ chế"
						description={
							<>
								<p>
									Người làm công việc sơ chế chuối chịu trách
									nhiệm xử lý chuối sau thu hoạch để chuẩn bị
									cho việc đóng gói, bảo quản hoặc chế biến.
									Họ bắt đầu bằng việc phân loại chuối theo
									kích cỡ, độ chín và chất lượng. Tiếp đó,
									chuối được cắt tỉa cuống, rửa sạch bằng nước
									hoặc dung dịch sát khuẩn nhẹ để loại bỏ bụi
									bẩn và mủ.
								</p>
								<p className="mt-2">
									Sau khi làm sạch, người sơ chế để chuối ráo
									nước, lau khô và sắp xếp vào khay hoặc thùng
									theo tiêu chuẩn. Một số công đoạn có thể bao
									gồm ngâm chuối trong dung dịch bảo quản tự
									nhiên, làm nguội nhanh hoặc đóng gói hút
									chân không tùy mục đích sử dụng. Công việc
									này đòi hỏi sự tỉ mỉ, sạch sẽ và tuân thủ
									quy trình vệ sinh an toàn thực phẩm nghiêm
									ngặt.
								</p>
							</>
						}
					/>
				</div>
			</div>
		</div>
	);
};

const Feature3 = () => {
	const { ref, visible } = useVisibleOnScroll();

	return (
		<div ref={ref} data-feature="feature3">
			<div className="-mt-[28em] md:-mt-[26em]">
				<div className="translate-x-40 md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-3 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="356"
						height="75"
						viewBox="0 0 356 75"
						fill="none"
						className="animation-move-right"
					>
						<path
							d="M354 1C285.588 118.746 109 26 0.999996 73"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="translate-x-[25em] -translate-y-16 md:hidden block">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="59"
						height="582"
						viewBox="0 0 59 582"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 1C77.187 131.917 66.7736 437.565 21.5918 581"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative -translate-y-16 translate-x-[15em] md:translate-x-0 md:translate-y-0 -z-20">
					<picture>
						<div className="rotate-90 relative z-30">
							<img
								className={`transition-opacity duration-700 absolute scale-110 md:top-36 md:right-72 top-28 right-56 w-10 ${
									visible
										? 'animation-move-right'
										: 'opacity-0'
								}`}
								src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
								loading="lazy"
							/>
						</div>

						<img
							className={`transition-opacity duration-700 absolute left-[6em] z-0 w-48 top-[20em] ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/3.png"
							loading="lazy"
						/>
						<img
							className="absolute left-[-4em] top-8 h-80 w-56 -z-10 border-4 border-white shadow-lg scale-125"
							src="/anh-5.jpg"
							alt="nông dân"
							loading="lazy"
						/>
					</picture>
					<img
						className={`transition-opacity duration-700 absolute -z-20 top-6 left-[-11em] w-80  ${
							visible ? 'animation-move-right' : 'opacity-0'
						}`}
						src="/bg-nha-san-xuat.webp"
						loading="lazy"
					/>
				</div>
				<div
					className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[280px] left-[100px] md:top-0 top-[360px] ${
						visible ? 'animation-move-right' : 'opacity-0'
					}`}
				>
					<Content
						title="Nông Dân"
						featureTitle="Khâu tinh chế"
						description={
							<>
								<p>
									Ở khâu tinh chế, bột được ngâm trong nước
									theo tỉ lệ phù hợp, khuấy đều và để lắng
									nhằm tách tinh bột ra khỏi các tạp chất như
									chất xơ, protein và nhựa chuối. Phần nước
									chứa tinh bột sau đó được lọc qua nhiều lớp
									hoặc ly tâm để thu phần tinh bột lắng.
								</p>
								<p className="mt-2">
									Tiếp theo, tinh bột được sấy lạnh hoặc sấy
									nhiệt độ thấp để giữ cấu trúc kháng tiêu
									hóa. Một số quy trình còn sử dụng kỹ thuật
									xử lý nhiệt – ẩm hoặc ủ để gia tăng hàm
									lượng tinh bột kháng.
								</p>
							</>
						}
					/>
				</div>
			</div>
		</div>
	);
};

const Feature4 = () => {
	const { ref, visible } = useVisibleOnScroll();

	return (
		<div ref={ref} data-feature="feature4">
			<div className="-mt-36 md:-mt-28">
				<div className="translate-x-20 -translate-y-16 md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="314"
						height="84"
						viewBox="0 0 314 84"
						fill="none"
						className="animation-move-left"
					>
						<path
							d="M1.29688 1.69336C53.1774 93.6787 248.733 -14.6328 312.221 82.2264"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="-translate-x-[17em] -translate-y-36 md:hidden block -scale-x-100 ">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="59"
						height="582"
						viewBox="0 0 59 582"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 1C77.187 131.917 66.7736 437.565 21.5918 581"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative md:translate-x-16 translate-x-[-14em] md:translate-y-0 translate-y-[-5em] -z-10">
					<picture>
						<img
							className={`transition-opacity duration-700 absolute z-30 scale-110 md:top-32 md:right-40 top-36 right-8 w-10 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
							loading="lazy"
						/>
						<img
							className={`transition-opacity duration-700 absolute left-[32em] z-0 w-48 top-[16em] ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/4.png"
							loading="lazy"
						/>
						<img
							className="absolute left-[22em] top-[-2em] -rotate-4 h-80 w-56 z-[-2] border-4 border-white shadow-lg scale-125"
							src="/anh-4.jpg"
							loading="lazy"
						/>
					</picture>
					<img
						className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[22em] w-96  ${
							visible ? 'animation-move-right' : 'opacity-0'
						}`}
						src="/bg-rang-ca-phe.webp"
						loading="lazy"
					/>
				</div>
				<div
					className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[-10em] md:top-[-5em] left-[4em] top-[20em] ${
						visible ? 'animation-move-left' : 'opacity-0'
					}`}
				>
					<Content
						title="Nhà Nông Học"
						featureTitle="Nhà sản xuất"
						description="Người sản xuất tinh bột kháng từ chuối tiêu xanh ứng dụng công nghệ nano để tạo ra tinh bột ở kích thước siêu nhỏ, giúp tăng khả năng hấp thu và hiệu quả sinh học khi sử dụng.Sau khi chuối tiêu xanh được làm khô và xay mịn, bột chuối được đưa vào hệ thống nghiền siêu mịn hoặc đồng nhất hóa áp suất cao (high-pressure homogenizer) để tạo ra hạt tinh bột có kích thước nano (20–200 nm). Quá trình này yêu cầu kiểm soát chặt chẽ về tốc độ, áp suất và nhiệt độ để không phá vỡ cấu trúc hoạt tính của tinh bột kháng"
					/>
				</div>
			</div>
		</div>
	);
};

const Feature5 = () => {
	const { ref, visible } = useVisibleOnScroll();

	return (
		<div ref={ref} data-feature="feature5">
			<div className="-mt-72 md:translate-y-[2em]">
				<div className="translate-x-40 md:block hidden">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-3 drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="356"
						height="75"
						viewBox="0 0 356 75"
						fill="none"
					>
						<path
							d="M354 1C285.588 118.746 109 26 0.999996 73"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="translate-x-[25em] -translate-y-20 md:hidden block ">
					<img
						alt="hanh-fuck"
						src="/bean.png"
						loading="lazy"
						className={
							visible
								? 'bean-motion-2-mobile drop-shadow-lg'
								: 'opacity-0'
						}
					/>
					<svg
						width="59"
						height="582"
						viewBox="0 0 59 582"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="animation-move-right"
					>
						<path
							d="M2 1C77.187 131.917 66.7736 437.565 21.5918 581"
							stroke="#3d780a"
							stroke-width="3"
						></path>
					</svg>
				</div>
				<div className="relative translate-x-[16em] md:translate-x-0 md:translate-y-0 translate-y-[-4em] -z-10">
					<picture>
						<div className="rotate-90">
							<img
								className={`transition-opacity duration-700 absolute z-1 scale-110 top-24 left-24 md:top-36 md:left-44 w-10 ${
									visible
										? 'animation-move-right'
										: 'opacity-0'
								}`}
								src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
								loading="lazy"
							/>
						</div>

						<img
							className={`transition-opacity duration-700 absolute left-8 z-0 w-56 top-72 ${
								visible ? 'animation-move-right' : 'opacity-0'
							}`}
							src="/5.png"
							loading="lazy"
						/>
						<img
							className="absolute left-[-4em] top-8 h-80 w-56 z-[-2] rotate-2 border-4 border-white shadow-lg scale-125"
							src="/anh-1.jpg"
							alt="nông dân"
							loading="lazy"
						/>
					</picture>
					<img
						alt="hanh-fuck"
						className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[-14em] w-80  ${
							visible ? 'animation-move-left' : 'opacity-0'
						}`}
						src="/bg-xay-ca-phe.webp"
						loading="lazy"
					/>
				</div>
				<div
					className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative md:left-[280px] left-[4em] md:top-0 top-[24em] mb-56 md:mb-0 ${
						visible ? 'animation-move-right' : 'opacity-0'
					}`}
				>
					<Content
						title="Nông Dân"
						featureTitle="Đóng gói"
						description={
							<>
								<p>
									Người phụ trách khâu đóng gói đảm nhận nhiệm
									vụ bảo quản và hoàn thiện sản phẩm tinh bột
									kháng sau khi đã qua xử lý, sấy khô và đạt
									tiêu chuẩn chất lượng.
								</p>
								<p className="mt-2">
									Trước tiên, tinh bột kháng được kiểm tra lại
									về độ ẩm, màu sắc và mùi để đảm bảo không có
									dấu hiệu hỏng, vón cục hay tạp chất. Sau đó,
									họ sử dụng máy định lượng để chia sản phẩm
									theo khối lượng.sản phẩm được dán nhãn, in
									hạn sử dụng và mã truy xuất nguồn gốc, sau
									đó chuyển vào kho bảo quản. Cuối cùng sẽ
									chọn lọc 5 mẫu bất kì để đưa đi kiểm định
									lại tránh sai sót khi sản phẩm đã giao đến
									người tiêu dùng
								</p>
							</>
						}
					/>
				</div>
			</div>
		</div>
	);
};
