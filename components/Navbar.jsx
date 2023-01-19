import Link from 'next/link';

const Navbar = () => {
	const links = [
		{ label: 'Index', route: '/' },
		{ label: 'Home', route: '/homepage' },
		{ label: 'About', route: '/about' },
		{ label: 'Contact', route: '/contact' },
	];

	return (
		<div>
			<nav>
				<ul>
					{links.map((link) => {
						return (
							<li key={link.route}>
								<Link href={link.route}>{link.label}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
