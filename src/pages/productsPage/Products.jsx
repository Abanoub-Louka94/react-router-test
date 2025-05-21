import { Link } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import CosmeticProduct from "../../components/products/cosmetic product/CosmeticProduct";
import ElelctronicProduct from "../../components/products/electronic product/ElectronicProduct";
import FoodProduct from "../../components/products/electronic product/ElectronicProduct";

export default function Products() {
	return (
		<main className="page">
			<section className="container">
				<Navbar />
				<section className="products">
					<ul className="prducts-container">
						<li>
							<Link to="cosmatic-prodcut">
								<CosmeticProduct />
							</Link>
						</li>
						<li>
							<Link to="electronic-prodcut">
								<ElelctronicProduct />
							</Link>
						</li>
						<li>
							<Link to="food-prodcut">
								<FoodProduct />
							</Link>
						</li>
					</ul>
				</section>
			</section>
		</main>
	);
}
