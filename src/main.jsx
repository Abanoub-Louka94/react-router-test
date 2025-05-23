import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Home from "./pages/homPage/HomPage";
import Products from "./pages/productsPage/Products";
import About from "./pages/aboutPage/About";
import CosmeticPage from "./pages/cosmetic product page/CosmeticProductPage.jsx";
import ElectronicPage from "./pages/electronic product page/ElectronicProductPage.jsx";
import FoodPage from "./pages/food product page/FoodProductPage.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="homepage" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="about" element={<About />} />
			<Route path="foodProdcut" element={<FoodPage />} />
			<Route path="electronicProdcut" element={<ElectronicPage />} />
			<Route path="cosmaticProdcut" element={<CosmeticPage />} />
		</Routes>
	</BrowserRouter>
);
