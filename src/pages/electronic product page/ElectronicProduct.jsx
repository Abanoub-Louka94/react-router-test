import ElelctronicProduct from "../../components/products/electronic product/ElectronicProduct";
import Navbar from "../../components/navbar/Navbar";
export default function ElectronicProductPage() {
	return (
		<main className="page">
			<section className="container">
				<Navbar />
				<section className="products">
					<ElelctronicProduct />
				</section>
			</section>
		</main>
	);
}
