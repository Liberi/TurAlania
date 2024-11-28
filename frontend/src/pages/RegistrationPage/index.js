import React from 'react';
import { Footer, FormContainer, Header } from '../../components';
import { RegistrationForm } from './components';
import './styles.css';

// eslint-disable-next-line no-unused-vars
const HomePage = ({ navigate }) => {
	return (
		<section className={'registrationPage'}>
			<Header initTheme={'light'} />
			<FormContainer
				title={'Регистрация'}
				welcomeText={'Приветствуем вас!'}
				className={'registrationFormContainer'}
			>
				<RegistrationForm />
			</FormContainer>
			<Footer />
		</section>
	);
};

export default HomePage;
