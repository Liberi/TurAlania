import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, MainButton } from '../../../../components';
import { validate, validateRules } from '../../../../utils';
import './styles.css';

const { isNotEmpty, minLength, isEmail, isPasswordValid } = validateRules;

const rules = {
	login: [isNotEmpty('Введите имя'), minLength(2, 'Минимум 2 символов')],
	email: [isNotEmpty('Введите почту'), isEmail('Неверный формат почты')],
	password: [
		isNotEmpty('Введите пароль'),
		isPasswordValid('Пароль должен содержать минимум 6 символов'),
	],
	confirmPassword: [
		isNotEmpty('Введите пароль'),
		isPasswordValid('Пароль должен содержать минимум 6 символов'),
		(value, state) => value === state.password || 'Пароли не совпадают',
	],
};

const RegistrationForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		login: '',
		email: '',
		password: '',
		confirmPassword: '',
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

		// TODO: Отправить запрос на регистрацию
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<form className={'registrationForm'} onSubmit={onSubmit}>
			<Input
				type={'text'}
				name={'login'}
				id={'login'}
				placeholder={'Введите свое имя'}
				title={'Имя'}
				className={'inputRegistration'}
				value={formData.login}
				onChange={e => setData(e.target.value, 'login')}
				error={errors.login}
				enabled={!isLoading}
			/>
			<Input
				type={'email'}
				name={'email'}
				id={'email'}
				placeholder={'Введите почту'}
				title={'Почта'}
				className={'inputRegistration'}
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
				className={'inputRegistration'}
				value={formData.password}
				onChange={e => setData(e.target.value, 'password')}
				error={errors.password}
				enabled={!isLoading}
			/>
			<Input
				type={'password'}
				name={'confirmPassword'}
				id={'confirmPassword'}
				placeholder={'Повторите пароль'}
				title={'Повтор пароля'}
				className={'inputRegistration'}
				value={formData.confirmPassword}
				onChange={e => setData(e.target.value, 'confirmPassword')}
				error={errors.confirmPassword}
				enabled={!isLoading}
			/>
			<div className={'loginBlock'}>
				<MainButton
					type={'submit'}
					className={'registrationButton'}
					text={'Зарегистрироваться'}
					disabled={isLoading}
				/>
				<div className={'loginBlockText'}>
					<p>Уже зарегистрированы?</p>
					<Link to={'/login'}>Войти</Link>
				</div>
			</div>
		</form>
	);
};

export default RegistrationForm;
