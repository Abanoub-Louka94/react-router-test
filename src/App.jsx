import "./App.css";
import Home from "./pages/homPage/HomPage";
import { Routes, Route } from "react-router";
import Products from "./pages/productsPage/Products";
import About from "./pages/aboutPage/About";
import CosmeticPage from "./pages/cosmetic product page/CosmeticProductPage.jsx";
import ElectronicPage from "./pages/electronic product page/ElectronicProductPage.jsx";
import FoodPage from "./pages/food product page/FoodProductPage.jsx";
function App() {
	return (
		<>
			<Routes>
				<Route path="homepage" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="about" element={<About />} />
				<Route path="foodProdcut" element={<FoodPage />} />
				<Route path="electronicProdcut" element={<ElectronicPage />} />
				<Route path="cosmaticProdcut" element={<CosmeticPage />} />
			</Routes>
		</>
	);
}

export default App;
