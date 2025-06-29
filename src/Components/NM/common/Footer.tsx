import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from '../data/contact';
import {
	faMapLocation,
	faHome,
	faMapMarkerAlt,
	faPhoneAlt,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const elements = [
	{
		title: 'Đặt hàng và hỗ trợ',
		subTitle: [
			{
				name: 'Hỏi đáp',
				link: '',
			},
			{
				name: 'Hướng dẫn mua hàng',
				link: '',
			},
			{
				name: 'Chính sách đổi trả và hoàn tiền',
				link: '',
			},
			{
				name: 'Chính sách bảo mật',
				link: '',
			},
			{
				name: 'Liên hệ với chúng tôi',
				link: '',
			},
		],
	},
	{
		title: 'Shop',
		subTitle: [
			{
				name: 'Tinh bột kháng',
				link: '',
			},
			{
				name: 'Trà bí thơm',
				link: '',
			},
		],
	},
	{
		title: 'Về Kháng Tinh An',
		subTitle: [
			{
				name: 'Câu chuyện thương hiệu',
				link: '',
			},
			{
				name: 'Giá trị cốt lõi',
				link: '',
			},
			{
				name: 'Gặp gỡ người làm nên sản phẩm',
				link: '',
			},
		],
	},
];

const elementContact = [
	{
		icon: faHome,
		des: 'Trụ sở Bắc Kạn',
	},
	{
		icon: faMapMarkerAlt,
		des: 'Số 150 tổ 12, Sông Cầu, TP Bắc Kạn, Tỉnh Bắc Kạn',
	},
	{
		icon: faPhoneAlt,
		des: '0918 755 632',
	},
	{
		icon: faEnvelope,
		des: 'khangtinhan.cskh@gmail.com',
	},
];

function Footer() {
	return (
		<section className="bg-[#317337] text-white py-16 montserrat-font md:px-32 px-10 z-10">
			<div className="grid lg:grid-cols-7 grid-cols-2 gap-y-10 gap-x-24">
				{elements.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-4 lg:col-span-2"
					>
						<div className="font-semibold dancing-font text-4xl">
							{item.title}
						</div>
						<div className="flex flex-col gap-2">
							{item.subTitle.map((sub, index) => (
								<div key={index} className="">
									<a href={sub.link}>{sub.name}</a>
								</div>
							))}
						</div>
					</div>
				))}
				<div className="flex flex-col gap-2 col-span-1">
					<span className="font-semibold dancing-font text-4xl mb-2">
						Mạng xã hội
					</span>
					{contact.map((item, index) => (
						<div key={index} className="flex gap-4 items-center">
							<img
								src={item.image}
								alt="akjsnjkcnasc"
								className="size-6 bg-white rounded-full"
							/>
							<a href={item.link}>{item.name}</a>
						</div>
					))}
				</div>
			</div>
			<div className="bg-white text-[#317337] my-8 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 text-xs font-medium items-center rounded-full py-2 place-items-center">
				<div className="flex items-center gap-4">
					<img
						src="/logo.png"
						alt="logo"
						className="w-12 scale-150"
					/>
					<span className="border-l-3 border-[#317337] px-4 font-bold py-4">
						Thông tin liên hệ
					</span>
				</div>
				<div className="">
					<strong>Hotline:</strong> 0918 755 632
				</div>
				<div className="">
					<strong>Email:</strong> khangtinhan.cskh@gmail.com
				</div>
				<div className="flex gap-2 items-center">
					<FontAwesomeIcon icon={faMapLocation} />
					<strong>Hướng dẫn chỉ đường</strong>
				</div>
			</div>
			<ContactInfo />
		</section>
	);
}

export default Footer;

function ContactInfo() {
	return (
		<section className="flex justify-center md:flex-row flex-col items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
				<div className="flex flex-col gap-3">
					{elementContact.slice(0, 2).map((item, index) => (
						<div key={index} className="flex items-center gap-3">
							<FontAwesomeIcon
								icon={item.icon}
								className="w-5 h-5 text-white"
							/>
							<span>{item.des}</span>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-3 md:ms-24">
					{elementContact.slice(2).map((item, index) => (
						<div key={index} className="flex items-center gap-3">
							<FontAwesomeIcon
								icon={item.icon}
								className="w-5 h-5 text-white"
							/>
							<span>{item.des}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
