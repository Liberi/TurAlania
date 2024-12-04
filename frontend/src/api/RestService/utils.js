export function getUrlParams(params) {
	let result;
	if (Array.isArray(params)) {
		result = parseArray(params, []);
	} else if (isObject(params)) {
		result = parseObject(params, []);
	}

	return (
		'?' +
		result
			.reduce((acc, value) => {
				const _v = pathWithValue(value);
				if (_v) {
					acc.push(_v);
				}
				return acc;
			}, [])
			.join('&')
	);
}

export function parseLink(link, data) {
	return link.replace(/{(.+?)}/gi, (_all, key) => data[key]);
}

function pathWithValue(value) {
	if (value.path.length !== 0) {
		let path =
			value.path[0] +
			value.path
				.slice(1)
				.map(item => {
					return `[${item}]`;
				})
				.join('');
		return `${path}=${value.value}`;
	}
}

function isObject(value) {
	return value !== null && typeof value === 'object';
}

function parseObject(values, path = []) {
	return Object.entries(values).reduce((result, [key, value]) => {
		if (value === null || typeof value === 'undefined') {
			return result;
		} else if (Array.isArray(value)) {
			return [...result, ...parseArray(value, [...path, key])];
		} else if (isObject(value)) {
			return [...result, ...parseObject(value, [...path, key])];
		} else {
			return [
				...result,
				{
					value,
					path: [...path, key],
				},
			];
		}
	}, []);
}

function parseArray(values, path) {
	return values
		.filter(value => value !== null && typeof value !== 'undefined')
		.reduce((result, value, index) => {
			if (Array.isArray(value)) {
				return [...result, ...parseArray(value, [...path, index])];
			} else if (isObject(value)) {
				return [...result, ...parseObject(value, [...path, index])];
			} else {
				return [
					...result,
					{
						value,
						path: [...path, index],
					},
				];
			}
		}, []);
}
