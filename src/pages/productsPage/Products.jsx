import { Link, Outlet } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import CosmeticProduct from "../../components/products/cosmetic product/CosmeticProduct";
import ElelctronicProduct from "../../components/products/electronic product/ElectronicProduct";
import FoodProduct from "../../components/products/food product/FoodProduct";

export default function Products() {
	return (
		<main className="page">
			<section className="container">
				<Navbar />
				<section className="products">
					<ul className="prducts-container">
						<li>
							<Link to="/cosmaticProdcut">
								<CosmeticProduct />
							</Link>
						</li>
						<li>
							<Link to="/foodProdcut">
								<FoodProduct />
							</Link>
						</li>
						<li>
							<Link to="/electronicProdcut">
								<ElelctronicProduct />
							</Link>
						</li>
					</ul>
				</section>
			</section>
		</main>
	);
}
