import React, { useState } from 'react';

const qaList = [
	{
		question: 'Tinh bột kháng là gì và Kháng Tinh An có gì đặc biệt?',
		answer: '👉 Tinh bột kháng là một loại tinh bột không bị tiêu hóa ở ruột non, giúp nuôi lợi khuẩn đường ruột và hỗ trợ chuyển hóa đường, mỡ trong cơ thể.\nKháng Tinh An là sản phẩm tinh bột kháng cao cấp, được chiết xuất tự nhiên và trải qua công nghệ xử lý hiện đại giúp giữ nguyên hoạt tính sinh học, hỗ trợ sức khỏe tiêu hóa và kiểm soát đường huyết hiệu quả.',
	},
	{
		question:
			'Sản phẩm Kháng Tinh An có phù hợp với người bị tiểu đường không?',
		answer: '👉 Có. Kháng Tinh An giúp làm chậm hấp thu đường, hỗ trợ ổn định đường huyết và cải thiện độ nhạy insulin, rất phù hợp cho người bị tiểu đường hoặc tiền tiểu đường khi sử dụng đúng liều lượng.',
	},
	{
		question:
			'Cách sử dụng Kháng Tinh An như thế nào để đạt hiệu quả tốt nhất?',
		answer: '👉 Bạn nên pha 1–2 muỗng Kháng Tinh An với nước ấm (dưới 60°C) hoặc trộn vào sinh tố, sữa chua hay thức ăn nguội. Dùng 1–2 lần mỗi ngày, tốt nhất vào buổi sáng và/hoặc trước bữa ăn chính.',
	},
	{
		question:
			'Kháng Tinh An có chứng nhận an toàn hoặc kiểm nghiệm chất lượng không?',
		answer: '👉 Có. Sản phẩm đã được kiểm nghiệm tại viện dinh dưỡng và đạt các tiêu chuẩn an toàn thực phẩm của Bộ Y tế. Ngoài ra, quy trình sản xuất cũng tuân thủ tiêu chuẩn GMP và HACCP.',
	},
	{
		question:
			'Tôi có thể mua Kháng Tinh An ở đâu và giao hàng trong bao lâu?',
		answer: '👉 Bạn có thể đặt mua trực tiếp trên website chính thức hoặc qua các nền tảng thương mại điện tử như Shopee, Lazada và Tiki. Thời gian giao hàng từ 1–3 ngày tùy khu vực. Miễn phí vận chuyển cho đơn hàng từ 300.000đ trở lên.',
	},
];

export default function ChatBox() {
	const [open, setOpen] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState('');

	return (
		<div className="fixed bottom-64 right-6 z-50 text-sm font-sans">
			{!open ? (
				<button
					onClick={() => setOpen(true)}
					className="bg-blue-600 text-white p-5 rounded-full shadow-md hover:bg-blue-700"
				>
					<span className="scale-150 block">💬</span>
				</button>
			) : (
				<div className="w-80 bg-white border rounded-xl shadow-lg flex flex-col max-h-[80vh]">
					<div className="flex justify-between items-center p-4 border-b">
						<h2 className="font-semibold text-base">
							Hỏi đáp về Kháng Tinh An
						</h2>
						<button
							onClick={() => setOpen(false)}
							className="text-gray-500 hover:text-gray-800"
						>
							✖
						</button>
					</div>
					<div className="overflow-y-auto flex-1 px-4 py-3 space-y-2">
						{selectedAnswer ? (
							<div className="whitespace-pre-wrap">
								{selectedAnswer}
							</div>
						) : (
							qaList.map((qa, idx) => (
								<button
									key={idx}
									onClick={() => setSelectedAnswer(qa.answer)}
									className="text-left w-full bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded"
								>
									{qa.question}
								</button>
							))
						)}
					</div>
					{selectedAnswer && (
						<div className="border-t p-3">
							<button
								onClick={() => setSelectedAnswer('')}
								className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
							>
								← Quay lại câu hỏi
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
