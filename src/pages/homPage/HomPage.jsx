import Navbar from "../../components/navbar/Navbar";

export default function Home() {
	return (
		<main className="page">
			<section className="container">
				<Navbar />
				<section className="home">
					<h1>this is home page</h1>
				</section>
			</section>
		</main>
	);
}
