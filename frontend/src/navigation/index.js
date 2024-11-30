import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthorizationPage, HomePage, NotFoundPage, RegistrationPage } from '../pages';
import { useScrollToTop } from '../hooks';

const Navigation = () => {
	const navigate = useNavigate();
	useScrollToTop();

	return (
		<Routes>
			<Route
				exact
				path={'/'}
				element={<HomePage navigate={navigate} />}
			/>
			<Route
				path={'/register'}
				element={<RegistrationPage navigate={navigate} />}
			/>
			<Route
				path={'/login'}
				element={<AuthorizationPage navigate={navigate} />}
			/>
			<Route path={'/404'} element={<NotFoundPage />} />
			<Route path={'*'} element={<Navigate to={'/404'} />} />
		</Routes>
	);
};

export default Navigation;
