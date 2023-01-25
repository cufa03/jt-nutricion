import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'src/app/images/nutri-logo.png';

const Navbar = () => {
	const links = [
		{ label: 'INICIO', route: '/' },
		{ label: 'HOME', route: '/homepage' },
		{ label: 'ABOUT', route: '/about' },
		{ label: 'CONTACT', route: '/contact' },
	];
	return (
		<div className="relative w-full">
			<div className=" bg-orange-500 h-[5.5em] ">
				<nav className="absolute bg-green-200  h-[4em] w-[80%] top-12 left-0 right-0 mx-auto flex items-center justify-between px-10 overflow-hidden">
					<div className="overflow-hidden">
						{/* <Image
							src={logo}
							alt="dibujo del logo del nutricionista"
							width={120}
							height={120}
							className="mb-1"
						/> */}
						<h1 className="font-bold">JT Nutricion</h1>
					</div>

					<div>
						<ul className="flex justify-around w-fit ">
							{links.map((link) => (
								<li className="mx-8" key={link.route}>
									<Link href={link.route}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
