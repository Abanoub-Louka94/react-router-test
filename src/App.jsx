import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/homPage/HomPage";
import Products from "./pages/productsPage/Products";
import About from "./pages/aboutPage/About";
import CosmeticPage from "./pages/cosmetic product page/CosmeticProductPage.jsx";
import ElectronicPage from "./pages/electronic product page/ElectronicProductPage.jsx";
import FoodPage from "./pages/food product page/FoodProductPage.jsx";

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="foodProdcut" element={<FoodPage />} />
			<Route path="electronicProdcut" element={<ElectronicPage />} />
			<Route path="cosmaticProdcut" element={<CosmeticPage />} />
			<Route path="about" element={<About />} />
		</Routes>
	);
}

export default App;
