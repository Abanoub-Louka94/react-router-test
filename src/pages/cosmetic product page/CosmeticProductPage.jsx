import CosmeticProduct from "../../components/products/cosmetic product/CosmeticProduct";
import Navbar from "../../components/navbar/Navbar";
export default function CosmeticPage() {
	return (
		<main className="page">
			<section className="container">
				<Navbar />
				<section className="products">
					<CosmeticProduct />
				</section>
			</section>
		</main>
	);
}
