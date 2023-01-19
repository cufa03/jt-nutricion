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
		<div className="relative w-full">
			<div className=" bg-orange-500 h-[5em]"></div>
			<nav className="absolute bg-gray-400 h-[4em] w-[90%] top-12 left-0 right-0 mx-auto">
				<ul className="flex items-end">
					{links.map((link) => (
						<li className="mx-1" key={link.route}>
							<Link href={link.route}>{link.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
