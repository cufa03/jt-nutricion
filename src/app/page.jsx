// import './globals.css';
import Image from 'next/image';
import homePictureLarge from './images/home.jpg';
import homePictureMedium from './images/home-m.jpg';

export default function Home() {
	return (
		<main className="bg-gray-400 h-screen">
			<div className="h-[90vh] overflow-hidden">
				<div className="bg-black/20 z-2 w-full absolute top-[5.5em] h-screen"></div>

				<div className="">
					<div className="z-19 absolute w-[40%] right-16 top-[45%]">
						<div className="flex">
							<p className="tracking-[3px] mb-3 font-semibold">
								Juan Ignacio Tavares
							</p>
							<p className="mx-2">|</p>
							<p className="tracking-[3px] mb-3 ">Dedicacion y Compromiso</p>
						</div>
						<div>
							<h1 className="font-extrabold text-5xl tracking-[4px]">
								Nutricionista deportivo
							</h1>
						</div>
						<div className="border-t-4 border-t-orange-500 h-6 w-1/5 mt-5"></div>
						<div className="w-[80%]">
							<p className="font-bold text-lg">
								Planificación nutricional, programación de entrenamientos,
								mejora del rendimiento, preparación de competición, mejora de la
								salud, divulgación y docencia.
							</p>
						</div>
					</div>
					<Image
						src={homePictureMedium}
						alt="imagen de comida saludable"
						className="z-1 bg-cover h-[auto]"
					/>
				</div>
			</div>
			<div>
				<h1>Pagina principal de nutricion</h1>
			</div>
		</main>
	);
}
