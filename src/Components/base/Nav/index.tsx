import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import { navigation } from '../../../const';
import { classNames } from '../../../util';
import styles from './styles.module.css';
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTiktok,
	BiSolidDashboard,
} from 'react-icons/bi';
import React, { useEffect, useState } from 'react';

interface IconButtonProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	customColor?: string;
}

interface IProps {
	toggleCollapsed?: () => void;
	collapsed?: boolean;
}

const NavBar = (props: IProps) => {
	const { toggleCollapsed, collapsed } = props;
	let oldScrollY = 0;

	const [direction, setDirection] = useState('up');
	const [hiddenNav, setHiddenNav] = useState(false);
	const [hiddenSubNav, setHiddenSubNav] = useState(true);
	const [isDisplay, setIsDisplay] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem('authToken') && localStorage.getItem('user')
	);

	const controlDirection = () => {
		if (window.scrollY > oldScrollY) {
			setDirection('down');
		} else {
			setDirection('up');
		}
		oldScrollY = window.scrollY;
	};

	const listenScrollEvent = () => {
		if (collapsed) {
			setIsDisplay(true);
		} else {
			setIsDisplay(false);
		}

		if (window.scrollY > 80) {
			if (isDisplay && !hiddenNav) {
				setHiddenNav(false);
				setHiddenSubNav(true);
				return;
			}
			if (isDisplay && !hiddenSubNav) {
				setHiddenNav(true);
				setHiddenSubNav(false);
				return;
			}
			setHiddenNav(true);
			setHiddenSubNav(true);
		}
		if (window.scrollY < 1) {
			setHiddenNav(false);
			setHiddenSubNav(true);
			return;
		}

		if (window.scrollY > 80 && direction === 'up') {
			setHiddenSubNav(false);
			return;
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	});
	useEffect(() => {
		window.addEventListener('scroll', controlDirection);
		return () => {
			window.removeEventListener('scroll', controlDirection);
		};
	}, []);

	const IconButton: React.FC<IconButtonProps> = ({ Icon, customColor }) => (
		<div className={styles.iconWrapper}>
			<Icon className={`${styles.icon}`} style={{ color: customColor }} />
			<Icon className={`${styles.iconWhite}`} />
		</div>
	);

	return (
		<>
			<div>
				<Disclosure
					as="nav"
					className={`${hiddenNav ? 'opacity-0' : 'opacity-1'} bg-white fixed top-0 left-0 w-full z-[1000] py-3 lg:py-6 transition-all duration-300 shadow-md `}
				>
					<div className="xl:px-16 max-w-screen-2xl mx-auto">
						<div className="relative flex h-12 items-center justify-between w-full px-10">
							<div className="absolute inset-y-0 left-0 items-center w-full lg:hidden">
								{/* Mobile menu button*/}
								<div className="flex justify-between items-center pr-10 pl-20 lg:px-20 w-full">
									<button className="text-black font-bold text-4xl ">
										<Link to="/">
											<img
												src={'/logo.png'}
												alt="logo"
												width={200}
												height={50}
												className="h-10 w-auto scale-[1.5] lg:scale-100 lg:h-32"
											/>
										</Link>
									</button>
									<DisclosureButton
										className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-all "
										onClick={toggleCollapsed}
									>
										<Bars3Icon
											aria-hidden="true"
											className={`${collapsed ? 'hidden' : 'block'} block h-8 w-8`}
										/>
										<XMarkIcon
											aria-hidden="true"
											className={`${collapsed ? 'block' : 'hidden'} block h-8 w-8`}
										/>
									</DisclosureButton>
								</div>
							</div>
							<div className="flex-1 basis-[80%] hidden lg:block">
								<div className="flex justify-center items-center">
									<div className="flex flex-shrink-0 items-center flex-1 basis-[30%]">
										<button className="text-black font-bold text-4xl ">
											<Link to="/">
												<img
													src={'/logo.png'}
													alt="logo"
													width={200}
													height={50}
													className="h-10 scale-[1.5] w-auto lg:scale-100 lg:h-32"
												/>
											</Link>
										</button>
									</div>
									<div className="flex-1 basis-[80%]">
										<div className={styles.itemList2}>
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													aria-current={
														item.current
															? 'page'
															: undefined
													}
													className={classNames(
														item.current
															? ' text-black'
															: ' hover:opacity-70',
														'rounded-md px-3 py-2 text-sm font-medium'
													)}
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="ml-6 justify-around flex-1 basis-[30%] hidden lg:block">
								<div className="flex items-center justify-center">
									<button className="px-5 py-2 rounded-xl bg-[#3E790A] text-white">
										Giỏ hàng
									</button>
									<a
										href="https://www.facebook.com/profile.php?id=61577276590314"
										target="_blank"
										className="inline-block mx-2 xl:mr-4"
									>
										<IconButton
											Icon={BiLogoFacebook}
											customColor="#333"
										/>
									</a>
									<a
										href="https://www.instagram.com/khangtinhan2605/ "
										className="inline-block mx-2 xl:mr-4"
									>
										<IconButton
											Icon={BiLogoInstagram}
											customColor="#333"
										/>
									</a>
									<a
										href="https://www.tiktok.com/@user734347781176129?lang=en"
										className="inline-block mx-2 xl:mr-4"
									>
										<IconButton
											Icon={BiLogoTiktok}
											customColor="#333"
										/>
									</a>

									{isLoggedIn && (
										<Link to="/admin">
											<IconButton
												Icon={BiSolidDashboard}
												customColor="#333"
											/>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</Disclosure>
				<Disclosure
					as="nav"
					className={`${hiddenSubNav ? 'opacity-0' : 'opacity-1'} bg-white fixed top-0 left-0 w-full z-[1000] py-3 lg:py-6 transition-all duration-300 shadow-md `}
				>
					<div className="xl:px-16 max-w-screen-2xl mx-auto">
						<div className="relative flex h-12 items-center justify-between w-full px-10">
							<div className="absolute inset-y-0 left-0 items-center w-full lg:hidden">
								{/* Mobile menu button*/}
								<div className="flex justify-between items-center pr-10 pl-20 lg:px-20 w-full">
									<button className="text-black font-bold text-4xl ">
										<Link to="/">
											<img
												src={'/logo.png'}
												alt="logo"
												width={200}
												height={50}
												className="h-10 w-auto scale-[1.5] lg:scale-100 lg:w-32"
											/>
										</Link>
									</button>
									<DisclosureButton
										className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-all "
										onClick={toggleCollapsed}
									>
										<Bars3Icon
											aria-hidden="true"
											className={`${collapsed ? 'hidden' : 'block'} block h-8 w-8`}
										/>
										<XMarkIcon
											aria-hidden="true"
											className={`${collapsed ? 'block' : 'hidden'} block h-8 w-8`}
										/>
									</DisclosureButton>
								</div>
							</div>
							<div className="flex-1 basis-[80%] hidden lg:block">
								<div className="flex justify-center items-center">
									<div className="flex flex-shrink-0 items-center flex-1 basis-[30%]">
										<button className="text-black font-bold text-4xl ">
											<Link to="/">
												<img
													src={'/logo.png'}
													alt="logo"
													width={200}
													height={50}
													className="h-10 scale-[1.5] w-auto lg:scale-100 lg:h-32"
												/>
											</Link>
										</button>
									</div>
									<div className="flex-1 basis-[80%]">
										<div className={styles.itemList2}>
											{navigation.map((item) => (
												<Link
													key={item.name}
													to={item.href}
													aria-current={
														item.current
															? 'page'
															: undefined
													}
													className={classNames(
														item.current
															? ' text-black'
															: ' hover:opacity-70',
														'rounded-md px-3 py-2 text-sm font-medium'
													)}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="ml-6 justify-around flex-1 basis-[30%] hidden lg:block">
								<div className="flex items-center justify-center">
									<button className="px-5 py-2 rounded-xl bg-[#3E790A] text-white">
										Giỏ hàng
									</button>
									<a
										href="https://www.facebook.com/profile.php?id=61577276590314"
										target="_blank"
										className="inline-block mx-2 xl:mr-4"
									>
										<IconButton
											Icon={BiLogoFacebook}
											customColor="#333"
										/>
									</a>
									<a
										href="https://www.instagram.com/khangtinhan2605/ "
										className="inline-block mx-2 xl:mr-4"
									>
										<IconButton
											Icon={BiLogoInstagram}
											customColor="#333"
										/>
									</a>
									<a
										href="https://www.tiktok.com/@user734347781176129?lang=en"
										className="inline-block mx-2 xl:mr-4"
									>
										<IconButton
											Icon={BiLogoTiktok}
											customColor="#333"
										/>
									</a>

									{isLoggedIn && (
										<Link to="/admin">
											<IconButton
												Icon={BiSolidDashboard}
												customColor="#333"
											/>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</Disclosure>
				<div
					className={` ${collapsed && styles.slideDown} lg:hidden z-10`}
				>
					<div
						className={`${styles.slideDown} ${collapsed ? 'block' : 'hidden'}`}
					>
						<div
							className={`flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center justify-center items-center`}
						>
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									aria-current={
										item.current ? 'page' : undefined
									}
									className="text-white px-5 py-[6px] text-xs"
								>
									{item.name}
								</Link>
							))}

							<div className="bg-white h-[1px] w-[15vw] my-10"></div>
							<div>
								<a
									href="https://www.facebook.com/profile.php?id=61577276590314"
									target="_blank"
									className="inline-block mx-2 xl:mr-4"
								>
									<IconButton
										Icon={BiLogoFacebook}
										customColor="#333"
									/>
								</a>
								<a
									href="https://www.instagram.com/khangtinhan2605/ "
									className="inline-block mx-2 xl:mr-4"
								>
									<IconButton
										Icon={BiLogoInstagram}
										customColor="#333"
									/>
								</a>
								<a
									href="https://www.tiktok.com/@user734347781176129?lang=en"
									className="inline-block mx-2 xl:mr-4"
								>
									<IconButton
										Icon={BiLogoTiktok}
										customColor="#333"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
