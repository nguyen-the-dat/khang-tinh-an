import { useEffect, useState } from 'react';
import contact from '../data/contact';

const title = [
	'Về chúng tôi',
	'Sản phẩm',
	'Gặp gỡ người tạo nên sản phẩm',
	'Liên hệ chúng tôi',
];

function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 montserrat-font w-full z-50 transition-all duration-500 ${
				scrolled ? 'shadow-md translate-y-0' : ''
			} ${scrolled ? 'animate-slide-down' : ''}`}
		>
			<div className="flex justify-between items-center px-28 bg-white shadow-lg">
				<img src="/logo.png" alt="logo" className="w-24 scale-200" />
				<div className="font-medium text-base flex items-center gap-16">
					<div className="flex gap-24">
						{title.map((item) => (
							<a
								href="###"
								key={item}
								className="hover:text-[#302216] hover:duration-300 cursor-pointer"
							>
								{item}
							</a>
						))}
					</div>
					<button className=" py-2 px-6 rounded-xl cursor-pointer bg-[#3E790A] text-white font-medium hover:scale-105 hover:duration-300">
						Giỏ hàng
					</button>
					<div className="flex gap-6">
						{contact.map((item) => (
							<a href={item.link}>
								<img
									src={item.image}
									className="size-10 rounded-full object-cover"
									alt={item.name}
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
