import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const feedbackImages = [
	'/Feedback/IMG_2944.PNG',
	'/Feedback/IMG_2945.PNG',
	'/Feedback/IMG_2946.PNG',
	'/Feedback/IMG_2947.PNG',
	'/Feedback/IMG_2949.PNG',
	'/Feedback/IMG_2950.PNG',
	'/Feedback/IMG_2951.PNG',
	'/Feedback/IMG_2955.PNG',
	'/Feedback/IMG_2957.PNG',
	'/Feedback/IMG_2958.PNG',
];

export default function CustomerFeedbackSlider() {
	return (
		<div className="bg-[#FFF8F2] py-16 px-4 sm:px-10 md:px-20">
			<div className="max-w-screen-xl mx-auto text-center mb-10">
				<p className="text-2xl sm:text-3xl font-[DancingScript] italic text-gray-800">
					Cảm nhận của
				</p>
				<h2 className="text-3xl sm:text-4xl font-bold text-green-700">
					Khách Hàng
				</h2>
			</div>

			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={24}
				slidesPerView={1}
				breakpoints={{
					640: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				navigation
				pagination={{ clickable: true }}
			>
				{feedbackImages.map((img, idx) => (
					<SwiperSlide key={idx}>
						<div className="rounded-xl overflow-hidden shadow-md bg-white flex justify-center items-center p-6">
							<img
								src={img}
								alt={`Feedback ${idx + 1}`}
								className="max-h-80 w-auto object-contain"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
