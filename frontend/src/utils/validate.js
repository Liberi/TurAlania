const validate = {
	isNumber: value => {
		if (typeof value === 'number' && !isNaN(value)) {
			return true;
		}
		if (typeof value === 'string' && !isNaN(Number(value))) {
			return true;
		}
		return false;
	},

	isDate: value => {
		if (!value) return false;

		const pattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
		if (!pattern.test(value)) return false;

		const [, day, month, year] = value.match(pattern);
		const date = new Date(year, month - 1, day);

		return (
			date.getDate() === parseInt(day) &&
			date.getMonth() === parseInt(month) - 1 &&
			date.getFullYear() === parseInt(year)
		);
	},

	isEmail: value => {
		const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return pattern.test(value);
	},

	isNotEmpty: value => {
		return (
			value !== null &&
			value !== undefined &&
			value.toString().trim() !== ''
		);
	},

	isLength: (value, min, max) => {
		if (!value) return false;
		const length = value.toString().length;
		return length >= min && length <= max;
	},
};

export default validate;
