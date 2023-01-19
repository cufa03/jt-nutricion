import React from 'react';
import Link from 'next/link';
const Navbar = () => {
	const links = [
		{ label: 'Index', route: '/' },
		{ label: 'Home', route: '/homepage' },
		{ label: 'About', route: '/about' },
		{ label: 'Contact', route: '/contact' },
	];
	return (
		<div className="relative">
			<div className=" bg-orange-400 h-[4rem]">texto de prueba</div>
			<nav className="bg-gray-500">
				<ul className="flex">
					{links.map((link) => (
						<li className="text-red-500 border-2 mx-1" key={link.route}>
							<Link href={link.route}>{link.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
