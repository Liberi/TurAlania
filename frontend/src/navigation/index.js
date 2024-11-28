import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { HomePage, RegistrationPage } from '../pages';

const Navigation = () => {
	const navigate = useNavigate();

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
			{/* <Route path={'/login'} element={<Login />} />
			<Route path={'/404'} element={<NotFound />} /> */}
			<Route path={'*'} element={<Navigate to={'/404'} />} />
		</Routes>
	);
};

export default Navigation;
