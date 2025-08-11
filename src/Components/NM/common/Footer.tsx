import { FaFacebookF, FaFacebookMessenger, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

export default function Footer() {
	return (
		<footer className="bg-green-600 text-white py-12 px-6 sm:px-10 md:px-20">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
				{/* CÔNG TY */}
				<div>
					<h2 className="text-2xl font-bold uppercase leading-snug">
						Công Ty TNHH KHÁNG TINH AN
					</h2>
					<div className="mt-6 space-y-4 text-base md:text-lg">
						<div className="flex items-start gap-2">
							<MdLocationOn className="text-2xl mt-1" />
							<p>
								Số nhà 152 Tổ 12 Phường Bắc Kạn, tỉnh Thái
								Nguyên
							</p>
						</div>
						<div className="flex items-center gap-2">
							<MdPhone className="text-2xl" />
							<p>+84 918 755 632</p>
						</div>
						<div className="flex items-center gap-2">
							<MdEmail className="text-2xl" />
							<p>khangtinhan.cskh@gmail.com</p>
						</div>
					</div>
					<div className="flex gap-5 mt-6 text-2xl">
						<a href="#">
							<FaFacebookF />
						</a>
						<a href="#">
							<FaFacebookMessenger />
						</a>
						<a href="#">
							<FaYoutube />
						</a>
					</div>
				</div>

				{/* Về Kháng Tinh An */}
				<div>
					<h3 className="text-xl font-semibold mb-4">
						Về Kháng Tinh An
					</h3>
					<ul className="space-y-3 text-base md:text-lg">
						<li>
							<a href="#">Câu chuyện thương hiệu</a>
						</li>
						<li>
							<a href="#">Giá trị cốt lõi</a>
						</li>
					</ul>
				</div>

				{/* Sản phẩm */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Sản phẩm</h3>
					<ul className="space-y-3 text-base md:text-lg">
						<li>
							<a href="#">Tinh bột kháng</a>
						</li>
						<li>
							<a href="#">Trà bí thơm</a>
						</li>
						<li>
							<a href="#">Combo / Bộ sản phẩm</a>
						</li>
					</ul>
				</div>

				{/* Đặt hàng & hỗ trợ */}
				<div>
					<h3 className="text-xl font-semibold mb-4">
						Đặt hàng và hỗ trợ
					</h3>
					<ul className="space-y-3 text-base md:text-lg">
						<li>
							<a href="#">Hỏi đáp</a>
						</li>
						<li>
							<a href="#">Hướng dẫn mua hàng</a>
						</li>
						<li>
							<a href="#">Chính sách đổi trả và hoàn tiền</a>
						</li>
						<li>
							<a href="#">Chính sách bảo mật</a>
						</li>
					</ul>
				</div>
			</div>

			<hr className="border-white opacity-30 my-10" />
			<div className="text-center text-sm md:text-base">
				© 2025 Bản quyền thuộc về Kháng Tinh An
			</div>
		</footer>
	);
}
