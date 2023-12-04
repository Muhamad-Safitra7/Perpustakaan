import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Cookies } from "react-cookie"
import Pengaturan from "../profile/Pengaturan"
import KursusSaya from "../profile/KursusSaya"
import Transaksi from "../profile/Transaksi"
import "../css/profil.css"

export default function Profil() {
	const cookies = new Cookies()
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState("kursus-saya")

	const handleTabChange = (selectedTab) => {
		setActiveTab(selectedTab)
	}

	const handleLogout = () => {
		cookies.remove("auth-login", { path: "/" })
		navigate("/")
		window.location.reload()
	}

	return (
		<main id="profil">
			<div className="container pb-5 h-100">
				<div className="container mt-5 mb-5">
					<div className="row justify-content-evenly">
						<div className="col-lg-3">
							<div className="card mb-4">
								<div className="card-body text-center">
									<img
										src="assets/profil/user.png"
										alt="avatar"
										className="rounded-circle img-fluid"
										style={{ width: "100px" }}
									/>
									<p className="mt-2">Halo, Ani</p>
								</div>
								<hr className="mb-0" />
								<div className="sidebar">
									<Link
										to={"#kursus-saya"}
										onClick={() => handleTabChange("kursus-saya")}
										className={activeTab === "kursus-saya" ? "active" : ""}>
										Kursus Saya
									</Link>
									<Link
										to={"#transaksi"}
										onClick={() => handleTabChange("transaksi")}
										className={activeTab === "transaksi" ? "active" : ""}>
										Transaksi
									</Link>
									<Link
										to="/bantuan"
										className={activeTab === "pusat-bantuan" ? "active" : ""}>
										Pusat Bantuan
									</Link>
									<Link
										to={"#pengaturan"}
										onClick={() => handleTabChange("pengaturan")}
										className={activeTab === "pengaturan" ? "active" : ""}>
										Pengaturan
									</Link>
									<Link onClick={handleLogout} className="mb-3">
										Keluar
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
							{activeTab === "pengaturan" ? (
								<div>
									<h5 className="mb-4">Profil Saya</h5>
									<Pengaturan />
								</div>
							) : activeTab === "kursus-saya" ? (
								<div>
									<h5 className="mb-4">Kursus Saya</h5>
									<KursusSaya></KursusSaya>
								</div>
							) : activeTab === "transaksi" ? (
								<div>
									<h5 className="mb-4">Transaksi</h5>
									<Transaksi></Transaksi>
								</div>
							) : activeTab === "pusat-bantuan" ? (
								<div>
									<h5 className="mb-4">Pusat Bantuan</h5>
								</div>
							) : activeTab === "keluar" ? (
								<div>
									<h5 className="mb-4">Keluar</h5>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
