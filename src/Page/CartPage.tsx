import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // chỉnh path nếu khác

const CartPage: React.FC = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = Math.round(total * 0.0741);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 min-h-screen">
      {/* LEFT - Product Info */}
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-bold mb-8">GIỎ HÀNG</h2>

        {cart.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 border-b pb-6 mb-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover border"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <button className="text-xl font-bold">&times;</button>
                </div>

                <div className="text-sm text-gray-700 mt-2 space-y-1">
                  <p>Đơn giá: {item.price.toLocaleString()} VND</p>
                  <p>Số lượng: {item.quantity}</p>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="font-bold ml-auto sm:ml-0">
                    TỔNG: {(item.price * item.quantity).toLocaleString()} VND
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT - Summary */}
      <div className="bg-[#F2E6D4] p-6 rounded space-y-4 h-fit">
        <h4 className="font-bold text-lg">
          TỔNG ĐƠN HÀNG | {cart.length} SẢN PHẨM
        </h4>

        <div className="flex justify-between text-sm text-gray-800">
          <p>Tổng cộng</p>
          <p>{total.toLocaleString()} VND</p>
        </div>

        <div className="flex justify-between font-bold text-base">
          <p>TỔNG</p>
          <p>{total.toLocaleString()} VND</p>
        </div>

        <p className="text-xs text-gray-500">
          Đã bao gồm thuế giá trị gia tăng {vat.toLocaleString()} VND
        </p>

        <div className="font-bold text-base border-t pt-2">
          TỔNG ĐƠN ĐẶT HÀNG: {total.toLocaleString()} VND
        </div>

        <hr />

        <div className="text-sm flex justify-between items-center cursor-pointer">
          <span>🪙 Phiếu giảm giá</span>
          <span>➔</span>
        </div>

        <div className="text-sm flex justify-between items-center cursor-pointer">
          <span>🎁 Tùy chọn quà tặng</span>
          <span>➔</span>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          Miễn phí giao hàng áp dụng cho đơn hàng giao tận nơi từ
          <b> 500.000VND </b>
          và tất cả các đơn nhận tại cửa hàng (Click & Collect).
        </p>

        <Link to={cart.length === 0 ? "#" : "/thanh-toan"}>
          <button
            className={`w-full py-3 rounded font-semibold transition ${
              cart.length === 0
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
            disabled={cart.length === 0}
          >
            THANH TOÁN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
