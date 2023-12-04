import "./css/artikel.css"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import artikelData from "../data/artikelData.json"

export default function Artikel() {
	return (
		<main id="artikel">
			<Helmet>
				<title>Artikel | Perpustakaan.</title>
			</Helmet>

			<div className="container pt-5 pb-5">
				<h2 className="mb-4">Artikel Terbaru</h2>
				<div className="row">
					{artikelData.map((artikel) => (
						<div className="col-lg-4 col-md-6 m-3" key={artikel.id}>
							<div className="card">
								<img
									src={artikel.gambar}
									className="card-img-top"
									alt={`Artikel ${artikel.id}`}
								/>
								<div className="card-body">
									<h5>{artikel.judul}</h5>
									<p className="card-text mb-4">{artikel.deskripsi}</p>
								</div>
								<div className="card-footer">
									<Link
										to={`/detail/${artikel.id}`}
										className="btn btn-primary card-button w-100">
										Lihat Detail
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	)
}
