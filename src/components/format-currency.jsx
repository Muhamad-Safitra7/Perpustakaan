export default function FormatCurrency(amount) {
	return `Rp ${new Intl.NumberFormat("id-ID").format(amount)}`
}
