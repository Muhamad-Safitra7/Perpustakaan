import "./css/daftar.css"
import { Link } from "react-router-dom"
import { Cookies } from "react-cookie"
import { SITE_URL } from "../utils/env"
import { useNavigate } from "react-router-dom/dist"
import { useState, useEffect } from "react"
import Helmet from "react-helmet"
import axios from "axios"

export default function Daftar() {
	const cookies = new Cookies()
	const navigate = useNavigate()
	const [failed, setFailed] = useState("")

	useEffect(() => {
		if (cookies.get("auth-login")) {
			navigate("/")
		}
	}, [])

	const [values, setValues] = useState({
		username: "",
		name: "",
		email: "",
		password: "",
	})

	const handleInput = (event) => {
		setValues((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setFailed("")
		axios
			.post(`${SITE_URL}/api/daftar`, values)
			.then((res) => {
				if (res.data.failed) {
					const failed = res.data.failed
					setFailed(failed)
					return
				} else {
					const token = res.data.token
					cookies.set("auth-login", token, { secure: true })
					navigate("/")
					window.location.reload()
				}
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}

	return (
		<main id="daftar">
			<Helmet>
				<title>Daftar | Bijakcuan.</title>
			</Helmet>
			<div style={{ display: 'flex', justifyContent: 'space-between', }}>
				<div style={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: 'blue', width: '40%' }}>
					<img
						src="/assets/logo.jpg"
						alt="Logo BijakCuan"
						style={{
							borderRadius: "20rem",
							width: "200px",
						}}
						className="mb-4"
					/></div>
				<div style={{ width: '60%', backgroundColor: "#f0f0f0" }}>
					<div style={{
						display: "flex",
						height: "92vh",
						alignItems: "center",
						justifyContent: "center",
						margin: '30px auto',
						width: '70%'
					}}>
						<div className="card-body " style={{ width: "28rem" }} >
							<h3 className="mb-1 fw-bold">Daftar</h3>
							{failed && (
								<div id="wrong" className="alert alert-danger mb-4">
									<p>{failed}</p>
								</div>
							)}
							<div className="d-flex flex-column gap-4">
								<form
									onSubmit={handleSubmit}
									className="form-outline d-flex flex-column gap-2">
									<br />
									<p>Nama Lengkap</p>
									<input
										onChange={handleInput}
										type="text"
										name="name"
										id="name"
										className="form-control"
										placeholder="Nama (Maks. 50 Karakter)"
										required
									/>
									<br />
									<p>Username</p>
									<input
										onChange={handleInput}
										type="text"
										name="username"
										id="username"
										className="form-control"
										placeholder="Username"
										required
									/>
									<br />
									<p>Alamat Email</p>
									<input
										onChange={handleInput}
										type="email"
										name="email"
										id="email"
										className="form-control"
										placeholder="Alamat Email"
										required
									/>
									<br />
									<p>Password</p>
									<input
										onChange={handleInput}
										type="password"
										name="password"
										id="password"
										className="form-control"
										placeholder="Password"
										required
									/>
									<br />
									<button type="submit" className="btn btn-primary mt-3">
										Daftar
									</button>
								</form>
								<p className="text-center" style={{ marginBottom: "-20px" }}>
									---Atau---
								</p>
								<button className="btn btn-primary mt-3" style={{ backgroundColor: "orange" }}>
									<Link to="/masuk">Masuk Sekarang</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
