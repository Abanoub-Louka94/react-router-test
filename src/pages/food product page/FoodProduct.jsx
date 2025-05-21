import { Outlet } from "react-router";

export default function FoodPage() {
	return (
		<main className="page">
			<section className="container">
				<Navbar />
				<section className="products">
					<section className="prducts-container">
						<Outlet />
					</section>
				</section>
			</section>
		</main>
	);
}
