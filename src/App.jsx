import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Beranda from "./pages/Beranda"
import Profil from "./pages/profile/Profil"
import Masuk from "./pages/Masuk"
import Daftar from "./pages/Daftar"

import NotFound from "./pages/NotFound"

import Artikel from "./pages/Artikel"
import DetailArtikel from "./pages/DetailArtikel"

const MainLayout = ({ children }) => (
	<>
		<Navbar />
		{children}
		<Footer />
	</>
)

export default function App() {
	return (
		<BrowserRouter>
			<Helmet>
				<title>Perpustakaan </title>
			</Helmet>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<Beranda />
						</MainLayout>
					}
				/>
				
				<Route
					path="/artikel"
					element={
						<MainLayout>
							<Artikel />
						</MainLayout>
					}
				/>
				<Route
					path="/detail/:id"
					element={
						<MainLayout>
							<DetailArtikel />
						</MainLayout>
					}
				/>
				<Route
					path="*"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
				
				<Route path="/masuk" element={<Masuk />} />
				<Route path="/daftar" element={<Daftar />} />
			</Routes>
		</BrowserRouter>
	)
}
