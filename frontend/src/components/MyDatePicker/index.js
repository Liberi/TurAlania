import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);
import './styles.css';

const MyDatePicker = ({ ...props }) => {
	return (
		<DatePicker
			id={'myDateInput'}
			name={'myDateInput'}
			locale={'ru'}
			dateFormat={'dd.MM.yyyy'}
			{...props}
		/>
	);
};

export default MyDatePicker;
