import React from 'react';
import { Footer, FormContainer, Header } from '../../components';
import { AuthorizationForm } from './components';
import './styles.css';

// eslint-disable-next-line no-unused-vars
const AuthorizationPage = ({ navigate }) => {
	return (
		<>
			<Header initTheme={'light'} />
			<div className={'authorizationFormContainer'}>
				<FormContainer
					title={'Авторизация'}
					welcomeText={'С возвращением!'}
				>
					<AuthorizationForm />
				</FormContainer>
			</div>
			<Footer />
		</>
	);
};

export default AuthorizationPage;
