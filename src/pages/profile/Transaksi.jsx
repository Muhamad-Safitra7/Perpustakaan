import "../css/transaksi.css"
export default function Transaksi() {
	return (
		<section id="transaksi">
			<div className="card container">
				<div className="card-body">
					<button type="button" className="btn btn-success rounded-5 disabled">
						Berhasil
					</button>

					<div className="container mt-3">
						<div className="d-flex justify-content-between w-100">
							<h4 className="text-left">Membership Bulanan</h4>
							<p className="text-right">Order ID #PAY-18123</p>
						</div>

						<div className="d-flex justify-content-between w-100">
							<p className="text-left">
								Total pembayaran: <b>Rp 74.227</b>
							</p>
							<p className="text-right">17 Sep 2023</p>
						</div>
					</div>
					<hr />

					<button type="button" className="btn btn-danger rounded-5 disabled">
						Dibatalkan
					</button>

					<div className="container mt-3">
						<div className="d-flex justify-content-between w-100">
							<h4 className="text-left">Membership Bulanan</h4>
							<p className="text-right">Order ID #PAY-18123</p>
						</div>

						<div className="d-flex justify-content-between w-100">
							<p className="text-left">
								Total pembayaran: <b>Rp 88.887</b>
							</p>
							<p className="text-right">16 Sep 2023</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}