export default (number) => {
	const format_number = new Intl.NumberFormat("id-ID");
	return format_number.format(number);
};
