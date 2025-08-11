import React from 'react';

const SecurityPolicy: React.FC = () => {
	return (
		<div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 overflow-y-auto m-16">
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
				Chính sách Thanh toán, Giao hàng & Bảo mật thông tin
			</h1>

			{/* PHẦN 1 - Giao hàng & Thanh toán */}
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

			<h2 className="text-xl font-semibold mb-4">1. Chính sách giá</h2>
			<p className="mb-8">
				Giá sản phẩm niêm yết tại Website là giá đã bao gồm thuế theo
				quy định pháp luật hiện hành, phí đóng gói và các chi phí khác
				liên quan đến việc mua hàng trừ các chi phí phát sinh khác được
				xác nhận qua Hotline hoặc Email của Kháng Tinh An và được sự
				chấp thuận của khách hàng.
			</p>

			<h2 className="text-xl font-semibold mb-4">2. Phí vận chuyển</h2>
			<ul className="list-disc pl-6 mb-8 space-y-1">
				<li>Đơn hàng từ 99.000 VNĐ: Miễn phí vận chuyển toàn quốc.</li>
				<li>Đơn hàng dưới 99.000 VNĐ: Phí 30.000 VNĐ toàn quốc.</li>
			</ul>

			<h2 className="text-xl font-semibold mb-4">3. Thời gian giao hàng</h2>
			<ul className="list-disc pl-6 mb-8 space-y-1">
				<li>Nội thành Hà Nội: 2-3 ngày.</li>
				<li>Ngoại thành & tỉnh khác: 2-5 ngày (trung tâm), 5-6 ngày (huyện, xã).</li>
				<li>Có thể chậm do lễ tết, thời tiết, nguyên nhân khách quan.</li>
				<li>Nếu chậm, chúng tôi sẽ báo ngay và hỗ trợ tiếp tục giao hoặc huỷ đơn.</li>
			</ul>

			<h2 className="text-xl font-semibold mb-4">4. Quy trình giao nhận, đổi trả, bảo hành</h2>
			<ul className="list-decimal pl-6 mb-8 space-y-1">
				<li>Không có mặt khi giao hàng → hẹn lại tối đa 2 lần, sau đó hoàn về và hoàn tiền trong 15 ngày.</li>
				<li>Không liên lạc được 3 ngày → huỷ đơn, hoàn tiền 15 ngày.</li>
				<li>Kiểm tra kỹ hàng trước khi ký nhận.</li>
				<li>Vận chuyển cam kết bảo mật thông tin, hình ảnh.</li>
				<li>Quay video mở hàng để làm bằng chứng khi khiếu nại.</li>
				<li>Chỉ nhận đổi trả do lỗi NSX hoặc vận chuyển (yêu cầu trong 3 ngày).</li>
				<li>Đóng gói theo tiêu chuẩn, yêu cầu đặc biệt sẽ tính phí.</li>
				<li>Thanh toán COD hoặc online/Momo.</li>
				<li>Báo sớm nếu muốn huỷ/chỉnh đơn.</li>
				<li>Kiểm tra đơn qua Fanpage, Email, Hotline.</li>
			</ul>

			<h2 className="text-xl font-semibold mb-4">5. Thông tin liên lạc</h2>
			<ul className="list-disc pl-6 mb-8 space-y-1">
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

			{/* PHẦN 2 - Bảo mật thông tin */}
			<h2 className="text-2xl font-bold mb-4">Chính sách bảo mật thông tin</h2>
			<p className="mb-4">
				Kháng Tinh An cam kết nghiêm túc thực hiện trách nhiệm của mình
				liên quan đến bảo mật thông tin, quyền riêng tư của khách hàng
				theo quy định pháp luật Việt Nam. Chúng tôi nhận biết tầm quan
				trọng của dữ liệu cá nhân mà bạn cung cấp và sẽ bảo vệ, xử lý
				một cách thích hợp.
			</p>

			<h3 className="text-lg font-semibold mb-2">1. Mục đích, phạm vi sử dụng & thời gian lưu trữ</h3>
			{/* 1.1 */}
			<h4 className="font-medium">1.1. Mục đích, phạm vi sử dụng</h4>
			<ul className="list-disc pl-6 mb-4 space-y-1">
				<li>Quản lý, xử lý đơn hàng/giao dịch.</li>
				<li>Hỗ trợ dịch vụ chăm sóc khách hàng.</li>
				<li>Xác minh, đánh giá pháp lý, nhận biết khách hàng.</li>
				<li>Lập thống kê, nghiên cứu nâng cao dịch vụ.</li>
				<li>Đáp ứng yêu cầu pháp luật hoặc cơ quan chức năng.</li>
			</ul>

			{/* 1.2 */}
			<h4 className="font-medium">1.2. Người/Tổ chức có thể tiếp cận</h4>
			<ul className="list-disc pl-6 mb-4 space-y-1">
				<li>Nhân viên, đối tác dịch vụ vận chuyển, thanh toán trung gian.</li>
				<li>Theo yêu cầu của tòa án hoặc cơ quan nhà nước.</li>
			</ul>

			{/* 1.3 */}
			<h4 className="font-medium">1.3. Khi nào thu thập</h4>
			<ul className="list-disc pl-6 mb-4 space-y-1">
				<li>Khi đăng ký tài khoản, đặt hàng.</li>
				<li>Khi liên hệ qua hotline, email, mạng xã hội.</li>
				<li>Khi liên kết tài khoản mạng xã hội.</li>
				<li>Khi gửi phản hồi hoặc khiếu nại.</li>
			</ul>

			{/* 1.4 */}
			<h4 className="font-medium">1.4. Phạm vi thu thập</h4>
			<ul className="list-disc pl-6 mb-4 space-y-1">
				<li>Họ tên, email, địa chỉ giao hàng, số điện thoại, tài khoản ngân hàng.</li>
				<li>Hình ảnh, âm thanh, video mở hàng.</li>
				<li>Thông tin đăng nhập khi sử dụng dịch vụ liên kết.</li>
			</ul>

			{/* 1.5 */}
			<h4 className="font-medium">1.5. Thời gian lưu trữ & cam kết bảo mật</h4>
			<ul className="list-disc pl-6 mb-8 space-y-1">
				<li>Lưu trữ 2 năm kể từ đơn hàng cuối cùng.</li>
				<li>Dữ liệu được bảo mật trên hệ thống, chỉ nhân viên được quyền mới truy cập.</li>
				<li>Có thể tiêu hủy dữ liệu an toàn khi cần thiết.</li>
			</ul>

			<h3 className="text-lg font-semibold mb-2">2. Thương hiệu & Bản quyền</h3>
			<p className="mb-4">
				Mọi quyền sở hữu trí tuệ thuộc về Kháng Tinh An và được bảo vệ
				bởi pháp luật Việt Nam và quốc tế.
			</p>

			<h3 className="text-lg font-semibold mb-2">3. Sửa đổi thông tin & Xoá tài khoản</h3>
			<p className="mb-4">
				Khách hàng có thể đăng nhập website{' '}
				<a href="https://khangtinhan.online" className="text-blue-600 underline">
					https://khangtinhan.online
				</a>{' '}
				để chỉnh sửa thông tin, hoặc liên hệ email/hotline để được hỗ trợ xoá tài khoản.
			</p>

			<h3 className="text-lg font-semibold mb-2">4. Thay đổi chính sách</h3>
			<p className="mb-4">
				Chính sách bảo mật có thể thay đổi theo nhu cầu và quy định pháp luật mà không cần báo trước.
			</p>

			<h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
			<ul className="list-disc pl-6 space-y-1">
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
		</div>
	);
};

export default SecurityPolicy;
