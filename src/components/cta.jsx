import { Link } from "react-router-dom"

export default function Cta() {
	return (
		<section id="cta">
			<div className="container text-center">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<h2 className="mb-5 w-lg-50">
							Buka Kesuksesan Finansial Anda Sekarang Bersama Bijakcuan
						</h2>
						<Link to={"/program"} className="btn btn-primary">
							Gabung Sekarang
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
