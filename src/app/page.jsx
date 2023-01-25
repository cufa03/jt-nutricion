// import './globals.css';
import Image from 'next/image';
import homePicture from './images/home.jpg';

export default function Home() {
	return (
		<main className="bg-gray-400 h-screen pt-[50px]">
			<div>
				<Image
					src={homePicture}
					alt="imagen de comida saludable"
					className="w-full h-fit"
				/>
			</div>
			<div>
				<h1>Pagina principal de nutricion</h1>
			</div>
		</main>
	);
}
