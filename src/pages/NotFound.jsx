import { Link } from "react-router-dom"
import Helmet from "react-helmet"
import "./css/pembayaran.css"

export default function NotFound() {
	return (
		<main id="notFound">
			<Helmet>
				<title>Halaman Tidak Ditemukan | Bijakcuan.</title>
			</Helmet>
			<div className="container align-items-center d-flex justify-content-center">
				<div className="container-lg text-center">
					<h1 className="mb-4">404</h1>
					<p className="mb-5 w-75 mx-auto">Maaf, halaman tidak ditemukan</p>
					<Link href={"/beranda"} className="btn btn-primary">
						Kembali ke Beranda
					</Link>
				</div>
			</div>
		</main>
	)
}
