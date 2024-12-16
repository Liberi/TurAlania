import React, { useState } from 'react';
import {
	CalendarIcon,
	MarkerIcon,
	SearchIcon,
	UserFriendsIcon,
} from '../../../../assets/svg';
import { MyDatePicker, MainButton } from '../../../../components';
import { validate, validateRules } from '../../../../utils';
import './styles.css';

const { isNotEmpty, isOnlyNumbers } = validateRules;

const rules = {
	location: [isNotEmpty('Введите место')],
	guests: [
		isNotEmpty('Введите пароль'),
		isOnlyNumbers('Только цифры'),
		value => value > 0 || 'Значение должно быть больше 0',
	],
	date: [isNotEmpty('Введите дату')],
};

const TourForm = ({ className = '', onSubmit }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		location: '',
		guests: '',
		date: null,
	});
	const [errors, setErrors] = useState({});

	const setData = (data, dataName) => {
		setErrors(old => ({ ...old, [dataName]: null }));
		setFormData(old => ({ ...old, [dataName]: data }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		const { isValid } = validate(formData, rules, setErrors);
		if (!isValid) return;

		setErrors({});
		setIsLoading(true);

		onSubmit && onSubmit();
		// TODO: Отправить запрос на регистрацию
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<form className={`tourForm ${className}`} onSubmit={handleSubmit}>
			<div className={'field'}>
				<MarkerIcon className={'formIcon'} />
				<div className={'formInfoBlock'}>
					<p className={'infoBlockText'}>Место</p>
					<input
						type={'text'}
						id={'locationInput'}
						name={'locationInput'}
						placeholder={'Ваше место путешествия?'}
						value={formData.location}
						onChange={e => setData(e.target.value, 'location')}
						className={`tourFormInput ${errors.location ? 'inputError' : ''}`}
						disabled={isLoading}
					/>
				</div>
			</div>
			<div className={'field'}>
				<div className={'formDivider'} />
				<UserFriendsIcon className={'formIcon'} />
				<div className={'formInfoBlock'}>
					<p className={'infoBlockText'}>Количество человек</p>
					<input
						type={'number'}
						min={1}
						id={'guestsInput'}
						name={'guestsInput'}
						placeholder={'Сколько с вами человек?'}
						value={formData.guests}
						onChange={e => setData(e.target.value, 'guests')}
						className={`tourFormInput ${errors.guests ? 'inputError' : ''}`}
						disabled={isLoading}
					/>
				</div>
			</div>
			<div className={'field'}>
				<div className={'formDivider'} />
				<CalendarIcon className={'formIcon'} />
				<div className={'formInfoBlock'}>
					<p className={'infoBlockText'}>Дата</p>
					<MyDatePicker
						placeholderText={'Дата поездки?'}
						selected={formData.date}
						onChange={date => setData(date, 'date')}
						className={`tourFormInput ${errors.date ? 'inputError' : ''}`}
						disabled={isLoading}
					/>
				</div>
			</div>
			<MainButton
				type={'submit'}
				variant={'secondary'}
				className={'tourFormButton'}
				disabled={isLoading}
			>
				<SearchIcon className={'formIcon'} />
				<p>Найти</p>
			</MainButton>
		</form>
	);
};

export default TourForm;
