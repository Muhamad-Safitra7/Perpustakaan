export default function GenerateOrderId(paket) {
	const timestamp = new Date().getTime()
	const random = Math.floor(Math.random() * 90 + 10)
	return `BC-${paket}-${timestamp}${random}`
}
