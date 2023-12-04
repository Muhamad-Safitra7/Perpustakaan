import "./css/daftar.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom/dist"
import { SITE_URL } from "../utils/env"
import { Cookies } from "react-cookie"
import axios from "axios"
import Helmet from "react-helmet"

export default function Masuk() {
	const cookies = new Cookies()
	const navigate = useNavigate()
	const [wrongUser, setWrongUser] = useState("")
	const [wrongPass, setWrongPass] = useState("")

	useEffect(() => {
		if (cookies.get("auth-login")) {
			navigate("/")
		}
	}, [])

	const [values, setValues] = useState({
		username: "",
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
		setWrongUser("")
		setWrongPass("")
		axios
			.post(`${SITE_URL}/api/masuk`, values)
			.then((res) => {
				if (res.data.wrongUser) {
					const wrong = res.data.wrongUser
					setWrongUser(wrong)
					return
				} else if (res.data.wrongPass) {
					const wrong = res.data.wrongPass
					setWrongPass(wrong)
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
		<main id="masuk" style={{ backgroundColor: "#f0f0f0" }}>
			<Helmet>
				<title>Masuk | Perpustakaan.</title>
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
				<div style={{ width: '60%' }}>
					<div style={{
						display: "flex",
						height: "92vh",
						alignItems: "center",
						justifyContent: "center",
						margin: '30px auto',
						width: '70%'
					}}>
						<div className="card-body " style={{ width: "28rem" }} >
							<h3 className="mb-1 fw-bold">Masuk</h3>
							<br />
							{wrongUser || wrongPass ? (
								<div id="wrong" className="alert alert-danger mb-4">
									<p>{wrongUser || wrongPass}</p>
								</div>
							) : (
								<div></div>
							)}

							<div className="d-flex flex-column gap-4">
								<form onSubmit={handleSubmit} className="form-outline d-flex flex-column gap-2">
									<br />
									<p>Username</p>
									<input
										onChange={handleInput}
										type="text"
										name="username"
										id="username"
										className={`form-control ${wrongUser ? "border-danger text-danger" : ""
											}`}
										placeholder="Username/email"
										required
									/>
									<br />
									<p>Password</p>
									<input
										onChange={handleInput}
										type="password"
										name="password"
										id="password"
										className={`form-control ${wrongPass ? "border-danger text-danger" : ""
											}`}
										placeholder="Password"
										required
									/>
									<br />
									<button type="submit" className="btn btn-primary mt-3">
										Masuk
									</button>
								</form>

								<p className="text-center" style={{ marginBottom: "-20px" }}>
									---Atau---
								</p>
								<button className="btn btn-primary mt-3" style={{ backgroundColor: "orange" }}>
									<Link to="/daftar">Daftar</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
