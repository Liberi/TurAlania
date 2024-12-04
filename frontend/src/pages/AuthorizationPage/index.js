import React from 'react';
import { Footer, FormContainer, Header } from '../../components';
import { AuthorizationForm } from './components';
import './styles.css';

const AuthorizationPage = ({ navigate }) => {
	return (
		<>
			<Header initTheme={'light'} />
			<div className={'authorizationFormContainer'}>
				<FormContainer
					title={'Авторизация'}
					welcomeText={'С возвращением!'}
				>
					<AuthorizationForm navigate={navigate} />
				</FormContainer>
			</div>
			<Footer />
		</>
	);
};

export default AuthorizationPage;
