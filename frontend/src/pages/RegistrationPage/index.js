import React from 'react';
import { Footer, FormContainer, Header } from '../../components';
import { RegistrationForm } from './components';
import './styles.css';

const RegistrationPage = ({ navigate }) => {
	return (
		<>
			<Header initTheme={'light'} navigate={navigate} />
			<div className={'registrationFormContainer'}>
				<FormContainer
					title={'Регистрация'}
					welcomeText={'Приветствуем вас!'}
				>
					<RegistrationForm navigate={navigate} />
				</FormContainer>
			</div>
			<Footer />
		</>
	);
};

export default RegistrationPage;
