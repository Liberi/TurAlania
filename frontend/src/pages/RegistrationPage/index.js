import React from 'react';
import { Footer, FormContainer, Header } from '../../components';
import { RegistrationForm } from './components';
import './styles.css';

// eslint-disable-next-line no-unused-vars
const RegistrationPage = ({ navigate }) => {
	return (
		<>
			<Header initTheme={'light'} />
			<div className={'registrationFormContainer'}>
				<FormContainer
					title={'Регистрация'}
					welcomeText={'Приветствуем вас!'}
				>
					<RegistrationForm />
				</FormContainer>
			</div>
			<Footer />
		</>
	);
};

export default RegistrationPage;
