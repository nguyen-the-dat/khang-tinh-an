// Stories.tsx
import { useEffect } from 'react';

type ElementProps = {
	elements: {
		image: string;
		name: string;
	};
	index: number;
	onClick: () => void;
};

const Element = ({ elements, index, onClick }: ElementProps) => {
	const imageClass = `
    ${index === 0 ? 'w-20' : 'w-24'} 
    ${index === 5 ? 'translate-y-4' : ''} 
  `;

	return (
		<div 
			className="cursor-pointer transition-all duration-300 hover:scale-105" 
			onClick={onClick}
		>
			<div className="flex flex-col items-center gap-4 min-h-[180px]">
				<div className="img-container animation-pulse-opacity"></div>
				<img
					src={elements.image}
					alt={elements.name}
					className={`${imageClass.trim()} mt-6 transition-transform duration-300`}
				/>
			</div>
			<p className="text-center -translate-y-8 font-medium transition-colors duration-300 hover:text-green-700">
				{elements.name}
			</p>
		</div>
	);
};

const elements = [
	{
		image: '/1.png',
		name: 'Người nông dân',
	},
	{
		image: '/2.png',
		name: 'Sơ chế',
	},
	{
		image: '/3.png',
		name: 'Khâu tinh chế',
	},
	{
		image: '/4.png',
		name: 'Nhà sản xuất',
	},
	{
		image: '/5.png',
		name: 'Đóng gói',
	},
];

export interface StoriesRef {
	scrollToFeature: (index: number) => void;
}

function Stories() {
	useEffect(() => {
		const originalScrollBehavior = document.documentElement.style.scrollBehavior;
		document.documentElement.style.scrollBehavior = 'smooth';
		
		return () => {
			document.documentElement.style.scrollBehavior = originalScrollBehavior;
		};
	}, []);

	const smoothScrollTo = (targetPosition: number, duration: number = 1500) => {
		const startPosition = window.pageYOffset;
		const distance = targetPosition - startPosition;
		let startTime: number | null = null;

		const easeInOutCubic = (t: number): number => {
			return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
		};

		const animation = (currentTime: number) => {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const progress = Math.min(timeElapsed / duration, 1);
			
			const easedProgress = easeInOutCubic(progress);
			const currentPosition = startPosition + distance * easedProgress;
			
			window.scrollTo(0, currentPosition);
			
			if (progress < 1) {
				requestAnimationFrame(animation);
			}
		};

		requestAnimationFrame(animation);
	};

	const scrollToFeature = (index: number) => {
		const featureSelectors = [
			'[data-feature="feature1"]',
			'[data-feature="feature2"]', 
			'[data-feature="feature3"]',
			'[data-feature="feature4"]',
			'[data-feature="feature5"]'
		];
		
		const targetElement = document.querySelector(featureSelectors[index]);
		if (targetElement) {
			const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition - (window.innerHeight / 2) + 200;
			
			smoothScrollTo(offsetPosition, 1200); 
		}
	};

	return (
		<div className="bg-gradient-to-t from-transparent to-[#81b085]  -translate-y-[54px]">
			<section className="flex flex-col items-center gap-4 xl:px-[360px] lg:px-52 md:px-20 px-16 montserrat-font mb-6">
				<span className="title py-2 pt-16">
					Khám phá câu chuyện của những người thầm lặng đứng sau từng
					cốc tinh bột kháng mà bạn đang sử dụng mỗi ngày
				</span>
				<p className="text-lg py-2">
					Giới thiệu hành trình làm ra tinh bột kháng Kháng Tinh An:
					Khám phá sự tận tâm, nghiên cứu nghiêm túc và công nghệ hiện
					đại phía sau từng mẻ tinh bột kháng từ chuối tiêu xanh – để
					sức khỏe của bạn luôn bắt đầu từ những điều nhỏ nhất.
				</p>
			</section>

			<section className="flex flex-col items-center gap-8 montserrat-font">
				<span className="title text-center py-8 px-16">
					Gặp Gỡ Những Người Làm Nên Kháng Tinh An
				</span>
				<div className="flex items-center gap-x-16 lg:gap-20 flex-row flex-wrap lg:flex-nowrap justify-center w-full px-24">
					{elements.map((item, index) => (
						<Element 
							key={index} 
							elements={item} 
							index={index} 
							onClick={() => scrollToFeature(index)}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

export default Stories;
