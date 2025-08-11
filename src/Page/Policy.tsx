import React from 'react';

const PrivacyPolicy: React.FC = () => {
	return (
		<div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 overflow-y-auto m-16">
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
				Chính sách & Quyền riêng tư
			</h1>

			{/* Quy định chung */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">
					1. Quy định chung
				</h2>
				<ul className="list-decimal pl-6 space-y-3">
					<li>
						Quý khách vào Website <b>khangtinhan.online</b> xin vui
						lòng đọc kỹ quy định và các chính sách được công bố trên
						trang web. Quý khách tham khảo thêm tại mục{' '}
						<b>
							Hướng dẫn mua hàng, Chính sách bán hàng, Điều khoản
							bảo mật
						</b>{' '}
						để đảm bảo hiểu rõ các quy định và chính sách của chúng
						tôi.
					</li>
					<li>
						<b>Kháng Tinh An</b> có quyền thay đổi, chỉnh sửa, thêm
						hoặc lược bỏ bất kỳ phần nào trên Website của Kháng Tinh
						An vào bất cứ lúc nào mà không cần thông báo trước. Quý
						khách có trách nhiệm theo dõi Website thường xuyên để
						cập nhật.
					</li>
					<li>
						Kháng Tinh An không chịu trách nhiệm về chất lượng đường
						truyền Internet ảnh hưởng đến tốc độ truy cập Website.
					</li>
					<li>
						Khách hàng phải đảm bảo đủ 18 tuổi hoặc truy cập dưới sự
						giám sát của cha mẹ/người giám hộ hợp pháp.
					</li>
					<li>
						Khách hàng phải tự bảo mật mật khẩu, tài khoản và hoạt
						động trên Website. Chúng tôi không chịu trách nhiệm cho
						mọi thiệt hại do truy cập trái phép.
					</li>
					<li>
						Nếu phát hiện tài khoản giả mạo, chúng tôi sẽ khóa ngay
						và áp dụng biện pháp theo quy định pháp luật.
					</li>
				</ul>
			</section>

			{/* Hạn chế và điều khoản bất khả kháng */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">
					2. Hạn chế và điều khoản bất khả kháng
				</h2>
				<ul className="list-decimal pl-6 space-y-3">
					<li>
						Chúng tôi nỗ lực đảm bảo thông tin chính xác, nhưng
						không đảm bảo tuyệt đối mọi tài liệu là hoàn thiện và
						cập nhật.
					</li>
					<li>
						Khi đơn hàng có sai sót, chúng tôi sẽ liên hệ hướng dẫn
						hoặc hủy đơn, đồng thời hoàn tiền nếu cần thiết.
					</li>
					<li>
						Chúng tôi không chịu trách nhiệm với các nguyên nhân bất
						khả kháng như tin tặc, chiến tranh, dịch bệnh, thiên
						tai, sự cố kỹ thuật hay gián đoạn hạ tầng.
					</li>
				</ul>
			</section>

			{/* Trách nhiệm các bên */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">
					3. Trách nhiệm của các bên khi tham gia giao dịch
				</h2>
				<ul className="list-decimal pl-6 space-y-3">
					<li>
						Quý khách phải đọc kỹ các quy định và cung cấp thông tin
						chính xác khi mua hàng.
					</li>
					<li>
						Quý khách cam kết nhận hàng theo đơn đã đặt hoặc thông
						báo kịp thời để xử lý.
					</li>
					<li>
						Quý khách cần cung cấp mã đơn hàng, xác nhận hoặc video
						mở hàng khi khiếu nại.
					</li>
					<li>
						Kháng Tinh An sẽ gửi xác nhận qua email/điện thoại và hỗ
						trợ kịp thời.
					</li>
					<li>
						Chúng tôi đảm bảo giao đúng số lượng, chất lượng sản
						phẩm và xử lý đổi/trả nếu có lỗi.
					</li>
					<li>
						Kháng Tinh An bảo mật thông tin khách hàng và sử dụng
						đúng mục đích theo pháp luật.
					</li>
				</ul>
			</section>

			{/* Giải quyết tranh chấp */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">
					4. Giải quyết tranh chấp
				</h2>
				<p>
					Mọi tranh chấp liên quan đến giao dịch tại Website
					khangtinhan.online sẽ ưu tiên thương lượng, hòa giải. Nếu
					không thành công sẽ được giải quyết tại Trọng tài hoặc Tòa
					án theo pháp luật Việt Nam.
				</p>
			</section>

			{/* Luật áp dụng */}
			<section>
				<h2 className="text-xl font-semibold mb-4">5. Luật áp dụng</h2>
				<p>
					Mọi điều khoản và giao dịch tại Website khangtinhan.online
					được điều chỉnh theo pháp luật Việt Nam. Nếu có điều khoản
					không hợp pháp, phần còn lại vẫn giữ nguyên hiệu lực.
				</p>
			</section>
		</div>
	);
};

export default PrivacyPolicy;
