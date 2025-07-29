import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
	const { cart, clearCart } = useCart();
	const navigate = useNavigate();

	// Form state
	const [form, setForm] = useState({
		fullName: '',
		phone: '',
		email: '',
		address: '',
		note: '',
		paymentMethod: 'COD',
		agree: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type, checked } = e.target as HTMLInputElement;
		setForm((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = () => {
		// Validate
		if (!form.fullName || !form.phone || !form.email || !form.address) {
			alert('Vui lòng nhập đầy đủ thông tin!');
			return;
		}
		if (!form.agree) {
			alert('Bạn cần đồng ý với chính sách để tiếp tục.');
			return;
		}

		// Lưu thông tin thanh toán vào localStorage
		const orderInfo = {
			...form,
			cart,
			totalPrice: cart.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0
			),
		};
		localStorage.setItem('orderInfo', JSON.stringify(orderInfo));

		// Xử lý thanh toán hoặc gọi API backend
		clearCart();
		navigate('/thanh-toan/thanh-cong');
	};

	const total = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return (
		<div className="max-w-[1280px] min-h-screen mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-[17px]">
			{/* Form thông tin nhận hàng */}
			<div className="md:col-span-2 space-y-6">
				<h2 className="text-2xl font-semibold">Thông tin nhận hàng</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<input
						type="text"
						name="fullName"
						placeholder="Họ tên"
						value={form.fullName}
						onChange={handleChange}
						className="border rounded p-3 w-full"
					/>
					<input
						type="text"
						name="phone"
						placeholder="Số điện thoại"
						value={form.phone}
						onChange={handleChange}
						className="border rounded p-3 w-full"
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={form.email}
						onChange={handleChange}
						className="border rounded p-3 w-full md:col-span-2"
					/>
					<input
						type="text"
						name="address"
						placeholder="Địa chỉ (VD: 123 Hoàng Cầu)"
						value={form.address}
						onChange={handleChange}
						className="border rounded p-3 w-full md:col-span-2"
					/>
					<textarea
						name="note"
						placeholder="Ghi chú thêm (VD: Giao giờ hành chính)"
						value={form.note}
						onChange={handleChange}
						className="border rounded p-3 w-full md:col-span-2 h-24"
					/>
				</div>

				<h2 className="text-2xl font-semibold mt-10">
					Chọn Hình thức thanh toán
				</h2>
				<div className="space-y-4">
					{['COD', 'VNPAY', 'ZaloPay', 'MOMO'].map((method) => (
						<label className="flex items-center gap-3" key={method}>
							<input
								type="radio"
								name="paymentMethod"
								value={method}
								checked={form.paymentMethod === method}
								onChange={handleChange}
							/>
							<span>
								{method === 'COD'
									? 'Thanh toán khi nhận hàng (COD)'
									: method === 'VNPAY'
										? 'Thẻ ATM / Credit / Debit Card (VNPAY)'
										: method === 'ZaloPay'
											? 'Ví điện tử ZaloPay'
											: 'Ví MOMO'}
							</span>
						</label>
					))}
				</div>

				<div className="mt-6 flex items-start gap-3">
					<input
						type="checkbox"
						name="agree"
						checked={form.agree}
						onChange={handleChange}
						className="mt-1 w-6 h-6 cursor-pointer accent-green-600"
					/>
					<p className="text-sm sm:text-base leading-snug">
						Bằng việc nhấn vào nút thanh toán tức bạn đã đồng ý với
						các{' '}
						<a href="#" className="text-green-600 underline">
							chính sách mua hàng
						</a>
						,{' '}
						<a href="#" className="text-green-600 underline">
							thanh toán
						</a>{' '}
						và{' '}
						<a href="#" className="text-green-600 underline">
							bảo mật thông tin
						</a>
						.
					</p>
				</div>

				<button
					onClick={handleSubmit}
					className="mt-6 w-full bg-green-600 text-white font-semibold py-4 rounded hover:bg-green-700 transition duration-200"
				>
					Xác nhận đặt hàng
				</button>
			</div>

			{/* Tổng đơn hàng */}
			<div className="space-y-6">
				<h2 className="text-xl font-semibold">Tổng đơn hàng</h2>
				<div className="border rounded p-4 space-y-2 bg-gray-50">
					{cart.map((item) => (
						<p key={item.id}>
							{item.name} x {item.quantity} :{' '}
							<strong>
								{(item.price * item.quantity).toLocaleString()}đ
							</strong>
						</p>
					))}
				</div>

				<div className="border rounded p-4 space-y-2 bg-gray-50 text-right">
					<p>
						Tổng giá trị đơn:{' '}
						<strong>{total.toLocaleString()}đ</strong>
					</p>
					<p>
						Phí giao hàng: <strong>25,000đ</strong>
					</p>
					<hr />
					<p className="text-lg font-bold">
						Tổng thanh toán:{' '}
						<span className="text-red-600">
							{(total + 25000).toLocaleString()}đ
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
