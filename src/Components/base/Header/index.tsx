import NavBar from '../Nav';
import SubNavBar from '../SubNav';

interface IProps {
	type?: 'main' | 'sub';
	toggleCollapsed?: () => void;
	collapsed?: boolean;
}

const Header = (props: IProps) => {
	const { type = 'main', toggleCollapsed, collapsed } = props;
	return (
		<div>
			<div>
				{type === 'main' && (
					<NavBar
						toggleCollapsed={toggleCollapsed}
						collapsed={collapsed}
					/>
				)}
				{type === 'sub' && (
					<SubNavBar
						toggleCollapsed={toggleCollapsed}
						collapsed={collapsed}
					/>
				)}
			</div>
			{window.location.pathname !== '/process' &&
				window.location.pathname !== '/products' &&
				window.location.pathname !== '/products/id' &&
				window.location.pathname !== '/products/id1' && (
					<div className="flex justify-center mt-16">
						<img
							src={'/banner.jpg'}
							className="w-full object-cover"
						/>
					</div>
				)}
		</div>
	);
};

export default Header;
