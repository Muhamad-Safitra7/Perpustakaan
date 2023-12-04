/* eslint-disable no-undef */
const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const bcrypt = require("bcrypt")
const fs = require("fs")
const users = require("../src/data/users.json")

const app = express()
const PORT = 3001

const secretKey = require("crypto").randomBytes(32).toString("hex")

const checkPass = (pass, storedPass) => {
	return bcrypt.compareSync(pass, storedPass)
}

const encryptPass = (password) => {
	const saltRounds = 10
	const salt = bcrypt.genSaltSync(saltRounds)
	const hashedPassword = bcrypt.hashSync(password, salt)
	return hashedPassword
}

app.use(cors())
app.use(express.json())

app.post("/api/daftar", async (req, res) => {
	const { username, name, email, phone, password } = await req.body
	if (users.find((u) => u.username === username)) {
		return res.status(200).json({
			failed: "Akun sudah digunakan. Silahkan gunakan akun yang lain.",
		})
	} else {
		const newUser = {
			id: users.length + 1,
			username,
			name,
			email,
			phone,
			password: encryptPass(password),
		}
		users.push(newUser)

		fs.writeFile("src/data/users.json", JSON.stringify(users), (err) => {
			if (err) {
				console.error("Error writing to users.json", err)
			} else {
				console.log("User data saved successfully.")
			}
		})

		const token = jwt.sign(
			{
				id: newUser.id,
				username: newUser.username,
				name: newUser.name,
				email: newUser.email,
				phone: newUser.phone,
			},
			secretKey,
			{ expiresIn: "1h" }
		)
		res.json({ token })
	}
})

app.post("/api/masuk", async (req, res) => {
	const { username, password } = await req.body

	const user = users.find(
		(u) => u.username === username || u.email === username
	)

	if (!user) {
		return res.status(200).json({
			wrongUser: "Username yang Anda masukan salah",
		})
	} else if (user && checkPass(password, user.password)) {
		const token = jwt.sign(
			{
				id: user.id,
				username: user.username,
				name: user.name,
				email: user.email,
				phone: user.phone,
			},
			secretKey,
			{ expiresIn: "1h" }
		)
		res.json({ token })
	} else {
		res.status(200).json({
			wrongPass: "Password yang Anda masukan salah",
		})
	}
})

app.get("/", (req, res) => {
	res.send(`Server listening on port ${PORT}`)
})

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`)
})
