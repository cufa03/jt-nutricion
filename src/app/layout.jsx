import './globals.css';
import Navbar from '../../components/Navbar';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<Navbar />
				<div className="pepito">{children}</div>
			</body>
		</html>
	);
}
