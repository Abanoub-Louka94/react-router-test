import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/homPage/HomPage";
import Products from "./pages/productsPage/Products";
import About from "./pages/aboutPage/About";
import CosmeticPage from "./pages/cosmetic product page/CosmeticProduct.jsx";
import ElectronicPage from "./pages/electronic product page/ElectronicProduct.jsx";
import FoodPage from "./pages/food product page/FoodProduct.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route path="homepage" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="foodProdcut" element={<FoodPage />} />
			<Route path="electronicProdcut" element={<ElectronicPage />} />
			<Route path="cosmaticProdcut" element={<CosmeticPage />} />
			<Route path="about" element={<About />} />
			<Route path="/" element={<App />} />
		</Routes>
	</BrowserRouter>
);
