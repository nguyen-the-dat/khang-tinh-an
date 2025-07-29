import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function GreenNutriGrid() {
	const instagramLink =
		'https://www.instagram.com/p/DDHIWZHBDpy/?utm_source=ig_web_copy_link';
	return (
		<div className="px-4 sm:px-8 md:px-16 lg:px-48 py-6 font-sans">
			{/* Header */}
			<div className="flex flex-col md:flex-row justify-between items-center mb-4 text-center md:text-left gap-2">
				<span className="text-green-700 text-lg font-semibold">
					@khangtinhan
				</span>
				<a
					href="https://www.facebook.com/profile.php?id=61577276590314&locale=vi_VN"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
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
					className="group w-full md:w-[30%] rounded-xl overflow-hidden relative block"
				>
					<img
						src="./ailanguoisudung.jpg"
						alt="highlight"
						className="w-full h-auto md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
						<FaFacebook className="text-white text-6xl" />
					</div>
				</a>

				{/* KHỐI PHẢI */}
				<div className="w-full md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-2">
					{[
						'songtichcuc.jpg',
						'thucanchoduongruot.jpg',
						'tiletieuduong.jpg',
						'3buoc.jpg',
					].map((src, index) => (
						<a
							key={index}
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="group rounded-xl overflow-hidden relative block"
							onClick={(e) => e.preventDefault()}
						>
							<img
								src={`./${src}`}
								className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
								<FaFacebook className="text-white text-6xl" />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
