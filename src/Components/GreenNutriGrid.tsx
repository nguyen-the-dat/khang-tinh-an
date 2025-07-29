import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function GreenNutriGrid() {
	const imageSrc = '/P1.png';
	const instagramLink =
		'https://www.instagram.com/p/DDHIWZHBDpy/?utm_source=ig_web_copy_link';
	return (
		<div className="px-48 py-6 font-sans">
			{/* Header */}
			<div className="flex flex-col md:flex-row justify-between items-center mb-4 text-center md:text-left gap-2">
				<span className="text-green-700 text-lg font-semibold mx-auto md:mx-0">
					@khangtinhan
				</span>
				<a
					href="https://www.facebook.com/profile.php?id=61577276590314&locale=vi_VN"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition mx-auto md:mx-0"
				>
					THEO DÕI KHÁNG TINH AN
					<FaFacebook className="text-white" />
				</a>
			</div>

			{/* Grid Image Block */}
			<div className="flex flex-col md:flex-row gap-4 md:gap-8 md:h-[600px]">
				{/* KHỐI TRÁI */}
				<a
					href="https://www.facebook.com/share/p/1GXXws7pRw/"
					target="_blank"
					rel="noopener noreferrer"
					className="group w-full md:w-[30%] h-auto md:h-full rounded-xl overflow-hidden relative block"
				>
					<img
						src="./ailanguoisudung.jpg"
						alt="highlight"
						className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
						<FaFacebook className="text-white text-6xl" />
					</div>
				</a>

				{/* KHỐI PHẢI */}
				<div className="w-full md:w-[70%] grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-2">
					{/* Ảnh 1 */}
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="group rounded-xl overflow-hidden relative block"
						onClick={(e) => e.preventDefault()}
					>
						<img
							src="./songtichcuc.jpg"
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
							<FaFacebook className="text-white text-6xl" />
						</div>
					</a>

					{/* Ảnh 2 */}
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="group rounded-xl overflow-hidden relative block"
						onClick={(e) => e.preventDefault()}
					>
						<img
							src="./thucanchoduongruot.jpg"
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
							<FaFacebook className="text-white text-6xl" />
						</div>
					</a>

					{/* Ảnh 3 */}
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="group rounded-xl overflow-hidden relative block"
						onClick={(e) => e.preventDefault()}
					>
						<img
							src="./tiletieuduong.jpg"
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
							<FaFacebook className="text-white text-6xl" />
						</div>
					</a>

					{/* Ảnh 4 */}
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="group rounded-xl overflow-hidden relative block"
						onClick={(e) => e.preventDefault()}
					>
						<img
							src="./3buoc.jpg"
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
							<FaFacebook className="text-white text-6xl" />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
