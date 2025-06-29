export default function ProductDetailPage1() {
	return (
		<div className="min-h-screen bg-gray-50 mt-60">
			<div className="max-w-6xl mx-auto bg-yellow-50 rounded-lg overflow-hidden shadow-lg">
				<div className="flex flex-col lg:flex-row">
					<div className="lg:w-1/2 px-5 py-10 relative">
						<img
							src="/P2.png"
							alt="Trà Bí Thom Kháng Tinh An Product"
							className="w-full object-contain"
						/>
					</div>

					<div className="lg:w-1/2 p-8 space-y-6">
						<h1 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
							Tinh bột kháng – Bữa ăn dinh dưỡng từ thiên nhiên,
							giàu chất xơ kháng
						</h1>

						<p className="text-gray-700 leading-relaxed">
							Nuôi dưỡng lợi khuẩn, giảm táo bón, tiêu chảy, viêm
							ruột; hỗ trợ kiểm soát đường huyết, tăng hấp thu
							dưỡng chất
						</p>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Đối tượng
							</h3>
							<p className="text-gray-700">
								Sản phẩm có thể sử dụng cho cả người lớn lẫn trẻ
								em từ 1 tuổi trở lên
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Thành Phần
							</h3>
							<p className="text-gray-700">
								chuối xanh, đỗ xanh, gạo lứt, yến mạch, nghệ và
								các vitamin, khoáng chất thiết yếu.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Cách dùng
							</h3>
							<p className="text-gray-700">
								+ Sản phẩm có hàm lượng dinh dưỡng cao, có thể
								dùng thay bữa ăn phụ hàng ngày.
							</p>
							<p className="text-gray-700">
								+ Pha 1 gói sản phẩm với 100ml nước nóng 60 - 70
								độ C, khuấy đều và sử dụng
							</p>
							<p className="text-gray-700">
								+ Trẻ em từ 1 đến 15 tuổi: Dùng 0,5 - 1 gói/
								ngày.
							</p>
							<p className="text-gray-700">
								+ Người lớn: Dùng 1 - 2 gói/ngày
							</p>
						</div>

						<div className="pt-4">
							<button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
								Liên hệ với chúng tôi
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
