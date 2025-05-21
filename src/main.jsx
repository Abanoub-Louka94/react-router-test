import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/homPage/HomPage";
import Products from "./pages/productsPage/Products";
import About from "./pages/aboutPage/About";
import CosmeticProduct from "./components/products/cosmetic product/CosmeticProduct.jsx";
import FoodProduct from "./components/products/food product/FoodProduct.jsx";
import ElelctronicProduct from "./components/products/electronic product/ElectronicProduct.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route path="homepage" element={<Home />} />
			<Route path="products" element={<Products />}>
				<Route path="food-prodcut" element={<FoodProduct />} />
				<Route path="electronic-prodcut" element={<ElelctronicProduct />} />
				<Route path="cosmatic-prodcut" element={<CosmeticProduct />} />
			</Route>
			<Route path="about" element={<About />} />
			<Route path="/" element={<App />} />
		</Routes>
	</BrowserRouter>
);
