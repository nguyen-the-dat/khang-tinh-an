import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { products } from '../../productData';

interface Section {
	key: string;
	title: string;
	content: string[];
}

interface ProductInfoProps {
	productId: number;
}

const ProductInfo = ({ productId }: ProductInfoProps) => {
	const [openSection, setOpenSection] = useState<string | null>(null);

	const product = products.find((p) => p.id === productId);

	const sections: Section[] = [
		{
			key: 'ingredient',
			title: 'NGUYÊN LIỆU',
			content: product?.ingredients?.length
				? product.ingredients
				: [
						'Tinh dầu Sả Chanh nguyên chất 40%',
						'Tinh dầu Cam Ngọt 20%',
						'Tinh dầu Bạc Hà 15%',
						'Tinh dầu Oải Hương 15%',
						'Dung môi chiết xuất từ thực vật 10%',
					],
		},
		{
			key: 'usage',
			title: 'HƯỚNG DẪN SỬ DỤNG',
			content: product?.usage
				? [
						'Đối tượng sử dụng:',
						...product.usage.targetUsers.map((u) => `- ${u}`),
						'',
						'Cách dùng:',
						...product.usage.howToUse.map((h) => `- ${h}`),
					]
				: [
						'Nhỏ 3-5 giọt vào đèn xông tinh dầu hoặc máy khuếch tán.',
						'Có thể nhỏ trực tiếp lên miếng gỗ treo để khử mùi phòng.',
						'Tránh tiếp xúc trực tiếp với da khi chưa pha loãng.',
					],
		},
		{
			key: 'storage',
			title: 'BẢO QUẢN',
			content: product?.usage?.storage
				? [product.usage.storage]
				: [
						'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
					],
		},
	];

	const toggleSection = (key: string) => {
		if (openSection === key) {
			setOpenSection(null);
		} else {
			setOpenSection(key);
		}
	};

	return (
		<div className="max-w-6xl mx-auto text-gray-800 p-6">
			{/* Thông tin sản phẩm */}
			<div className="mb-8">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-2xl font-bold uppercase">
						THÔNG TIN SẢN PHẨM
					</h2>
					<button className="bg-green-600 text-white text-base px-4 py-2 rounded">
						Xem chi tiết
					</button>
				</div>
				<p className="text-green-800 font-semibold text-lg">
					{product?.name}
				</p>
				<p className="text-base text-gray-700 mt-3">
					{product?.description}
				</p>
			</div>

			{/* Accordion */}
			<div className="space-y-4">
				{sections.map((section) => {
					const isOpen = openSection === section.key;

					return (
						<div key={section.key} className="border rounded-lg">
							<div
								className="px-4 py-4 flex justify-between items-center cursor-pointer bg-gray-100 hover:bg-gray-200"
								onClick={() => toggleSection(section.key)}
							>
								<span className="font-semibold text-lg">
									{section.title}
								</span>
								{isOpen && <FiChevronUp />}
								{!isOpen && <FiChevronDown />}
							</div>

							{isOpen && (
								<div className="text-base text-gray-700 px-6 py-4">
									<ul className="list-none ml-0 space-y-2">
										{section.content.map((item, idx) => (
											<li key={idx}>{item}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductInfo;
