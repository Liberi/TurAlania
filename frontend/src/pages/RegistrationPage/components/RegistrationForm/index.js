import React from 'react';
import { Input, MainButton } from '../../../../components';
import './styles.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
	const [showError, setShowError] = React.useState(false);

	const onSubmit = event => {
		event.preventDefault();
		setShowError(true);
	};

	return (
		<form className={'registrationForm'} onSubmit={onSubmit}>
			<Input
				type={'text'}
				name={'login'}
				id={'login'}
				placeholder={'Введите свой логин'}
				title={'Логин'}
				className={'inputRegistration'}
				error={showError ? 'Неверный логин' : ''}
			/>
			<Input
				type={'email'}
				name={'email'}
				id={'email'}
				placeholder={'Введите почту'}
				title={'Почта'}
				className={'inputRegistration'}
			/>
			<Input
				type={'password'}
				name={'password'}
				id={'password'}
				placeholder={'Введите пароль'}
				title={'Пароль'}
				className={'inputRegistration'}
			/>
			<Input
				type={'password'}
				name={'confirmPassword'}
				id={'confirmPassword'}
				placeholder={'Повторите пароль'}
				title={'Повтор пароля'}
				className={'inputRegistration'}
			/>
			<div className={'loginBlock'}>
				<MainButton
					// type={'submit'}
					className={'registrationButton'}
					text={'Зарегистрироваться'}
					onClick={() => {
						setShowError(!showError);
					}}
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
