import React from 'react';

const PolicyPayment: React.FC = () => {
	return (
		<div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 overflow-y-auto m-16">
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
				Chính sách Thanh toán & Giao hàng
			</h1>

			{/* Giới thiệu */}
			<section className="mb-8">
				<p>
					Kháng Tinh An Vietnam có dịch vụ giao hàng tận nơi trên toàn
					quốc, áp dụng cho khách mua hàng trên Website, Fanpage và
					gọi điện thoại vào Hotline của Kháng Tinh An. Đơn hàng sẽ
					được chuyển phát đến địa chỉ khách hàng cung cấp thông qua
					đơn vị vận chuyển trung gian là <b>GIAO HÀNG TIẾT KIỆM</b> hoặc{' '}
					<b>Viettel Post</b>. Đặc biệt, thông tin hóa đơn dán bên ngoài
					kiện hàng luôn luôn có logo của thương hiệu để nhận biết các
					sản phẩm là chính hãng.
				</p>
			</section>

			{/* 1. Chính sách giá */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">1. Chính sách giá</h2>
				<p>
					Giá sản phẩm niêm yết tại Website là giá đã bao gồm thuế theo
					quy định pháp luật hiện hành, phí đóng gói và các chi phí khác
					liên quan đến việc mua hàng trừ các chi phí phát sinh khác được
					xác nhận qua Hotline hoặc Email của Kháng Tinh An và được sự chấp
					thuận của khách hàng trong quá trình xác nhận đơn đặt hàng, giao
					nhận hàng hoá.
				</p>
			</section>

			{/* 2. Phí vận chuyển */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">2. Phí vận chuyển</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Với hóa đơn từ 99.000 VNĐ: miễn phí vận chuyển toàn quốc.</li>
					<li>
						Với hóa đơn dưới 99.000 VNĐ: phí vận chuyển mặc định là
						30.000 VNĐ áp dụng toàn quốc.
					</li>
				</ul>
			</section>

			{/* 3. Thời gian giao hàng */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">3. Thời gian giao hàng</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Đơn hàng nội thành Hà Nội: 2-3 ngày sau khi đặt hàng.</li>
					<li>
						Đơn hàng ngoại thành Hà Nội và các tỉnh thành khác: 2-5 ngày
						(khu vực trung tâm) và 5-6 ngày (khu vực huyện, xã, thị trấn).
					</li>
					<li>
						Có thể chậm trễ do lễ, tết, địa chỉ khó tìm, hoặc nguyên nhân
						khách quan từ dịch vụ chuyển phát.
					</li>
					<li>
						Nếu chậm trễ, Kháng Tinh An sẽ thông báo và hỗ trợ tiếp tục giao
						hàng hoặc huỷ đơn theo yêu cầu.
					</li>
				</ul>
			</section>

			{/* 4. Quy trình giao nhận, đổi trả, bảo hành */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">
					4. Quy trình giao nhận, đổi trả, bảo hành sản phẩm
				</h2>
				<ul className="list-decimal pl-6 space-y-2">
					<li>
						Nếu quý khách không có mặt khi giao hàng, đơn vị vận chuyển
						sẽ hẹn lại tối đa 2 lần. Sau đó hàng sẽ hoàn về và hoàn tiền
						trong 15 ngày.
					</li>
					<li>
						Nếu không liên lạc được trong 3 ngày, đơn hàng sẽ bị huỷ và
						hoàn tiền trong 15 ngày.
					</li>
					<li>
						Quý khách cần kiểm tra sản phẩm khi nhận hàng. Việc ký nhận
						hoặc ảnh chụp nhận hàng là bằng chứng đã giao thành công.
					</li>
					<li>
						Đơn vị vận chuyển có trách nhiệm bảo mật thông tin, hình ảnh
						thu thập trong quá trình giao hàng.
					</li>
					<li>
						Quý khách cần quay video mở hàng để làm bằng chứng khi khiếu
						nại, đổi trả hoặc bảo hành.
					</li>
					<li>
						Kháng Tinh An chỉ nhận đổi trả, bảo hành khi lỗi do nhà sản
						xuất hoặc vận chuyển. Thời gian yêu cầu đổi trả không quá 3
						ngày từ khi nhận hàng.
					</li>
					<li>
						Hàng được đóng gói theo tiêu chuẩn. Yêu cầu gói đặc biệt sẽ có
						phí thoả thuận.
					</li>
					<li>
						Thanh toán COD hoặc qua cổng thanh toán trực tuyến / Ví Momo.
					</li>
					<li>
						Mọi thay đổi, huỷ đơn cần báo sớm để xử lý kịp thời.
					</li>
					<li>
						Để kiểm tra tình trạng đơn hàng, vui lòng liên hệ Fanpage,
						Email hoặc Hotline.
					</li>
				</ul>
			</section>

			{/* 5. Thông tin liên lạc */}
			<section>
				<h2 className="text-xl font-semibold mb-4">5. Thông tin liên lạc</h2>
				<p>Quý khách vui lòng liên hệ qua các kênh sau:</p>
				<ul className="list-disc pl-6 mt-2 space-y-1">
					<li>
						Fanpage:{' '}
						<a
							href="https://www.facebook.com/profile.php?id=61577276590314"
							target="_blank"
							className="text-blue-600 underline"
						>
							https://www.facebook.com/profile.php?id=61577276590314
						</a>
					</li>
					<li>Hotline: +84 918 755 632 (9:00-18:00 từ thứ 2 đến thứ 6)</li>
					<li>Email: khangtinhan.cskh@gmail.com</li>
				</ul>
			</section>
		</div>
	);
};

export default PolicyPayment;
