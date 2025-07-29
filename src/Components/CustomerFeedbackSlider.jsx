import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const feedbackImages = [
	'/feedbacks/f1.jpg',
	'/feedbacks/f1.jpg',
	'/feedbacks/f1.jpg',
	'/feedbacks/f1.jpg',
	'/feedbacks/f1.jpg',
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
						<div className="rounded-xl overflow-hidden shadow-md bg-white">
							<img
								src={img}
								alt={`Feedback ${idx + 1}`}
								className="w-full h-auto object-cover"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
