import { Outlet } from "react-router";

export default function ProductPage() {
	return (
		<main className="page">
			<section className="container">
				<Navbar />
				<section className="products">
					<ul className="prducts-container">
						<Outlet />
					</ul>
				</section>
			</section>
		</main>
	);
}
