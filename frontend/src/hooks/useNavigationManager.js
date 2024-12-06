import { useLocation, useNavigate } from 'react-router-dom';
import { ICONS_PATH, PAGE_TITLES } from '../constants';
import { useEffect, useRef } from 'react';

const useNavigationManager = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const customTitle = useRef(null);

	useEffect(() => {
		// *NOTE: Меняем заголовок только если не был установлен кастомный
		if (!customTitle.current) {
			document.title = GetDefaultPageTitle(pathname);
		}
		// *NOTE: Сбрасываем кастомный заголовок после перехода
		customTitle.current = null;
	}, [pathname]);

	const GetDefaultPageTitle = pageName => {
		return PAGE_TITLES[pageName.replace('/', '')]
			? 'ТурАлания - ' + PAGE_TITLES[pageName.replace('/', '')]
			: 'ТурАлания - Ваше идеальное путешествие';
	};

	const navigateTo = (path, title, iconKey) => {
		if (title) {
			document.title = title;
			customTitle.current = title;
		}

		// *NOTE: Меняем иконку только если она не была установлена кастомно
		if (iconKey) {
			const favicon = document.querySelector('link[rel="icon"]');
			if (favicon) {
				favicon.href = ICONS_PATH[iconKey] || ICONS_PATH.default;
			}
		}

		navigate(path);
	};

	return { navigateTo };
};

export default useNavigationManager;
