import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages';

const Navigation = () => {
	return (
		<Routes>
			<Route exact path={'/'} element={<HomePage />} />
			{/* <Route path={'/login'} element={<Login />} />
			<Route path={'/register'} element={<Register />} />
			<Route path={'/404'} element={<NotFound />} /> */}
			<Route path={'*'} element={<Navigate to={'/404'} />} />
		</Routes>
	);
};

export default Navigation;
