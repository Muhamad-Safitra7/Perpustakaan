import { useState } from "react"
import TentangProgram from "./ContentTentang"
import KurikulumProgram from "./ContentKurikulum"
import AlatProgram from "./ContentAlat"

export default function NavProgram() {
	const [tab, setTab] = useState(0)

	const handleTabChange = (tab) => {
		setTab(tab)
	}
	return (
		<section id="content-detail">
			<div id="nav-program" className="d-flex">
				<div
					className={`nav-item ${tab === 0 ? "active" : ""}`}
					onClick={() => handleTabChange(0)}>
					Tentang
				</div>
				<div
					className={`nav-item ${tab === 1 ? "active" : ""}`}
					onClick={() => handleTabChange(1)}>
					Kurikulum
				</div>
				<div
					className={`nav-item ${tab === 2 ? "active" : ""}`}
					onClick={() => handleTabChange(2)}>
					Alat
				</div>
			</div>
			<div id="content-program">
				{tab === 0 && <TentangProgram />}
				{tab === 1 && <KurikulumProgram />}
				{tab === 2 && <AlatProgram />}
			</div>
		</section>
	)
}
