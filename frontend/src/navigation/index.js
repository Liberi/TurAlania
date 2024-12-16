import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	AuthorizationPage,
	GalleryPage,
	HomePage,
	NotFoundPage,
	RegistrationPage,
} from '../pages';
import { useNavigationManager, useScrollToTop } from '../hooks';

const Navigation = () => {
	const { navigateTo } = useNavigationManager();
	useScrollToTop();

	return (
		<Routes>
			<Route
				exact
				path={'/'}
				element={<HomePage navigate={navigateTo} />}
			/>
			<Route
				path={'/register'}
				element={<RegistrationPage navigate={navigateTo} />}
			/>
			<Route
				path={'/login'}
				element={<AuthorizationPage navigate={navigateTo} />}
			/>
			<Route
				path={'/gallery'}
				element={<GalleryPage navigate={navigateTo} />}
			/>
			<Route
				path={'/404'}
				element={<NotFoundPage navigate={navigateTo} />}
			/>
			<Route
				path={'*'}
				element={<NotFoundPage navigate={navigateTo} />}
			/>
		</Routes>
	);
};

export default Navigation;
