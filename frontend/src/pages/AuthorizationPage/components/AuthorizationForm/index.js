import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, MainButton } from '../../../../components';
import { validate, validateRules } from '../../../../utils';
import './styles.css';

const { isNotEmpty, isEmail, isPasswordValid } = validateRules;

const rules = {
	email: [isNotEmpty('Введите почту'), isEmail('Неверный формат почты')],
	password: [
		isNotEmpty('Введите пароль'),
		isPasswordValid('Пароль должен содержать минимум 6 символов'),
	],
};

const AuthorizationForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});

	const setData = (data, dataName) => {
		setErrors(old => ({ ...old, [dataName]: null }));
		setFormData(old => ({ ...old, [dataName]: data }));
	};

	const onSubmit = e => {
		e.preventDefault();
		const { isValid } = validate(formData, rules, setErrors);
		if (!isValid) return;

		setErrors({});
		setIsLoading(true);

		// TODO: Отправить запрос на авторизацию
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<form className={'authorizationForm'} onSubmit={onSubmit}>
			<Input
				type={'email'}
				name={'email'}
				id={'email'}
				placeholder={'Введите почту'}
				title={'Почта'}
				className={'inputAuthorization'}
				value={formData.email}
				onChange={e => setData(e.target.value, 'email')}
				error={errors.email}
				enabled={!isLoading}
			/>
			<Input
				type={'password'}
				name={'password'}
				id={'password'}
				placeholder={'Введите пароль'}
				title={'Пароль'}
				className={'inputAuthorization'}
				value={formData.password}
				onChange={e => setData(e.target.value, 'password')}
				error={errors.password}
				enabled={!isLoading}
			/>
			<div className={'registerBlock'}>
				<MainButton
					type={'submit'}
					className={'authorizationButton'}
					text={'Зарегистрироваться'}
					disabled={isLoading}
				/>
				<div className={'registerBlockText'}>
					<p>Еще не зарегистрированы?</p>
					<Link to={'/register'}>Регистрация</Link>
				</div>
			</div>
		</form>
	);
};

export default AuthorizationForm;
