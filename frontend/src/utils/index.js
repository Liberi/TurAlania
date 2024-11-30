
export const debounce = delay => {
	let timeout;

	return cb => {
		clearTimeout(timeout);

		timeout = setTimeout(cb, delay);
	};
};

export const formatPhoneNumber = (login, oldLogin) => {
	const digits = login.replace(/\D/g, '');

	if (digits.length > 11) {
		return oldLogin;
	}
	if (digits.length === 11) {
		return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)} ${digits.slice(
			7,
			9,
		)} ${digits.slice(9)}`;
	}

	return login;
};

export const formatDateInput = input => {
	const digits = input.replace(/\D/g, '');
	let formatted = '';

	if (digits.length > 0) {
		formatted += digits.substr(0, 2);
	}
	if (digits.length > 2) {
		formatted += '.' + digits.substr(2, 2);
	}
	if (digits.length > 4) {
		formatted += '.' + digits.substr(4, 4);
	}

	return formatted;
};

// eslint-disable-next-line no-unused-vars
export const getUriFromPath = path => {
	/* if (!path || !API_URL) return;

	return {
		uri: `${API_URL}/${path}`,
	}; */
};

export const validate = (state, rules, setErrors) => {
	const keys = Object.keys(rules);
	let isValid = true;
	let firstField = '';

	for (const key of keys) {
		const res = rules[key].every(rule => {
			const result = rule(state[key], state);
			const isError = typeof result === 'string';

			setErrors(old => ({
				...old,
				[key]: isError ? result : '',
			}));

			return !isError;
		});

		if (!res) {
			isValid = res;
			if (!firstField) firstField = key;
		}
	}

	return { isValid, firstField };
};

export const validateRules = {
	isEmail(text) {
		return v => /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(v) || text;
	},
	isRusPhone(text) {
		return v => /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/.test(v) || text;
	},
	isDateFormat(text) {
		return v =>
			/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/.test(
				v,
			) || text;
	},
	isPasswordValid(text) {
		return v => /^.{6,}$/.test(v) || text;
	},
	isNotEmpty(text) {
		return v => !!v || text;
	},
	isArrayNotEmpty(text) {
		return v => !!v.length || text;
	},
	isOnlyLiterals(text) {
		return v => /^[а-яА-ЯёЁa-zA-Z- ]+$/g.test(v) || text;
	},
	isOnlyNumbers(text) {
		return v => /^\d+$/g.test(v) || text;
	},
	isCyrillic(text) {
		return v => /^[а-яё -]+$/i.test(v) || text;
	},
	minLength(text, length) {
		return v => v.length >= length || text;
	},
};
