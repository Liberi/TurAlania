import React, { useState } from 'react';
import {
	CalendarIcon,
	MarkerIcon,
	SearchIcon,
	UserFriendsIcon,
} from '../../../../assets/svg';
import { MyDatePicker, MainButton } from '../../../../components';
import './styles.css';
import { validate } from '../../../../utils';

const TourForm = ({ className, onSubmit }) => {
	const [formData, setFormData] = useState({
		location: '',
		guests: '',
		date: null,
	});

	const [errors, setErrors] = useState({
		location: false,
		guests: false,
		date: false,
	});

	const handleInputChange = (name, value) => {
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const cleanErrors = () => {
		setErrors({
			location: false,
			guests: false,
			date: false,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const fields = {
			location: false,
			guests: false,
			date: false,
		};

		console.log(`👾 > handleSubmit > formData:`, formData);
		fields.location = !validate.isNotEmpty(formData.location);


		fields.guests = !(
			validate.isNotEmpty(formData.guests) &&
			validate.isNumber(formData.guests) &&
			validate.isLength(formData.guests, 1, 2)
		);
		fields.date = validate.isDate(formData.date);

		setErrors(fields);

		const hasErrors = Object.values(fields).includes(true);
		if (!hasErrors) {
			console.log('Форма отправлена:', formData);
			onSubmit && onSubmit(formData);
		} else {
			setTimeout(cleanErrors, 3000);
		}
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
						onChange={e =>
							handleInputChange('location', e.target.value)
						}
						className={`tourFormInput ${errors.location ? 'inputError' : ''}`}
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
						onChange={e =>
							handleInputChange('guests', e.target.value)
						}
						className={`tourFormInput ${errors.guests ? 'inputError' : ''}`}
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
						onChange={date => handleInputChange('date', date)}
						className={`tourFormInput ${errors.date ? 'inputError' : ''}`}
					/>
				</div>
			</div>
			<MainButton
				type={'submit'}
				variant={'secondary'}
				className={'tourFormButton'}
			>
				<SearchIcon className={'formIcon'} />
				<p>Найти</p>
			</MainButton>
		</form>
	);
};

export default TourForm;
