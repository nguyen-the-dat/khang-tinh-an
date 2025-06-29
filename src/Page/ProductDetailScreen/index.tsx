export default function ProductDetailPage() {
	return (
		<div className="min-h-screen bg-gray-50 mt-60">
			<div className="max-w-6xl mx-auto bg-yellow-50 rounded-lg overflow-hidden shadow-lg">
				<div className="flex flex-col lg:flex-row">
					<div className="lg:w-1/2 px-5 py-10 relative">
						<img
							src="/P1.png"
							alt="Trà Bí Thom Kháng Tinh An Product"
							className="w-full object-contain"
						/>
					</div>

					<div className="lg:w-1/2 p-8 space-y-6">
						<h1 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
							Trà Bí Thơm Baka - Bồi Bổ, Tăng Cường Sức Khỏe
						</h1>

						<p className="text-gray-700 leading-relaxed">
							Thức uống giải nhiệt, mát gan, giảm stress, cải
							thiện giấc ngủ, làm đẹp da, hỗ trợ tiêu hóa và giữ
							dáng. Thơm ngon dễ uống – chăm sóc cả sức khỏe và
							sắc đẹp mỗi ngày.
						</p>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Đối tượng
							</h3>
							<p className="text-gray-700">
								Phù hợp cho mọi đối tượng
							</p>
							<p className="text-gray-700">Trẻ em trên 1 tuổi</p>
						</div>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Thành Phần
							</h3>
							<p className="text-gray-700">
								Bí thơm, Táo đỏ, Ký tử, Đông trùng, Long nhãn,
								Lá nhàn, Lá dứa.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Cách dùng
							</h3>
							<p className="text-gray-700">
								Pha 1 túi trà với 1,2 – 1,5L nước sôi, ủ 5-10
								phút. Uống nóng hoặc lạnh tùy thích.
							</p>
							<p className="text-gray-700">
								Bảo quản: Nơi khô ráo, thoáng mát, tránh ánh
								nắng trực tiếp.
							</p>
							<p className="text-gray-700">
								Khối lượng tịnh: 200g (20 gói x 25g).
							</p>
							<p className="text-gray-700">
								Đơn vị sản xuất: Hợp tác xã Nghiên cứu Phát
								triển Dược & Mỹ phẩm Bắc Kan.
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
