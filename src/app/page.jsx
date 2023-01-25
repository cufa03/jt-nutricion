// import './globals.css';
import Image from 'next/image';
import homePicture from './images/home.jpg';

export default function Home() {
	return (
		<main className="bg-gray-400 h-screen">
			<div className="">
				<div className="bg-black/20 z-2 w-full absolute top-[5.5em] h-screen"></div>
				<Image
					src={homePicture}
					alt="imagen de comida saludable"
					className="w-full h-fit z-1"
				/>
			</div>
			<div>
				<h1>Pagina principal de nutricion</h1>
			</div>
		</main>
	);
}
