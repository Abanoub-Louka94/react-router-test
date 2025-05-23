import FoodProduct from "../../components/products/food product/FoodProduct";
import Navbar from "../../components/navbar/Navbar";
export default function FoodPage() {
	return (
		<main className="page">
			<section className="container">
				<Navbar />
				<section className="products">
					<FoodProduct />
				</section>
			</section>
		</main>
	);
}
